export type IImage = {
  src: string
  alt?: string
  width?: number
  height?: number
}

export type IHref = {
  url: string
  label?: string
  external?: boolean
  calendly?: boolean
}

export type IButtonColor = "primary" | "blue" | "red" | "green" | "gray"
