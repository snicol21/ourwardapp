import { IFaceCard } from "../components/modules/cards/FaceCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IBlockQuote } from "../components/elements/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "St. Vincent De Paul April Assignment",
  paragraph: "Monday the 26th or Thusday the 29th, 3-5 PM",
  image: {
    src: "/images/hero-cards/vinyard.png",
    alt: "Temple & Family History",
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
    title: "Coloring Pages for Children",
    subtitle: "Activities",
    image: {
      src: "/images/temple-family-history/coloring-pages.webp",
      alt: "Coloring Pages for Children",
    },
    button: {
      text: "View",
      link: {
        url: "https://www.churchofjesuschrist.org/media/collection/family-history-coloring-pages-images?lang=eng",
        external: true,
      },
    },
    hidden: false,
  },
  {
    title: "All requirements to enter the temple relate to personal holiness.",
    subtitle: "Resource",
    image: {
      src: "/images/temple-family-history/president-nelson.webp",
      alt: "President Nelson",
    },
    button: {
      text: "View",
      link: {
        url: "https://www.churchofjesuschrist.org/study/general-conference/2019/10/57nelson?lang=eng",
        external: true,
      },
    },
    hidden: false,
  },
  {
    title: "Unplugged Activities & Scavenger Hunt",
    subtitle: "Activities",
    image: {
      src: "/images/temple-family-history/scavenger-hunt.webp",
      alt: "Scavenger Hunt",
    },
    button: {
      text: "View",
      link: {
        url: "https://www.dropbox.com/sh/10ccx8vk444c6t9/AAC716lY3U172_308G-XCWnpa?dl=0",
        external: true,
      },
    },
    hidden: false,
  },
  {
    title: "Family Search Activities",
    subtitle: "Activities",
    image: {
      src: "/images/temple-family-history/family-search.webp",
      alt: "Family Search",
    },
    button: {
      text: "View",
      link: {
        url: "https://www.familysearch.org/discovery/",
        external: true,
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
      src: "/images/temple-family-history/gough.webp",
      alt: "Jordan Gough",
      width: 100,
      height: 100,
    },
  ],
  hidden: false,
}
