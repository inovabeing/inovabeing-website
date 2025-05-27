"use server"

export async function chatAction(formData: FormData) {
  // Return a minimal response
  return {
    success: false,
    message: "Chat functionality has been removed",
    data: null,
  }
}
