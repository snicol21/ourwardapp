import { IHeroCard, IInfoCard, IFaceCard, IMiniCard, IImageCard } from "../components/layout/Interfaces"

export const dataSundayMeeting: IHeroCard = {
  title: "Sunday Meetings",
  subTitle: "Schedule, Broadcasts & Sign Ups",
  button: "View",
  image: {
    src: "/images/hero-cards/jesuschrist.png",
    alt: "Jesus Christ",
    width: 100,
    height: 197,
  },
  href: {
    url: "/sunday-meetings",
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
    subTitle: "Bishop",
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
    subTitle: "Counselor",
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
    subTitle: "Interview",
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
    subTitle: "Interview",
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
    subTitle: "Visit",
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
    subTitle: "Welcome",
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
    subTitle: "Activities",
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
