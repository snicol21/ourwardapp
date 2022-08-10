import { config } from "../../config"

const { httpHeaders } = config

export const setHttpHeaders = (res: any) => {
  for (const [key, value] of Object.entries(httpHeaders)) {
    res.setHeader(key, value)
  }
}
