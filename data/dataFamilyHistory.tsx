import { IContactCard } from "../components/modules/cards/ContactCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IBlockQuote } from "../components/elements/headers/BlockQuote"

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

export const dataFaceCard: IContactCard = {
  title: "John\xa0Joost",
  subtitle: "Temple & Family History Leader",
  hidden: false,
  soft: true,
}
