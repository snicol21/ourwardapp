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
    date: new Date("April 15, 2021 17:00:00"),
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
          date: new Date("April 15, 2021 17:00:00"),
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
    date: new Date("April 14, 2021 16:30:00"),
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
          date: new Date("April 14, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue, Salt Lake City UT, 84115 - Gail Miller Homeless Resource Center",
          details:
            "Request:\nThree Volunteers\nWednesday, April 14\n4:30 to 6:30 PM\n\nAssignment Details:\nIf you are experiencing COVID symptoms, please stay home, because you will be working around food, please make sure that you are showered and that your clothes are clean\n\nPlease be sure to bring the following items:\n1- Close toed shoes and socks\n2- A shirt with sleeves. The shirt can be long or short sleeved- just no tanktops\n3- A hair tie - for hair that is longer than five inches\n4- A hat - a hair net can be worn instead if you prefer that. Hair nets, beard nets, aprons, and gloves will be provided upon arrival\n\nWhere to park?\nFrom our main entrance you will see a gated area. Since it is gated you will need to use the call box to enter. When you arrive, simply press the call button and let them know that you are here to volunteer. One of our staff will open the gate for you from inside. Once in the parking area, you will follow the road around the building until you see some parking spots. Feel free to park in any open spot.\n\nHow to get inside?\nPlease enter through the front main entrance of the building.\n\nPlease contact Bro. Jason Hardman to sign up or if you have any questions at 801-613-9833",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Building Cleaning",
    date: new Date("April 17, 2021 10:00:00"),
    image: {
      src: "/images/events/cleaning.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Building Cleaning",
          image: {
            src: "/images/events/cleaning.png",
          },
          date: new Date("April 17, 2021 10:00:00"),
          duration: 60,
          location: "Ward Building",
          details:
            "We have the opportunity to clean the building. Please sign up and bring your family to help clean the building. Supplies will be provided upon arrival.",
          button: {
            text: "Sign Up",
            link: {
              url: "https://calendly.com/ssr3rdward/cleaning",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Building Cleaning",
    date: new Date("April 24, 2021 10:00:00"),
    image: {
      src: "/images/events/cleaning.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Building Cleaning",
          image: {
            src: "/images/events/cleaning.png",
          },
          date: new Date("April 24, 2021 10:00:00"),
          duration: 60,
          location: "Ward Building",
          details:
            "We have the opportunity to clean the building. Please sign up and bring your family to help clean the building. Supplies will be provided upon arrival.",
          button: {
            text: "Sign Up",
            link: {
              url: "https://calendly.com/ssr3rdward/cleaning",
              external: true,
            },
          },
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
          location: "Oaks Building",
          details:
            "We will have a special ward activity on Sunday, April 25th at 7pm for all adults. It will be held in person at the Oaks building (where we meet). We invite all to attend.\n\nIn preparation for this activity, please pay particular attention to General Conference this weekend. Take note of the things that inspire you and come prepared to share your experience and feelings with others.\n\nThis will be an unique and enjoyable evening of inspiration and fellowship. Please plan to attend.",
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
          label: { text: "Expired less than 6 months" },
          calendly: true,
        },
        {
          url: "https://calendly.com/ssr3-bishop/temple",
          label: { text: "Expired 6 months or more" },
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
          label: { text: "Ages 12-15" },
          calendly: true,
        },
        {
          url: "https://calendly.com/ssr3-bishop/youth",
          label: { text: "Ages 16-17" },
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
