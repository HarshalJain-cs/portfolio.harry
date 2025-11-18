/**
 * Form Handler Utility
 * Handles form submissions to FormSpree or custom API endpoints
 */

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  inquiry_type: string
}

interface NewsletterFormData {
  email: string
  name?: string
}

interface FormResponse {
  success: boolean
  message: string
  error?: string
}

/**
 * Submit contact form
 * Uses FormSpree if configured, otherwise falls back to custom endpoint
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<FormResponse> {
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT
  const customEndpoint = process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT

  try {
    // If FormSpree endpoint is configured
    if (formspreeEndpoint && formspreeEndpoint !== 'your_formspree_endpoint_id_here') {
      const response = await fetch(
        `https://formspree.io/f/${formspreeEndpoint}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      if (!response.ok) {
        throw new Error('FormSpree submission failed')
      }

      return {
        success: true,
        message: 'Message sent successfully via FormSpree!',
      }
    }

    // If custom API endpoint is configured
    if (customEndpoint && customEndpoint !== 'https://your-api.com/contact') {
      const response = await fetch(customEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Custom API submission failed')
      }

      const result = await response.json()
      return {
        success: true,
        message: result.message || 'Message sent successfully!',
      }
    }

    // If no backend is configured, return a warning
    return {
      success: false,
      message:
        'Form backend not configured. Please add NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT or NEXT_PUBLIC_CONTACT_API_ENDPOINT to your .env.local file.',
      error: 'NO_BACKEND_CONFIGURED',
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Submit newsletter subscription
 */
export async function submitNewsletterForm(
  data: NewsletterFormData
): Promise<FormResponse> {
  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_API_ENDPOINT
  const apiKey = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY

  try {
    if (!endpoint || endpoint === 'https://your-newsletter-service.com/subscribe') {
      return {
        success: false,
        message:
          'Newsletter service not configured. Please add NEXT_PUBLIC_NEWSLETTER_API_ENDPOINT to your .env.local file.',
        error: 'NO_BACKEND_CONFIGURED',
      }
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey && apiKey !== 'your_newsletter_api_key_here'
          ? { Authorization: `Bearer ${apiKey}` }
          : {}),
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Newsletter subscription failed')
    }

    const result = await response.json()
    return {
      success: true,
      message: result.message || 'Successfully subscribed to newsletter!',
    }
  } catch (error) {
    console.error('Newsletter submission error:', error)
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
