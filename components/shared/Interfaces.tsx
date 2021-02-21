import { Dispatch, SetStateAction } from "react"

export type IImage = {
  src: string
  alt?: string
  width?: number
  height?: number
}

export type ILink = {
  url: string
  label?: string
  external?: boolean
  calendly?: boolean
}

export type IButtonColor = "primary" | "blue" | "red" | "green" | "gray"

export type IButton = {
  text?: string
  color?: IButtonColor
  link?: ILink | ILink[]
  modal?: IModal
}

export type IModalAnnouncementData = {
  title: string
  subtitle?: string
  image?: IImage
  button?: IButton
  date: string
  time: string
  location?: string
  details?: string
}

export type IModal = {
  type: "announcement"
  data: IModalAnnouncementData
}

export type IModalWrapper = {
  id: string
  children: React.ReactNode
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}
