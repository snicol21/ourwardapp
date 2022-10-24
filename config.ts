export const config = {
  apiUrl: process.env.API_URL,
  apiWard: process.env.API_WARD,
  wardName: "Maples 6th Ward",
  wardAddress: {
    street: "8137 Echo View Dr",
    city: "West Jordan",
    zip: "84081",
    mapUrl: "https://goo.gl/maps/JcJ3M5VN5ZAGUTWT7"
  },
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
