import { IHeroCard } from "../../components/modules/cards/HeroCard"
import { IEventCard } from "../../components/modules/cards/EventCard"
import { IBlockQuote } from "../../components/elements/headers/BlockQuote"

export const dataHeroCard: IHeroCard = {
  title: "Gail Miller Homeless Resource Center July Assignment",
  paragraph: "Tuesday the 20th or Friday the 23rd, 4:30-6:30 PM",
  image: {
    src: "/images/welfare/gail-miller.png",
    alt: "Gail Miller Homeless Resource Center",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "https://forms.gle/TdcMZRM6fd2QwcNp7",
      external: true,
    },
  },
  type: "light",
}

export const dataInfoCards: IEventCard[] = [

  {
    title: "Gail Miller Homeless Resource Center July Assignment",
    date: new Date("July 23, 2021 16:30:00"),
    image: {
      src: "/images/welfare/orange-gradient.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "July Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/gail-miller.png",
          },
          date: new Date("July 23, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue\nSalt Lake City UT, 84115",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/TdcMZRM6fd2QwcNp7",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Homeless Resource Center Sep. Assignment",
    date: new Date("September 8, 2021 16:30:00"),
    image: {
      src: "/images/welfare/orange-gradient.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "September Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/gail-miller.png",
          },
          date: new Date("September 8, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue\nSalt Lake City UT, 84115",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/txSJvcFEwubXVzGZ7",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Homeless Resource Center Dec. Assignment",
    date: new Date("December 28, 2021 16:30:00"),
    image: {
      src: "/images/welfare/orange-gradient.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "December Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/gail-miller.png",
          },
          date: new Date("December 28, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue\nSalt Lake City UT, 84115",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/7dUru3xLHXTfeZrU7",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Homeless Resource Center Dec. Assignment",
    date: new Date("December 31, 2021 16:30:00"),
    image: {
      src: "/images/welfare/orange-gradient.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "December Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/gail-miller.png",
          },
          date: new Date("December 31, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue\nSalt Lake City UT, 84115",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/7dUru3xLHXTfeZrU7",
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
  title: "Doctrine and Covenants 38:24-27",
  quote:
    "And let every man esteem his brother as himself, and practice virtue and holiness before me. And again I say unto you, let every man esteem his brother as himself. For what man among you having twelve sons, and is no respecter of them, and they serve him obediently, and he saith unto the one: Be thou clothed in robes and sit thou here; and to the other: Be thou clothed in rags and sit thou there—and looketh upon his sons and saith I am just? Behold, this I have given unto you as a parable, and it is even as I am. I say unto you, be one; and if ye are not one ye are not mine.",
}
