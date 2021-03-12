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
    date: new Date("March 11, 2021 17:00:00"),
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
          date: new Date("March 11, 2021 17:00:00"),
          duration: 90,
          location: "Maples 3rd Ward",
        },
      },
    },
    hidden: true,
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
    hidden: false,
  },
  {
    title: "Statewide Feed Utah Food Drive",
    date: new Date("March 20, 2021 9:00:00"),
    image: {
      src: "/images/events/food-drive.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Statewide Feed Utah Food Drive",
          subtitle: "Stake Sponsored",
          image: {
            src: "/images/events/food-drive.png",
          },
          date: new Date("March 20, 2021 9:00:00"),
          duration: 60,
          location: "Collect from doorsteps",
          details:
            "The young women, young men, their adult leaders, and their parents are being asked to help collect non-perishable food donations from the homes within their ward boundaries starting @ 9 am on March 20.\n\nWe believe the drop-off site will be the stake center (Oaks Building) but will be in contact with you before March 20 to confirm that.\n\nThe Primary children ages 8 and older, their leaders, and their parents are invited to distribute door hangers to every home within the ward boundaries the week prior.\n\nThank you for all you do.\nMaples Stake YM Presidency",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Stake Youth Fireside",
    date: new Date("March 23, 2021 19:00:00"),
    image: {
      src: "/images/events/fireside.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Stake Youth Fireside",
          subtitle: "Stake Sponsored",
          image: {
            src: "/images/events/fireside.png",
          },
          date: new Date("March 23, 2021 19:00:00"),
          duration: 60,
          location: "Chapel",
          details:
            "The stake will be holding a stake youth fireside on Tuesday, March 23 @ 7 pm.  We would like your help to create a video montage to show as part of the fireside.\n\nPlease take a video of yourself answering one of the three questions below:\n\n1) How have I heard Him through the pandemic?\n2) How have I kept my testimony strong this last year?\n3) What am I looking forward to this year?\n\nHere are a few tips to make your video successful:\n1) Shoot the video using the back camera whenever possible. Front cameras are usually lower resolution which result in grainy videos when uploaded.\n2) Record in the wide (horizontal) position if possible.\n3) Limit the length of the answers/videos to around 20-30 seconds each to make files easier to send/receive and work with.\n\nHere are two ways to get the videos to the stake:\n1) Upload them to Google Drive using above video link\n2) Text them to Brother Victor Duran at 801-503-8989.\n\nPlease submit/upload your video by Sunday, March 14th.\n\nWe look forward to seeing you on the big screen as part of the fireside!\n\nThanks for your help.",
          button: {
            text: "Upload Video",
            link: {
              url: "https://drive.google.com/drive/folders/1ORkNWDbNVC9g8eiUr-FzYfKqa1xWyvVM?usp=sharing",
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
