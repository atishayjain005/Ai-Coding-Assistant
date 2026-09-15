const DEFAULT_API_BASE_URL = "http://localhost:3000";

export function getReviewApiUrl(apiBaseUrl = import.meta.env.VITE_API_BASE_URL) {
  const baseUrl = apiBaseUrl || DEFAULT_API_BASE_URL;
  return `${baseUrl.replace(/\/$/, "")}/api/v1/reviews`;
}

export async function createReview(
  code,
  { apiBaseUrl, fetcher = globalThis.fetch } = {},
) {
  const response = await fetcher(getReviewApiUrl(apiBaseUrl), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Failed to generate review.");
  }

  if (!data.review) {
    throw new Error("The review service returned an empty response.");
  }

  return data.review;
}
