export const config = {
  apiUrl: process.env.LATTER_DAY_API_URL,
  apiWard: process.env.LATTER_DAY_API_WARD,
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LATTER_DAY_API_TOKEN,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: process.env.LATTER_DAY_HERO_CARD,
    },
  },
}
