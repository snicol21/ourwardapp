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
  id: string
  src: string
  alt?: string
  width: number
  height: number
}

export type IHref = {
  url: string
  label?: string
  external?: boolean
  calendly?: boolean
}

export type IFaceCard = {
  id: string
  title: string
  subTitle: string
  images: IImage[]
  href: IHref
  hidden: boolean
}

export type IInfoCard = {
  id: string
  title: string
  href: IHref
  hidden: boolean
}

export type IHeroCard = {
  id: string
  title: string
  subTitle?: string
  image: IImage
  href: IHref
}

export type IMiniCard = {
  id: string
  title: string
  subTitle: string
  href: IHref | IHref[]
  hidden: boolean
}
