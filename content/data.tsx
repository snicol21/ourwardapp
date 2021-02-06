import HeroCard from "../components/cards/HeroCard"
import InfoCard from "../components/cards/InfoCard"

export const dataSundayMeeting: HeroCard = {
  id: 1,
  title: "Sunday Meetings",
  subTitle: "Schedule, Broadcasts & Sign Ups",
  image: {
    src: "/images/jesuschrist.png",
    alt: "Jesus Christ",
    width: 100,
    height: 197,
  },
  href: "/sunday-meetings",
}

export const dataInfoCards: InfoCard[] = [
  {
    id: 1,
    title: "Temple & Family History Basket",
    href: "/",
    hidden: false,
  },
  {
    id: 2,
    title: "Bishop Mobile",
    href: "/",
    hidden: false,
  },
]
