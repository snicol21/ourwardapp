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
    title: "Bishop Mobile",
    date: new Date("April 8, 2021 17:00:00"),
    image: {
      src: "/images/events/bishop-mobile.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Bishop Mobile",
          subtitle: "Ward Activity",
          image: {
            src: "/images/events/bishop-mobile.png",
          },
          date: new Date("April 8, 2021 17:00:00"),
          duration: 90,
          location: "Watch for us outside your home",
          details:
            "Members of the bishopric will be driving around the neighborhoods handing out candy to the primary and youth in the ward. We'll start in the entry roundabout at Serengeti Springs and work through the ward neighborhoods as we usually do.",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Welfare Assignment",
    date: new Date("March 12, 2021 15:00:00"),
    image: {
      src: "/images/events/welfare.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Welfare Assignment",
          image: {
            src: "/images/events/welfare.png",
          },
          date: new Date("March 12, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South, Salt Lake City, UT 84101 - St. Vincent de Paul Dining Room",
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
    hidden: true,
  },
  {
    title: "Temple Cleaning Assignment (FILLED)",
    date: new Date("March 30, 2021 21:45:00"),
    image: {
      src: "/images/events/oquirrh-temple.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Temple Cleaning Assignment (FILLED)",
          subtitle: "Service Project",
          image: {
            src: "/images/events/oquirrh-temple.png",
          },
          date: new Date("March 30, 2021 21:45:00"),
          duration: 135,
          location: "Oquirrh Mountain Temple",
          details:
            "ASSIGNMENT HAS BEEN FILLED. Temple cleaning assignment coming up. 4 endowed volunteers are needed who each hold a current temple recommend.\n\nThey must enter the temple through the west doors (baptistery entrance) at 9:45 PM as a group and report to the baptistery chapel downstairs.\n\nSunday Best required - white work clothing will be provided.\n\nWear clean, comfortable shoes - slip-on covers will be provided.\n\nBring your own mask to wear.\n\nText Bro. Jason Hardman if you're interested (801-613-9833).",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Special Ward Activity",
    date: new Date("April 25, 2021 19:00:00"),
    image: {
      src: "/images/events/special-activity.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Special Ward Activity",
          subtitle: "For All Adults",
          image: {
            src: "/images/events/special-activity.png",
          },
          date: new Date("April 25, 2021 19:00:00"),
          duration: 60,
          location: "Ward Building",
          details: "Please put this on your calendar, you will not want to miss it. More details to come!",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Combined Youth Activity",
    date: new Date("April 14, 2021 19:00:00"),
    image: {
      src: "/images/events/combined-youth.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Combined Youth Activity",
          subtitle: "For All Youth",
          image: {
            src: "/images/events/combined-youth.png",
          },
          date: new Date("April 14, 2021 19:00:00"),
          duration: 60,
          location: "Ward Building",
          details: "Combined Youth Activity with Patriarch Harris. Sunday dress is appropriate, amazing refreshments will be provided.",
        },
      },
    },
    hidden: false,
  },
  {
    title: "April 2021 General Conference",
    date: new Date("April 3, 2021 10:00:00"),
    image: {
      src: "/images/events/general-conference.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "April 2021 General Conference",
          subtitle: "Online Event",
          image: {
            src: "/images/events/general-conference.png",
          },
          date: new Date("April 3, 2021 10:00:00"),
          duration: 0,
          location: "Online Event",
          details:
            "The global broadcast will originate from the Conference Center in Salt Lake City, Utah, USA. The conference consists of five sessions:\n\nSaturday at 10:00 a.m. mountain daylight time (MDT).\nSaturday at 2:00 p.m. MDT.\nSaturday at 6:00 p.m. MDT. This session is addressed to boys and men ages 11 and up, but everyone is welcome to view it. (In the October 2021 general conference, a similar session will be addressed to girls and women ages 11 and up.)\nSunday at 10:00 a.m. MDT.\nSunday at 2:00 p.m. MDT.",
          button: {
            text: "More Details",
            link: {
              url: "https://www.churchofjesuschrist.org/events/april-2021-general-conference?lang=eng",
              external: true,
            },
          },
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
