import { Dispatch, SetStateAction } from "react"

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

export type IModalAnnouncementData = {
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
  type: "announcement"
  data: IModalAnnouncementData
}

export type IModalWrapper = {
  id: string
  children: React.ReactNode
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}
