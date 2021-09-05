import { IContactCard } from "../components/modules/cards/ContactCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IBlockQuote } from "../components/elements/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "Gail Miller Homeless Resource Center September Assignment",
  paragraph: "Tuesday the 7th, 4:30-6:30 PM",
  image: {
    src: "/images/welfare/gail-miller.png",
    alt: "Gail Miller Homeless Resource Center",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "https://forms.gle/txSJvcFEwubXVzGZ7",
      external: true,
    },
  },
  type: "light",
}

//export const dataHeroCard: IHeroCard = {
//  title: "American Red Cross Blood Drive",
//  paragraph: "Thursday the 20th of May, 3:00-8:00 PM. Cultural Hall of the Maples Building, 6592 South Haven Maple Drive",
//  image: {
//    src: "/images/welfare/arc-give-save.png",
//    alt: "Give Blood - Save Life",
//  },
//  button: {
//    text: "Sign Up",
//    link: {
//      url: "https://www.redcrossblood.org/give.html/drive-results?zipSponsor=maples",
//      external: true,
//    },
//  },
//  type: "light",
//}

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
      src: "/images/welfare/st-vincent-de-paul.png",
      alt: "St Vincent De Paul",
    },
    button: {
      text: "View All",
      link: {
        url: "/welfare/saint-vincent-de-paul",
        external: false,
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Resource Center Assignments",
    subtitle: "Feed the Hungry",
    image: {
      src: "/images/welfare/gail-miller.png",
      alt: "Gail Miller Homeless Resource Center",
    },
    button: {
      text: "View All",
      link: {
        url: "/welfare/gail-miller",
        external: false,
      },
    },
    hidden: false,
  },
  {
    title: "Deseret Soap Assignment",
    subtitle: "Assist in Making and Packing Soap",
    image: {
      src: "/images/welfare/soap-factory.png",
      alt: "Soap Factory",
    },
    button: {
      text: "View All",
      link: {
        url: "/welfare/deseret-soap",
        external: false,
      },
    },
    hidden: false,
  },
]

export const dataFaceCard: IContactCard = {
  title: "Jason\xa0Hardman",
  subtitle: "Welfare Specialist",
  images: [
    {
      src: "/images/face-cards/jason-hardman.png",
      alt: "Jason Hardman",
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
  soft: true,
}
