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

export type IModalEventData = {
  title: string
  subtitle?: string
  image?: IImage
  button?: string
  buttonColor?: IButtonColor
  href?: IHref
  date: string
  time: string
  location?: string
  details?: string
}

export type IModal = {
  type: "event"
  data: IModalEventData
}
