import { IFaceCard } from "../components/modules/cards/FaceCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IBlockQuote } from "../components/elements/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "St. Vincent De Paul April Assignment",
  paragraph: "Monday the 26th or Thusday the 29th, 3-5 PM",
  image: {
    src: "/images/events/StVincentDePaulLine.png",
    alt: "St Vincent De Paul",
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
  name: "King Benjamin",
  title: "Mosiah 2:17",
  quote:
    "And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.",
}

export const dataImageCards: IImageCard[] = [
  {
    title: "St. Vincent De Paul Assignments",
    subtitle: "Feed the Hungry",
    image: {
      src: "/images/events/StVincentDePaulLine.png",
      alt: "St Vincent De Paul",
    },
    button: {
      text: "View All",
      link: {
        url: "/SaintVincentDePaul",
        external: false,
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Resource Center Assignments",
    subtitle: "Feed the Hungry",
    image: {
      src: "/images/events/GailMiller.png",
      alt: "Gail Miller Homeless Resource Center",
    },
    button: {
      text: "View All",
      link: {
        url: "/GailMiller",
        external: false,
      },
    },
    hidden: false,
  },
  {
    title: "Deseret Soap Assignment",
    subtitle: "Assist in Making and Packing Soap",
    image: {
      src: "/images/events/SoapFactory.png",
      alt: "Soap Factory",
    },
    button: {
      text: "View All",
      link: {
        url: "/DeseretSoap",
        external: false,
      },
    },
    hidden: false,
  },
]

export const dataFaceCard: IFaceCard = {
  title: "Jason\xa0Hardman",
  subtitle: "Welfare Specialist",
  images: [
    {
      src: "/images/face-cards/JasonHardman.png",
      alt: "Jason Harmdan",
      width: 100,
      height: 100,
    },
  ],
  button: {
    text: "801-613-9833",
    link: {
      url: "tel:1-801-613-9833",
    },
  },
  hidden: false,
}
