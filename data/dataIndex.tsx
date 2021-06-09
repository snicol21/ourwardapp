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
    date: new Date("May 13, 2021 17:00:00"),
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
          date: new Date("May 13, 2021 17:00:00"),
          duration: 90,
          location: "Watch for us outside your home",
          details:
            "Members of the bishopric will be driving around the neighborhoods handing out candy to the primary and youth in the ward. We'll start in the entry roundabout at Serengeti Springs and work through the ward neighborhoods as we usually do.",
        },
      },
    },
    hidden: true,
  },
  {
    title: "Relief Society Activity",
    date: new Date("June 8, 2021 19:00:00"),
    image: {
      src: "/images/events/rs-summer-time.jpg",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Relief Society Activity",
          subtitle: "All Relief Society",
          image: {
            src: "/images/events/rs-summer-time.jpg",
          },
          date: new Date("June 8, 2021 19:00:00"),
          duration: 90,
          location: "At the Church",
          details:
            "We are going to be sharing ideas for fun summer activities and having a professional come and demonstrate how to pick and cut fresh fruit . Fruit with yummy dips, sweet bread, and lemonade will  be served!",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Stake YM Camp Parent Meeting",
    date: new Date("June 10, 2021 19:00:00"),
    image: {
      src: "/images/events/stake-ym-parent-mtg.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Stake YM Camp Parent Meeting",
          subtitle: "Parents of YM attending Stake YM Camp",
          image: {
            src: "/images/events/stake-ym-parent-mtg.png",
          },
          date: new Date("June 10, 2021 19:00:00"),
          duration: 30,
          location: "At the Church and Zoom",
          details:
            "Thursday (6/10/2021) @ 7 pm in the Oaks Building is a parent meeting for all the parents of YM planning to attend the stake YM camp July 21-23 at Camp Hunt.  There will be a virtual option as well for those who aren’t able to attend in person.",
          button: {
            text: "Zoom",
            link: {
              url: "https://zoom.us/j/91463277123?pwd=TFg4K0JHZHZvNVpGb0d2bVpaeG5Ydz09 ",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Relief Society Ministering Interviews",
    date: new Date("June 13, 2021 14:30:00"),
    image: {
      src: "/images/events/relief-society.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Ministering Interviews",
          subtitle: "Relief Society",
          image: {
            src: "/images/events/relief-society.png",
          },
          date: new Date("June 13, 2021 14:30:00"),
          duration: 120,
          location: "Relief Society Room",
          details: "Please sign-up for a time to come and visit with one of the members of the Relief Society Presidency to see how ministering is going.",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/a7pURbJ6AXEuSh7E6",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Single Adult Face to Face",
    date: new Date("June 13, 2021 16:00:00"),
    image: {
      src: "/images/events/face-to-face.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Single Adult Face to Face",
          subtitle: "Single adults ages 31 and older",
          image: {
            src: "/images/events/face-to-face.png",
          },
          date: new Date("June 13, 2021 16:00:00"),
          duration: 60,
          location: "Church Broadcast",
          details:
            "Elder Neil L. Andersen of the Quorum of the Twelve Apostles of The Church of Jesus Christ of Latter-day Saints and President Jean B. Bingham and Sister Sharon Eubank of the Relief Society General Presidency will host a Face to Face event for single adults ages 31 and older on June 13, 2021.",
          button: {
            text: "Broadcast",
            link: {
              url: "https://newsroom.churchofjesuschrist.org/event/face-to-face-for-single-adults",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Seminary Graduation",
    date: new Date("June 13, 2021 18:00:00"),
    image: {
      src: "/images/events/seminary-graduation.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Seminary Graduation",
          subtitle: "All Seminary Graduates & Parents",
          image: {
            src: "/images/events/seminary-graduation.png",
          },
          date: new Date("June 13, 2021 18:00:00"),
          duration: 60,
          location: "At the Church or Broadcast",
          details: "Seminary graduation is Sunday, June 13 at 6:00pm in this building or on Zoom. Sunday dress requested.",
          button: {
            text: "Broadcast",
            link: {
              url: "https://youtu.be/pEbPM7oabxw",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Homeless Resource Center July Assignment",
    date: new Date("July 20, 2021 16:30:00"),
    image: {
      src: "/images/welfare/gail-miller.png",
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
          date: new Date("July 20, 2021 16:30:00"),
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
    title: "Gail Miller Homeless Resource Center July Assignment",
    date: new Date("July 23, 2021 16:30:00"),
    image: {
      src: "/images/welfare/gail-miller.png",
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
    title: "American Red Cross Blood Drive",
    date: new Date("May 20, 2021 15:00:00"),
    image: {
      src: "/images/welfare/arc-cross.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "American Red Cross Blood Drive",
          subtitle: "Give Blood - Save Life",
          image: {
            src: "/images/welfare/arc-give-save-wide.png",
          },
          date: new Date("May 20, 2021 15:00:00"),
          duration: 300,
          location: "Maples Building\n6592 South Haven Maple Drive\nWest Jordan, UT 84081\nin the Cultural Hall",
          details: 'Just click "Sign Up", then click "SEE TIMES" from ARC\'s website. As since the beginning of the pandemic, the need is great!',
          button: {
            text: "Sign Up",
            link: {
              url: "https://www.redcrossblood.org/give.html/drive-results?zipSponsor=maples",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
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
    hidden: true,
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
          button: {
            text: "Optional Broadcast",
            link: {
              url: "https://youtu.be/ZPCXg-a6ss8",
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
        src: "/images/face-cards/first-counselor.webp",
        alt: "Bro.\xa0Wheeler",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second-counselor.webp",
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
  {
    title: "Welfare & Service",
    subtitle: "Where Charity Never Faileth",
    paragraph: "View information about all of the upcoming service opportunities this year.",
    image: {
      src: "/images/image-cards/welfare-and-service.png",
      alt: "The Lord's Vineyard",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/welfare",
        calendly: false,
      },
    },
    hidden: false,
  },
  {
    title: "Young Women",
    subtitle: "A Great Work",
    paragraph: "Find information about what we are doing in our Young Women's group.",
    image: {
      src: "/images/young-women/background.jpg",
    },
    button: {
      text: "Learn More",
      link: {
        url: "https://sites.google.com/view/maples3yw",
        external: true,
      },
    },
    hidden: false,
  },
]
