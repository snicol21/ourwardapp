import { IScheduleTime, ISchedule } from "../components/modules/schedules/Schedule"
import { getScheduleDate } from "../shared/utils/date.util"

export const dataSundayScheduleTimes: IScheduleTime[] = [
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
        paragraph: "All Individuals",
        image: {
          src: "/images/image-cards/sacrament.webp",
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
          src: "/images/image-cards/sacrament-virtual.webp",
        },
      },
    ],
  },
  {
    time: "12:50 PM",
    color: "primary",
    events: [
      {
        repeat: [1, 2, 3, 4, 5],
        title: "Primary Singing Time",
        subtitle: "In-Person Meeting",
        paragraph: "10 Min. All Primary Children",
        button: {
          text: "Optional Live Stream",
          link: {
            url: "http://virtual-primary.ourwardapp.com",
            external: true,
          },
        },
        image: {
          src: "/images/image-cards/primary-singing-time.png",
        },
      },
    ],
  },
]

export const dataSpecialSchedules: ISchedule[] = [
  {
    date: getScheduleDate(new Date("May 30, 2021")),
    times: [
      {
        time: "11:00 AM",
        color: "red",
        events: [
          {
            title: "Combined Youth & Adults",
            subtitle: "Zoom Meeting",
            paragraph: "30 Min. Ward Mission Message",
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
            paragraph: "All Individuals",
            image: {
              src: "/images/image-cards/sacrament.webp",
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
              src: "/images/image-cards/sacrament-virtual.webp",
            },
          },
        ],
      },
      {
        time: "12:50 PM",
        color: "primary",
        events: [
          {
            repeat: [1, 2, 3, 4, 5],
            title: "Primary Singing Time",
            subtitle: "In-Person Meeting",
            paragraph: "10 Min. All Primary Children",
            button: {
              text: "Optional Live Stream",
              link: {
                url: "http://virtual-primary.ourwardapp.com",
                external: true,
              },
            },
            image: {
              src: "/images/image-cards/primary-singing-time.png",
            },
          },
        ],
      },
    ],
  },
]
