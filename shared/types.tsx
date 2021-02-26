import { SetStateAction } from "react"

export type IButtonColor = "primary" | "blue" | "red" | "green" | "gray"

export type IButton = {
  text?: string
  color?: IButtonColor
  link?: ILink | ILink[]
  modal?: IModal
}

export type IModal =
  | {
      type: "event"
      toggleModal?: () => void
      data: IModalEventData
    }
  | {
      type: "event-action"
      toggleModal?: () => void
      data?: IModalEventActionData
    }

export type IModalEventData = {
  title: string
  subtitle?: string
  image?: IImage
  button?: IButton
  date: Date
  duration: number
  location?: string
  details?: string
}

export type IModalEventActionData = {
  toggleModal: () => void
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
