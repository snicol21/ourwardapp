import { IFaceCard } from "../components/modules/cards/FaceCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IEventCard } from "../components/modules/cards/EventCard"
import { IMiniCard } from "../components/modules/cards/MiniCard"
import { IBlockQuote } from "../components/elements/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "St. Vincent De Paul April Assignment",
  paragraph: "Monday the 26th or Thusday the 29th, 3-5 PM",
  image: {
    src: "/images/events/StVincentDePaulLine.png",
    alt: "St Vincent De Paul",
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

export const dataInfoCards: IEventCard[] = [
  {
    title: "Vincent De Paul Service April Assignment",
    date: new Date("April 26, 2021 15:00:00"),
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul Service",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/events/StVincentDePaulLine.png",
          },
          date: new Date("April 26, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South, Salt Lake City, UT 84101",
          details:
            "Parking available in fenced lot east of building\n\nYouth 12 and older welcome with adult supervision\n\nAprons and plastic gloves provided\n\nAdditional details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/xdGLQNinPAvwijxs9",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Vincent De Paul Service April Assignment",
    date: new Date("April 29, 2021 15:00:00"),
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul Service",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/events/StVincentDePaulLine.png",
          },
          date: new Date("April 29, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South, Salt Lake City, UT 84101",
          details:
            "Parking available in fenced lot east of building\n\nYouth 12 and older welcome with adult supervision\n\nAprons and plastic gloves provided\n\nAdditional details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/xdGLQNinPAvwijxs9",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Vincent De Paul Service July Assignment",
    date: new Date("July 28, 2021 15:00:00"),
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul Service",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/events/StVincentDePaulLine.png",
          },
          date: new Date("July 28, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South, Salt Lake City, UT 84101",
          details:
            "Parking available in fenced lot east of building\n\nYouth 12 and older welcome with adult supervision\n\nAprons and plastic gloves provided\n\nAdditional details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/CSgBwoNDheMsVW597",
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
    date: new Date("November 8, 2021 15:00:00"),
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul Service",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/events/StVincentDePaulLine.png",
          },
          date: new Date("November 8, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South, Salt Lake City, UT 84101",
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
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul Service",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/events/StVincentDePaulLine.png",
          },
          date: new Date("November 11, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South, Salt Lake City, UT 84101",
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
