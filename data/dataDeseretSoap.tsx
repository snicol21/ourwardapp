import { IFaceCard } from "../components/modules/cards/FaceCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IEventCard } from "../components/modules/cards/EventCard"
import { IMiniCard } from "../components/modules/cards/MiniCard"
import { IBlockQuote } from "../components/elements/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "Deseret Soap August Assignment",
  paragraph: "Monday the 16th, 12 to 4 PM",
  image: {
    src: "/images/events/SoapFactory.png",
    alt: "Soap Factory",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "https://forms.gle/Wn5sDesnH8e9rvRU7",
      external: true,
    },
  },
  type: "light",
}

export const dataBlockQuote: IBlockQuote = {
  name: "Moroni",
  title: "Moroni 7:46-47",
  quote:
    "Wherefore, my beloved brethren, if ye have not charity, ye are nothing, for charity never faileth. Wherefore, cleave unto charity, which is the greatest of all, for all things must fail— But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him.",
}
