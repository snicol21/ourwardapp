export const config = {
  wardName: "Maples 3rd Ward",
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
      heroCardId: "62f09489fdb487701d190e75",
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}
