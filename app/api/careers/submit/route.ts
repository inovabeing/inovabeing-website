import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, message } = body

    console.log("Received career application:", { fullName, email, phone, message: message ? "provided" : "empty" })

    // Validate required fields
    if (!fullName || !email || !phone) {
      console.error("Missing required fields:", { fullName: !!fullName, email: !!email, phone: !!phone })
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare form data for n8n webhook
    const formData = new FormData()
    formData.append("field-0", fullName.trim())
    formData.append("field-1", email.trim())
    formData.append("field-2", phone.trim())
    formData.append("field-3", message?.trim() || "No additional message provided")

    console.log("Submitting to n8n webhook...")

    // Submit to n8n webhook with timeout and better error handling
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    try {
      const n8nResponse = await fetch("https://inovabeing.app.n8n.cloud/form/cd8f0610-9c40-4eb8-9e9b-8e977f9d242d", {
        method: "POST",
        body: formData,
        signal: controller.signal,
        headers: {
          // Don't set Content-Type for FormData, let the browser set it
        },
      })

      clearTimeout(timeoutId)

      console.log("n8n response status:", n8nResponse.status)

      // Try to get response text for debugging
      let responseText = ""
      try {
        responseText = await n8nResponse.text()
        console.log("n8n response body:", responseText.substring(0, 200) + "...")
      } catch (textError) {
        console.log("Could not read n8n response body:", textError)
      }

      // Check for specific n8n form trigger not active error
      if (n8nResponse.status === 404 && responseText.includes("Form Trigger isn't listening yet")) {
        console.error("n8n form trigger is not active")
        return NextResponse.json(
          {
            error: "webhook_not_active",
            message: "Application system is currently being configured. Please try again later or contact us directly.",
          },
          { status: 503 }, // Service Unavailable
        )
      }

      if (!n8nResponse.ok) {
        console.error("n8n webhook failed:", {
          status: n8nResponse.status,
          statusText: n8nResponse.statusText,
          responseText: responseText.substring(0, 200),
        })
        return NextResponse.json(
          {
            error: "webhook_failed",
            message: "Failed to submit application to processing system",
            details: `n8n returned status ${n8nResponse.status}`,
          },
          { status: 500 },
        )
      }

      // Log successful submission
      console.log("Career application submitted successfully to n8n:", {
        name: fullName,
        email: email,
        timestamp: new Date().toISOString(),
        n8nStatus: n8nResponse.status,
      })

      return NextResponse.json(
        {
          success: true,
          message: "Application submitted successfully",
        },
        { status: 200 },
      )
    } catch (fetchError) {
      clearTimeout(timeoutId)

      if (fetchError instanceof Error && fetchError.name === "AbortError") {
        console.error("n8n webhook request timed out")
        return NextResponse.json(
          {
            error: "timeout",
            message: "Request timed out. Please try again.",
          },
          { status: 408 },
        )
      }

      console.error("Network error submitting to n8n:", fetchError)
      return NextResponse.json(
        {
          error: "network_error",
          message: "Network error occurred while submitting application",
          details: fetchError instanceof Error ? fetchError.message : "Unknown network error",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error processing career application:", error)
    return NextResponse.json(
      {
        error: "internal_error",
        message: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
