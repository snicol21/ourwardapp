import { IScheduleTime } from "../components/modules/schedules/Schedule"

export const dataScheduleTimes: IScheduleTime[] = [
  {
    time: "10:30 AM",
    color: "blue",
    events: [
      {
        repeat: [1, 3],
        title: "Youth Sunday School",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Youth",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-youth.ourwardapp.com",
            external: true,
          },
        },
      },
      {
        repeat: [2, 4],
        title: "Priesthood",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Adult Men",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-eq.ourwardapp.com",
            external: true,
          },
        },
      },
      {
        repeat: [2, 4],
        title: "Young Men",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Young Men",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-ym.ourwardapp.com",
            external: true,
          },
        },
      },
      {
        repeat: [5],
        title: "Youth - Bishopric Message",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Youth",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-youth.ourwardapp.com",
            external: true,
          },
        },
      },
    ],
  },
  {
    time: "11:00 AM",
    color: "red",
    events: [
      {
        repeat: [1, 3],
        title: "Gospel Doctrine",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Adults",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-gospel.ourwardapp.com",
            external: true,
          },
        },
      },
      {
        repeat: [2, 4],
        title: "Relief Society",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Adult Women",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-rs.ourwardapp.com",
            external: true,
          },
        },
      },
      {
        repeat: [2, 4],
        title: "Young Women",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Young Women",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-yw.ourwardapp.com",
            external: true,
          },
        },
      },
      {
        repeat: [5],
        title: "Adults - Bishopric Message",
        subtitle: "Zoom Meeting",
        paragraph: "30 Min. All Adults",
        button: {
          text: "Join Meeting",
          link: {
            url: "http://virtual-gospel.ourwardapp.com",
            external: true,
          },
        },
      },
    ],
  },
  {
    time: "12:00 PM",
    color: "green",
    events: [
      {
        repeat: [1, 2, 3, 4, 5],
        title: "Sacrament",
        subtitle: "In-Person Meeting",
        paragraph: "45 Min. All Individuals (up to 99 people)",
        button: {
          text: "Sign Up",
          link: {
            url: "https://calendly.com/ssr3rdward/sacrament",
            calendly: true,
          },
        },
        image: {
          src: "/images/image-cards/sacrament.jpeg",
          alt: "New Move-in",
        },
      },
      {
        repeat: [1, 2, 3, 4, 5],
        title: "Sacrament Live Stream",
        subtitle: "YouTube Live Stream",
        paragraph: "30 Min. All Individuals",
        button: {
          text: "Join Live Stream",
          link: {
            url: "http://virtual-sacrament.ourwardapp.com",
            external: true,
          },
        },
        image: {
          src: "/images/image-cards/sacrament-virtual.jpg",
          alt: "New Move-in",
        },
      },
    ],
  },
]
