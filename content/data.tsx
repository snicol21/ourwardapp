import { IHeroCard, IInfoCard, IFaceCard, IMiniCard } from "../components/layout/Interfaces"

export const dataSundayMeeting: IHeroCard = {
  id: "s",
  title: "Sunday Meetings",
  subTitle: "Schedule, Broadcasts & Sign Ups",
  image: {
    id: "s-img",
    src: "/images/jesuschrist.png",
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
    id: "i-temp",
    title: "Temple & Family History Basket",
    href: {
      url: "/",
    },
    hidden: false,
  },
  {
    id: "i-mob",
    title: "Bishop Mobile",
    href: {
      url: "/",
    },
    hidden: false,
  },
]

export const dataFaceCards: IFaceCard[] = [
  {
    id: "f-bish",
    title: "Bishop\xa0Harman",
    subTitle: "Bishop",
    images: [
      {
        id: "f-bish-img",
        src: "/images/bishopric/bishop.png",
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
    id: "f-cns",
    title: "Bro.\xa0Wheeler or Bro.\xa0Hammon",
    subTitle: "Counselor",
    images: [
      {
        id: "f-cns-img1",
        src: "/images/bishopric/first_counselor.png",
        alt: "Bro.\xa0Wheeler",
        width: 100,
        height: 100,
      },
      {
        id: "f-cns-img2",
        src: "/images/bishopric/second_counselor.png",
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
    id: "m-temp",
    title: "Temple Recommend",
    subTitle: "Interview",
    href: [
      {
        url: "https://calendly.com/ssr3-bishop/bishop",
        label: "Expired less than 6 months",
        calendly: true,
      },
      {
        url: "https://calendly.com/ssr3-bishop/bishop",
        label: "Expired 6 months or more",
        calendly: true,
      },
    ],
    hidden: false,
  },
  {
    id: "m-youth",
    title: "Youth Interview",
    subTitle: "Interview",
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
    id: "m-visit",
    title: "Bishopric Visit",
    subTitle: "Visit",
    href: {
      url: "https://calendly.com/ssr3rdward/bishopric-visit",
      calendly: true,
    },
    hidden: false,
  },
]
