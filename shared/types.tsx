export type IButtonColor = "primary" | "blue" | "red" | "green" | "gray"

export type IButton = {
  text?: string
  color?: IButtonColor
  link?: ILink | ILink[]
  modal?: IModal
}

export type IModal = {
  type: "announcement"
  data: IModalAnnouncementData
}

export type IModalAnnouncementData = {
  title: string
  subtitle?: string
  image?: IImage
  button?: IButton
  date: Date
  duration: number
  location?: string
  details?: string
}

export type ILink = {
  url: string
  label?: string
  external?: boolean
  calendly?: boolean
}

export type IImage = {
  src: string
  alt?: string
  width?: number
  height?: number
}
