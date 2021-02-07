export type IImage = {
  id: string
  src: string
  alt?: string
  width: number
  height: number
}

export type IFaceCard = {
  id: string
  title: string
  subTitle: string
  images: IImage[]
  href: string
  passHref?: boolean
  hidden: boolean
}

export type IInfoCard = {
  id: string
  title: string
  href: string
  passHref?: boolean
  hidden: boolean
}

export type IHeroCard = {
  id: string
  title: string
  subTitle?: string
  image: IImage
  href: string
  passHref?: boolean
}
