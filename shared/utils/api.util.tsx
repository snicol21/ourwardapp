import { config } from "../../config"

const { httpHeaders } = config

export const setHttpHeaders = (res: any) => {
  for (const [key, value] of Object.entries(httpHeaders)) {
    res.setHeader(key, value)
  }
}

export const filterByType = (data: any[], type: string, top?: number): any[] | any => {
  if (top) return data.filter((item) => item.type === type).slice(0, top)
  return data.filter((item) => item.type === type)
}

export const filterById = (data: any[], id: string): any => {
  return data.filter((item) => item.id === id)[0]
}
