import { IFaceCard } from "../components/modules/cards/FaceCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"

export const dataHeroCard: IHeroCard = {
  title: "Youth Conference\nSign Up",
  paragraph: "All youth ages 11 - 18",
  image: {
    src: "/images/youth-conference/M3W_YouthConf_Image-1.png",
    alt: "Youth Conference - Small and simple means",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe0jrytdc8DlWg4jsZYhi5a2iPBvDdPIYygz9hUhcTvUx7MvA/viewform",
      external: true,
    },
  },
  type: "light",
}

export const dataImageCards: IImageCard[] = [
  {
    image: {
      src: "/images/youth-conference/M3W_YouthConf_Donate.png",
      alt: "Youth Conference - Donate",
    },
    hidden: false,
  },
]

export const dataFaceCard: IFaceCard = {
  title: "Danielle\xa0Gough",
  subtitle: "Youth Conference Committee",
  images: [
    {
      src: "",
      alt: "",
      width: 0,
      height: 0,
    },
  ],
}
