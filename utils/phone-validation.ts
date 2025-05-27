// Phone number validation patterns by country code
export const phonePatterns: Record<string, { pattern: RegExp; example: string; minLength: number; maxLength: number }> =
  {
    // India
    "+91": {
      pattern: /^[6-9]\d{9}$/,
      example: "9876543210",
      minLength: 10,
      maxLength: 10,
    },
    // US/Canada
    "+1": {
      pattern: /^[2-9]\d{9}$/,
      example: "2345678901",
      minLength: 10,
      maxLength: 10,
    },
    // UK
    "+44": {
      pattern: /^7\d{9}$/,
      example: "7123456789",
      minLength: 10,
      maxLength: 10,
    },
    // Australia
    "+61": {
      pattern: /^4\d{8}$/,
      example: "412345678",
      minLength: 9,
      maxLength: 9,
    },
    // Germany
    "+49": {
      pattern: /^1[567]\d{8,10}$/,
      example: "1512345678",
      minLength: 10,
      maxLength: 12,
    },
    // France
    "+33": {
      pattern: /^[67]\d{8}$/,
      example: "612345678",
      minLength: 9,
      maxLength: 9,
    },
    // Japan
    "+81": {
      pattern: /^[7-9]0\d{8}$/,
      example: "7012345678",
      minLength: 10,
      maxLength: 10,
    },
    // China
    "+86": {
      pattern: /^1\d{10}$/,
      example: "13123456789",
      minLength: 11,
      maxLength: 11,
    },
    // Singapore
    "+65": {
      pattern: /^[89]\d{7}$/,
      example: "81234567",
      minLength: 8,
      maxLength: 8,
    },
    // UAE
    "+971": {
      pattern: /^5[0-9]\d{7}$/,
      example: "501234567",
      minLength: 9,
      maxLength: 9,
    },
  }

// Default pattern for countries not in the list
const defaultPattern = {
  pattern: /^\d{7,15}$/,
  example: "1234567890",
  minLength: 7,
  maxLength: 15,
}

// Get validation pattern for a specific country code
export function getPhonePattern(countryCode: string) {
  return phonePatterns[countryCode] || defaultPattern
}

// Validate a phone number against its country code
export function validatePhoneForCountry(
  phone: string,
  countryCode: string,
): { isValid: boolean; errorMessage?: string } {
  const pattern = getPhonePattern(countryCode)

  // Check if phone number is empty
  if (!phone) {
    return { isValid: false, errorMessage: "Phone number is required" }
  }

  // Check length
  if (phone.length < pattern.minLength) {
    return {
      isValid: false,
      errorMessage: `Phone number is too short. ${countryCode} numbers should be ${pattern.minLength} digits (e.g., ${pattern.example})`,
    }
  }

  if (phone.length > pattern.maxLength) {
    return {
      isValid: false,
      errorMessage: `Phone number is too long. ${countryCode} numbers should be ${pattern.maxLength} digits (e.g., ${pattern.example})`,
    }
  }

  // Check pattern
  if (!pattern.pattern.test(phone)) {
    return {
      isValid: false,
      errorMessage: `Invalid format for ${countryCode} number. Example: ${pattern.example}`,
    }
  }

  return { isValid: true }
}

// Enhanced email validation
export function validateEmail(email: string): { isValid: boolean; errorMessage?: string } {
  // Basic check if email is empty
  if (!email) {
    return { isValid: false, errorMessage: "Email address is required" }
  }

  // Check for @ symbol
  if (!email.includes("@")) {
    return { isValid: false, errorMessage: "Email must contain an @ symbol" }
  }

  // Split email into local and domain parts
  const [local, domain] = email.split("@")

  // Check local part
  if (!local || local.length === 0) {
    return { isValid: false, errorMessage: "Email must have a username before the @ symbol" }
  }

  // Check domain part
  if (!domain || domain.length === 0) {
    return { isValid: false, errorMessage: "Email must have a domain after the @ symbol" }
  }

  // Check for domain extension
  if (!domain.includes(".")) {
    return { isValid: false, errorMessage: "Email domain must include an extension (e.g., .com)" }
  }

  // Check domain extension length
  const extension = domain.split(".").pop()
  if (!extension || extension.length < 2) {
    return { isValid: false, errorMessage: "Email domain extension is invalid" }
  }

  // More comprehensive regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(email)) {
    return { isValid: false, errorMessage: "Please enter a valid email address" }
  }

  return { isValid: true }
}
