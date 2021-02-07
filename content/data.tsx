import { IHeroCard, IInfoCard, IFaceCard } from "../components/layout/Interfaces"

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
  href: "/sunday-meetings",
}

export const dataInfoCards: IInfoCard[] = [
  {
    id: "i-temp",
    title: "Temple & Family History Basket",
    href: "/",
    hidden: false,
  },
  {
    id: "i-mob",
    title: "Bishop Mobile",
    href: "/",
    hidden: false,
  },
]

export const dataFaceCards: IFaceCard[] = [
  {
    id: "f-bish",
    title: "Bishop Harman",
    subTitle: "Bishop",
    images: [
      {
        id: "f-bish-img",
        src: "/images/bishopric/bishop.png",
        alt: "Bishop Harman",
        width: 100,
        height: 100,
      },
    ],
    href: "/",
    hidden: false,
  },
  {
    id: "f-cns",
    title: "Bro. Wheeler or Bro. Hammon",
    subTitle: "Counselor",
    images: [
      {
        id: "f-cns-img1",
        src: "/images/bishopric/first_counselor.png",
        alt: "Bro. Wheeler",
        width: 100,
        height: 100,
      },
      {
        id: "f-cns-img2",
        src: "/images/bishopric/second_counselor.png",
        alt: "Bro. Hammon",
        width: 100,
        height: 100,
      },
    ],
    href: "/",
    hidden: false,
  },
]
