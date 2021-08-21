import { IScheduleTime, ISchedule } from "../components/modules/schedules/Schedule"
import { getScheduleDate } from "../shared/utils/date.util"

export const dataSundayScheduleTimes: IScheduleTime[] = [
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
    ],
  },
  {
    time: "1:00 PM",
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
        title: "Youth - Bishopric Message",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Youth",
      },
      {
        repeat: [5],
        title: "Adults - Bishopric Message",
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
    date: getScheduleDate(new Date("August 21, 2021")),
    times: [
      {
        time: "6:00 PM",
        color: "blue",
        events: [
          {
            title: "Adult Session",
            subtitle: "Stake Conference",
            paragraph: "Oaks Building (8137 S. Echo View Dr.)",
            button: {
              text: "Program",
              link: {
                url: "https://drive.google.com/file/d/1H5p6WgkmkovdMYX_gal2Pw_m73ryM9IF/view?usp=sharing",
                external: true,
              },
            },
            image: {
              src: "/images/events/stake-conference.png",
            },
          },
        ],
      },
    ],
  },
  {
    date: getScheduleDate(new Date("August 22, 2021")),
    times: [
      {
        time: "7:00 AM",
        color: "green",
        events: [
          {
            title: "Leadership Session",
            subtitle: "Stake Conference",
            paragraph: "Oaks Building (8137 S. Echo View Dr.)",
            button: {
              text: "Program",
              link: {
                url: "https://drive.google.com/file/d/1dQgGKAjjhYY14G8ocmVG8nzaEHO6NK4D/view?usp=sharing",
                external: true,
              },
            },
            image: {
              src: "/images/events/stake-conference.png",
            },
          },
        ],
      },
      {
        time: "10:00 AM",
        color: "green",
        events: [
          {
            title: "General Session",
            subtitle: "Stake Conference",
            paragraph: "Oaks Building (8137 S. Echo View Dr.) or Join the Broadcast",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://youtu.be/rPsTTZF_lHE",
                external: true,
              },
            },
            image: {
              src: "/images/events/stake-conference.png",
            },
          },
        ],
      },
    ],
  },
]
