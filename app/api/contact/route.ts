import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, countryCode, message, preferredTime } = body;
    
    if (!name || !email || !phone || !countryCode || !message || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets - Phone column will contain full number with country code
    const sheetData = {
      name: name.trim(),
      email: email.trim(),
      phone: `${countryCode} ${phone}`, // Format: +91 6304510473
      message: message.trim(),
      preferredTime: preferredTime,
    };

    const scriptUrl = process.env.NEXT_PUBLIC_CONTACT_SHEET_WEBHOOK_URL;
    
    if (!scriptUrl) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Optimized fetch with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Apps Script error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      );
    }

    const result = await response.json();
    const duration = Date.now() - startTime;
    
    console.log(`Contact form submitted successfully in ${duration}ms`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      duration: duration
    });

  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`Contact form error after ${duration}ms:`, error);
    
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout. Please try again.' },
        { status: 408 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
