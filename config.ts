export const config = {
  apiUrl: process.env.API_URL,
  apiWard: process.env.API_WARD,
  wardName: "Maples 6th Ward",
  apiHeaders: {
    headers: {
      "x-api-key": process.env.API_TOKEN,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: process.env.API_HERO_CARD,
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}
