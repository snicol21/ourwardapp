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
        paragraph: "45 Min. All Individuals (up to 150 people)",
        button: {
          text: "Sign Up",
          link: {
            url: "https://calendly.com/ssr3rdward/sacrament",
            calendly: true,
          },
        },
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
]

export const dataSpecialSchedules: ISchedule[] = [
  {
    date: getScheduleDate(new Date("April 3, 2021")),
    times: [
      {
        time: "10:00 AM",
        color: "green",
        events: [
          {
            title: "Saturday Morning Session",
            subtitle: "April General Conference",
            paragraph: "2 Hours - Everyone",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://www.churchofjesuschrist.org/broadcasts?lang=eng",
                external: true,
              },
            },
            image: {
              src: "/images/events/general-conference.png",
            },
          },
        ],
      },
      {
        time: "2:00 PM",
        color: "green",
        events: [
          {
            title: "Saturday Afternoon Session",
            subtitle: "April General Conference",
            paragraph: "2 Hours - Everyone",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://www.churchofjesuschrist.org/broadcasts?lang=eng",
                external: true,
              },
            },
            image: {
              src: "/images/events/general-conference.png",
            },
          },
        ],
      },
      {
        time: "6:00 PM",
        color: "blue",
        events: [
          {
            title: "Priesthood Session",
            subtitle: "April General Conference",
            paragraph: "2 Hours - Boys and Men Ages 11+",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://www.churchofjesuschrist.org/broadcasts?lang=eng",
                external: true,
              },
            },
            image: {
              src: "/images/events/general-conference-2.png",
            },
          },
        ],
      },
    ],
  },
  {
    date: getScheduleDate(new Date("April 4, 2021")),
    times: [
      {
        time: "10:00 AM",
        color: "green",
        events: [
          {
            title: "Sunday Morning Session",
            subtitle: "April General Conference",
            paragraph: "2 Hours - Everyone",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://www.churchofjesuschrist.org/broadcasts?lang=eng",
                external: true,
              },
            },
            image: {
              src: "/images/events/general-conference.png",
            },
          },
        ],
      },
      {
        time: "2:00 PM",
        color: "green",
        events: [
          {
            title: "Sunday Afternoon Session",
            subtitle: "April General Conference",
            paragraph: "2 Hours - Everyone",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://www.churchofjesuschrist.org/broadcasts?lang=eng",
                external: true,
              },
            },
            image: {
              src: "/images/events/general-conference.png",
            },
          },
        ],
      },
    ],
  },
]
