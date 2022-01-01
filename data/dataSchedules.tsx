import { IScheduleTime, ISchedule } from "../components/modules/schedules/Schedule"
import { getScheduleDate } from "../shared/utils/date.util"

export const dataSundayScheduleTimes: IScheduleTime[] = [
  {
    time: "9:00 AM",
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
    ],
  },
  {
    time: "10:00 AM",
    color: "blue",
    events: [
      {
        repeat: [1, 3],
        title: "Gospel Doctrine",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adults",
      },
      {
        repeat: [1, 3],
        title: "Youth Sunday School",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Youth",
      },
      {
        repeat: [2, 4],
        title: "Priesthood",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adult Men",
      },
      {
        repeat: [2, 4],
        title: "Relief Society",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adult Women",
      },
      {
        repeat: [2, 4],
        title: "Young Men",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Young Men",
      },
      {
        repeat: [2, 4],
        title: "Young Women",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Young Women",
      },
      {
        repeat: [5],
        title: "Youth - Special Message",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Youth",
      },
      {
        repeat: [5],
        title: "Adults - Special Message",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adults",
      },
      {
        repeat: [1, 2, 3, 4, 5],
        title: "Primary",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Primary Kids",
      },
    ],
  },
]

export const dataSpecialSchedules: ISchedule[] = [
  {
    date: getScheduleDate(new Date("October 2, 2021")),
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
              src: "/images/events/general-conference.jpg",
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
              src: "/images/events/general-conference.jpg",
            },
          },
        ],
      },
      {
        time: "6:00 PM",
        color: "blue",
        events: [
          {
            title: "Saturday Evening Session",
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
              src: "/images/events/general-conference.jpg",
            },
          },
        ],
      },
    ],
  },
  {
    date: getScheduleDate(new Date("October 3, 2021")),
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
              src: "/images/events/general-conference.jpg",
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
              src: "/images/events/general-conference.jpg",
            },
          },
        ],
      },
    ],
  },
]
