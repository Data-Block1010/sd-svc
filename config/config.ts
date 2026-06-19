if (!process.env.NEXT_PUBLIC_API_BASE_URL && typeof window !== "undefined") {
  // eslint-disable-next-line no-console
  console.error(
    "NEXT_PUBLIC_API_BASE_URL is not set. API requests will be sent to " +
      "this app's own origin instead of the backend, and will 404. See " +
      ".env.example."
  );
}

export const CONFIG = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export default CONFIG;
