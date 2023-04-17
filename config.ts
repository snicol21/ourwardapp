export const config = {
  wardName: process.env.LATTER_DAY_API_WARD,
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "maples3rd",
  wardAddress: {
    street: "8137 Echo View Dr",
    city: "West Jordan",
    zip: "84081",
    mapUrl: "https://goo.gl/maps/JcJ3M5VN5ZAGUTWT7",
  },
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
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}
