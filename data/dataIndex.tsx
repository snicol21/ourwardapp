import { IFaceCard } from "../components/modules/cards/FaceCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IEventCard } from "../components/modules/cards/EventCard"
import { IMiniCard } from "../components/modules/cards/MiniCard"

export const dataSundayMeeting: IHeroCard = {
  title: "Sunday Meetings",
  subtitle: "Maples 3rd Ward",
  paragraph: "Schedule, Broadcasts & Sign Ups",
  image: {
    src: "/images/hero-cards/church-building.webp",
    alt: "Meetinghouse",
  },
  button: {
    text: "View",
    link: {
      url: "/sunday",
    },
  },
  type: "dark",
}

export const dataInfoCards: IEventCard[] = [
  {
    title: "Baptism Preview",
    date: new Date("February 28, 2021 19:00:00"),
    image: {
      src: "/images/announcements/baptism-preview.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Baptism Preview",
          image: {
            src: "/images/announcements/baptism-preview.png",
            alt: "Bishop",
          },
          date: new Date("February 28, 2021 19:00:00"),
          duration: 60,
          location: "Maples 3rd Ward",
          button: {
            text: "Zoom",
            link: {
              url: "https://zoom.us/j/97091079133?pwd=ZG9jUFVONFNGYW9rRXV6K3lJVjVUUT09",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Welfare Assignment",
    date: new Date("March 9, 2021 15:00:00"),
    image: {
      src: "/images/announcements/welfare.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Welfare Assignment",
          image: {
            src: "/images/announcements/welfare.png",
            alt: "Bishop",
          },
          date: new Date("March 9, 2021 15:00:00"),
          duration: 120,
          location: "Maples 3rd Ward",
          details:
            "For this welfare assignment food will be prepared for approximately 600 homeless persons each day (from 3:00 - 5:00 PM); however, tasks vary depending on daily needs. Each volunteer will need to wear closed-toed shoes. Aprons and plastic gloves are provided. Youth 12 and older are welcome with adult supervision.\n\nPlease contact Bro. Jason Hardman with any question at 801-613-9833",
          button: {
            text: "Sign Up",
            link: {
              url: "https://calendly.com/ssr3rdward/welfare",
              calendly: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Bishop Mobile",
    date: new Date("March 11, 2021 17:00:00"),
    image: {
      src: "/images/announcements/bishop-mobile.png",
      alt: "Bishop Mobile",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Bishop Mobile",
          subtitle: "Ward Activity",
          image: {
            src: "/images/announcements/bishop-mobile.png",
            alt: "Bishop",
          },
          date: new Date("March 11, 2021 17:00:00"),
          duration: 90,
          location: "Maples 3rd Ward",
        },
      },
    },
    hidden: false,
  },
]

export const dataFaceCards: IFaceCard[] = [
  {
    title: "Bishop\xa0Harman",
    subtitle: "Bishop",
    images: [
      {
        src: "/images/face-cards/bishop.webp",
        alt: "Bishop\xa0Harman",
        width: 100,
        height: 100,
      },
    ],
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3-bishop/bishop",
        calendly: true,
      },
    },
    hidden: false,
  },
  {
    title: "Bro.\xa0Wheeler or Bro.\xa0Hammon",
    subtitle: "Counselor",
    images: [
      {
        src: "/images/face-cards/first_counselor.webp",
        alt: "Bro.\xa0Wheeler",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second_counselor.webp",
        alt: "Bro.\xa0Hammon",
        width: 100,
        height: 100,
      },
    ],
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3rdward/counselor",
        calendly: true,
      },
    },
    hidden: false,
  },
]

export const dataMiniCards: IMiniCard[] = [
  {
    title: "Temple Recommend",
    subtitle: "Interview",
    button: {
      text: "Schedule",
      link: [
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
    },
    hidden: false,
  },
  {
    title: "Youth Interview",
    subtitle: "Interview",
    button: {
      text: "Schedule",
      link: [
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
    },
    hidden: false,
  },
  {
    title: "Bishopric Visit",
    subtitle: "Visit",
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3rdward/bishopric-visit",
        calendly: true,
      },
    },
    hidden: false,
  },
]

export const dataImageCards: IImageCard[] = [
  {
    title: "New Move-in",
    subtitle: "Welcome",
    paragraph: "Welcome! The bishop would like to get to know you better and welcome you to the ward.",
    image: {
      src: "/images/image-cards/new-movein.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3-bishop/new-move-in",
        calendly: true,
      },
    },
    hidden: false,
  },
  {
    title: "Temple & Family History",
    subtitle: "Activities",
    paragraph:
      "Sign up for the opportunity to have the basket in your home. Find resources and activities to help your family get involved with the temple and family history.",
    image: {
      src: "/images/image-cards/temple-and-family-history.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/temple-family-history",
        calendly: false,
      },
    },
    hidden: false,
  },
]
