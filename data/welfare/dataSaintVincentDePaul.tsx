import { IHeroCard } from "../../components/modules/cards/HeroCard"
import { IEventCard } from "../../components/modules/cards/EventCard"
import { IBlockQuote } from "../../components/elements/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "St. Vincent De Paul November Assignment",
  paragraph: "Monday the 8th or Thursday the 11th, 3-5 PM",
  image: {
    src: "/images/welfare/st-vincent-de-paul.png",
    alt: "St Vincent De Paul",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "https://forms.gle/KSffXLbqhyrNWDhJ7",
      external: true,
    },
  },
  type: "light",
}

export const dataInfoCards: IEventCard[] = [
  {
    title: "Vincent De Paul Service November Assignment",
    date: new Date("November 8, 2021 15:00:00"),
    image: {
      src: "/images/welfare/green-gradient.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul Service",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/st-vincent-de-paul.png",
          },
          date: new Date("November 8, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South\nSalt Lake City, UT 84101",
          details:
            "Parking available in fenced lot east of building\n\nYouth 12 and older welcome with adult supervision\n\nAprons and plastic gloves provided\n\nAdditional details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/KSffXLbqhyrNWDhJ7",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Vincent De Paul Service November Assignment",
    date: new Date("November 11, 2021 15:00:00"),
    image: {
      src: "/images/welfare/green-gradient.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul Service",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/st-vincent-de-paul.png",
          },
          date: new Date("November 11, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South\nSalt Lake City, UT 84101",
          details:
            "Parking available in fenced lot east of building\n\nYouth 12 and older welcome with adult supervision\n\nAprons and plastic gloves provided\n\nAdditional details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/KSffXLbqhyrNWDhJ7",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
]

export const dataBlockQuote: IBlockQuote = {
  name: "Jesus Christ",
  title: "Mathew 25:40",
  quote:
    "And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
}
