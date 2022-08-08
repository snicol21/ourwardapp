export const config = {
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "maples3rd",
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
}
