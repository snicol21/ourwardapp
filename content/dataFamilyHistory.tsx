import { IFaceCard } from "../components/cards/FaceCard"
import { IHeroCard } from "../components/cards/HeroCard"
import { IImageCard } from "../components/cards/ImageCard"
import { IBlockQuote } from "../components/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "Temple & Family History Basket",
  paragraph: "Sign up for your family to have a turn.",
  image: {
    src: "/images/image-cards/temple-and-family-history.webp",
    alt: "Temple & Family History",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "/temple-family-history",
    },
  },
  type: "light",
}

export const dataBlockQuote: IBlockQuote = {
  name: "Dale. G Renlund",
  title: "Quorum of the Twelve Apostles",
  quote: "Family history and temple work is not only for the dead but blesses the living as well.",
}

export const dataImageCards: IImageCard[] = [
  {
    title: "Coloring Pages for Children",
    subtitle: "Activities",
    image: {
      src: "/images/temple-family-history/coloring-pages.jpg",
      alt: "Coloring Pages for Children",
    },
    button: {
      text: "View",
      link: {
        url: "/temple-family-history",
        external: false,
      },
    },
    hidden: false,
  },
  {
    title: "All requirements to enter the temple relate to personal holiness.",
    subtitle: "Resource",
    image: {
      src: "/images/temple-family-history/president-nelson.jpeg",
      alt: "President Nelson",
    },
    button: {
      text: "View",
      link: {
        url: "/temple-family-history",
        external: false,
      },
    },
    hidden: false,
  },
  {
    title: "Unplugged Activities & Scavenger Hunt",
    subtitle: "Activities",
    image: {
      src: "/images/temple-family-history/scavenger-hunt.jpg",
      alt: "Scavenger Hunt",
    },
    button: {
      text: "View",
      link: {
        url: "/temple-family-history",
        external: false,
      },
    },
    hidden: false,
  },
  {
    title: "Family Search Activities",
    subtitle: "Activities",
    image: {
      src: "/images/temple-family-history/family-search.jpg",
      alt: "Family Search",
    },
    button: {
      text: "View",
      link: {
        url: "/temple-family-history",
        external: false,
      },
    },
    hidden: false,
  },
]

export const dataFaceCard: IFaceCard = {
  title: "Jordan\xa0Gough",
  subtitle: "Temple & Family History Leader",
  images: [
    {
      src: "/images/temple-family-history/gough.jpg",
      alt: "Jordan Gough",
      width: 100,
      height: 100,
    },
  ],
  hidden: false,
}
