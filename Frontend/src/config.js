const PRODUCTION_API = "https://shop-co-eqcq.onrender.com";

/** Strip trailing slashes and a mistaken `/api` suffix from env base URL */
function normalizeBaseUrl(url) {
  if (!url) return url;
  const trimmed = url.replace(/\/+$/, "");
  return trimmed.endsWith("/api") ? trimmed.slice(0, -4) : trimmed;
}

export const API_URL = normalizeBaseUrl(
  import.meta.env.VITE_API_URL ||
    (import.meta.env.MODE === "development"
      ? "http://localhost:4000"
      : PRODUCTION_API)
);
