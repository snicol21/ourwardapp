import { IFaceCard } from "../components/cards/FaceCard"
import { IHeroCard } from "../components/cards/HeroCard"
import { IImageCard } from "../components/cards/ImageCard"
import { IInfoCard } from "../components/cards/InfoCard"
import { IMiniCard } from "../components/cards/MiniCard"

export const dataSundayMeeting: IHeroCard = {
  title: "Sunday Meetings",
  subtitle: "Maples 3rd Ward",
  paragraph: "Schedule, Broadcasts & Sign Ups",
  image: {
    src: "/images/hero-cards/church-building.jpg",
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

export const dataInfoCards: IInfoCard[] = [
  {
    title: "Relief Society Birthday Social",
    button: {
      link: {
        url: "/",
      },
    },
    hidden: false,
  },
  {
    title: "Bishop Mobile",
    button: {
      modal: {
        type: "announcement",
        data: {
          title: "Bishop Mobile",
          subtitle: "Ward Activity",
          image: {
            src: "/images/announcements/bishop-mobile.jpg",
            alt: "Meetinghouse",
          },
          date: "Saturday, February 13, 2021",
          time: "2:00 PM - 4:00 PM",
          location: "Maples 3rd Ward",
          details:
            "Valentine's Day is on it's way! And so is the Bishop Mobile! Be on the lookup this Saturday, the 13th. We'll start our valentine distributing trek at 2pm",
          button: {
            text: "Sign Up",
            link: {
              url: "/",
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
        src: "/images/face-cards/bishop.png",
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
        src: "/images/face-cards/first_counselor.png",
        alt: "Bro.\xa0Wheeler",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second_counselor.png",
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
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    image: {
      src: "/images/image-cards/new-movein.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/welcome",
        calendly: false,
      },
    },
    hidden: false,
  },
  {
    title: "Temple & Family History",
    subtitle: "Activities",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    image: {
      src: "/images/image-cards/temple-and-family-history.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/temple-and-family-history",
        calendly: false,
      },
    },
    hidden: false,
  },
]
