export type IButton = {
  children: React.ReactNode
  disabled?: boolean
  href?: IHref | IHref[]
  className?: string
  type?: "dark" | "light"
}

export type IIcon = {
  name: "chevron-down" | ""
  className?: string
}

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

export type IFaceCard = {
  title: string
  subTitle: string
  images: IImage[]
  button: string
  href: IHref
  hidden: boolean
}

export type IImageCard = {
  title: string
  subTitle: string
  description: string
  image: IImage
  button: string
  href: IHref
  hidden: boolean
}

export type IInfoCard = {
  title: string
  button: string
  href: IHref
  hidden: boolean
}

export type IHeroCard = {
  title: string
  subTitle?: string
  image: IImage
  button: string
  href: IHref
}

export type IMiniCard = {
  title: string
  subTitle: string
  button: string
  href: IHref | IHref[]
  hidden: boolean
}
