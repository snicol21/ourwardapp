import { IFaceCard } from "../components/cards/FaceCard"
import { IHeroCard } from "../components/cards/HeroCard"
import { IImageCard } from "../components/cards/ImageCard"
import { IInfoCard } from "../components/cards/InfoCard"
import { IMiniCard } from "../components/cards/MiniCard"

export const dataSundayMeeting: IHeroCard = {
  title: "Sunday Meetings",
  subtitle: "Schedule, Broadcasts & Sign Ups",
  button: "View",
  image: {
    src: "/images/hero-cards/jesuschrist.png",
    alt: "Jesus Christ",
    width: 100,
    height: 197,
  },
  href: {
    url: "/sunday",
  },
}

export const dataInfoCards: IInfoCard[] = [
  {
    title: "Temple & Family History Basket",
    button: "Learn More",
    href: {
      url: "/",
    },
    hidden: false,
  },
  {
    title: "Bishop Mobile",
    button: "Learn More",
    href: {
      url: "/",
    },
    hidden: false,
  },
]

export const dataFaceCards: IFaceCard[] = [
  {
    title: "Bishop\xa0Harman",
    subtitle: "Bishop",
    button: "Schedule",
    images: [
      {
        src: "/images/face-cards/bishop.png",
        alt: "Bishop\xa0Harman",
        width: 100,
        height: 100,
      },
    ],
    href: {
      url: "https://calendly.com/ssr3-bishop/bishop",
      calendly: true,
    },
    hidden: false,
  },
  {
    title: "Bro.\xa0Wheeler or Bro.\xa0Hammon",
    subtitle: "Counselor",
    button: "Schedule",
    images: [
      {
        src: "/images/face-cards/first_counselor.png",
        alt: "Bro.\xa0Wheeler",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second_counselor.png",
        alt: "Bro.\xa0Hammon",
        width: 100,
        height: 100,
      },
    ],
    href: {
      url: "https://calendly.com/ssr3rdward/counselor",
      calendly: true,
    },
    hidden: false,
  },
]

export const dataMiniCards: IMiniCard[] = [
  {
    title: "Temple Recommend",
    subtitle: "Interview",
    button: "Schedule",
    href: [
      {
        url: "https://calendly.com/ssr3rdward/temple",
        label: "Expired less than 6 months",
        calendly: true,
      },
      {
        url: "https://calendly.com/ssr3-bishop/temple",
        label: "Expired 6 months or more",
        calendly: true,
      },
    ],
    hidden: false,
  },
  {
    title: "Youth Interview",
    subtitle: "Interview",
    button: "Schedule",
    href: [
      {
        url: "https://calendly.com/ssr3rdward/youth-interview",
        label: "Ages 12-15",
        calendly: true,
      },
      {
        url: "https://calendly.com/ssr3-bishop/youth",
        label: "Ages 16-17",
        calendly: true,
      },
    ],
    hidden: false,
  },
  {
    title: "Bishopric Visit",
    subtitle: "Visit",
    button: "Schedule",
    href: {
      url: "https://calendly.com/ssr3rdward/bishopric-visit",
      calendly: true,
    },
    hidden: false,
  },
]

export const dataImageCards: IImageCard[] = [
  {
    title: "New Move-in",
    subtitle: "Welcome",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    button: "Learn More",
    image: {
      src: "/images/image-cards/new-movein.webp",
      alt: "New Move-in",
    },
    href: {
      url: "/welcome",
      calendly: false,
    },
    hidden: false,
  },
  {
    title: "Temple & Family History",
    subtitle: "Activities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    button: "Learn More",
    image: {
      src: "/images/image-cards/temple-and-family-history.webp",
      alt: "New Move-in",
    },
    href: {
      url: "/temple-and-family-history",
      calendly: false,
    },
    hidden: false,
  },
]
