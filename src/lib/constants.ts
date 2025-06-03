let rawURL = process.env.NEXT_PUBLIC_SCROLLY_URL

// Fallback for local development
if (!rawURL || rawURL === "undefined") {
  rawURL = "http://localhost:3000"
}

export const siteURL = new URL(rawURL)
export const siteOrigin = siteURL.origin
