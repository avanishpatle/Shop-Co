const PRODUCTION_API = "https://shop-co-eqcq.onrender.com";

export const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:4000"
    : PRODUCTION_API);
