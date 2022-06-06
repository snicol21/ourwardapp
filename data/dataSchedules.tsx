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
        paragraph: "60 Min. All Individuals",
        image: {
          src: "/images/image-cards/sacrament.webp",
        },
      },
      {
        repeat: [1, 2, 3, 4, 5],
        title: "Sacrament Live Stream",
        subtitle: "YouTube Live Stream",
        paragraph: "60 Min. All Individuals",
        button: {
          text: "Join Live Stream",
          link: {
            url: "https://youtu.be/0CYhm3jJqSE",
            external: true,
          },
        },
        image: {
          src: "/images/image-cards/sacrament-virtual.webp",
          alt: "New Move-in",
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
  /*
  {
    date: getScheduleDate(new Date("February 5, 2022")),
    times: [
      {
        time: "6:00 PM",
        color: "green",
        events: [
          {
            title: "Saturday Adult Session (In-Person)",
            subtitle: "Maples Stake Conference",
            paragraph: "60 Min. - All Adults\n\n8137 Echo View Dr, West Jordan, UT 84081",
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
          {
            title: "Saturday Adult Session (Live Stream)",
            subtitle: "Maples Stake Conference",
            paragraph: "60 Min. - All Adults",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://youtu.be/TdBSW0sCKBA",
                external: true,
              },
            },
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
        ],
      },
    ],
  },
  */
  /*
  {
    date: getScheduleDate(new Date("February 6, 2022")),
    times: [
      {
        time: "7:30 AM",
        color: "red",
        events: [
          {
            title: "Leadership Session (In-Person)",
            subtitle: "Maples Stake Conference",
            paragraph:
              "60 Min. - Leadership\nStake and ward council members, their counselors & secretaries, and the priest quorum 1st assistant and oldest YW class president\n\n8137 Echo View Dr, West Jordan, UT 84081",
            image: {
              src: "https://assets.ldscdn.org/73/9f/739fda296913c3dc2370fb242e8c378a5f30f8c31047568/bible_videos_jesus_resurrected_fishing.jpeg",
            },
          },
          {
            title: "Leadership Session (Live Stream)",
            subtitle: "Maples Stake Conference",
            paragraph:
              "60 Min. - Leadership\nStake and ward council members, their counselors & secretaries, and the priest quorum 1st assistant and oldest YW class president",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://youtu.be/fxkfJbiSTDk",
                external: true,
              },
            },
            image: {
              src: "https://assets.ldscdn.org/73/9f/739fda296913c3dc2370fb242e8c378a5f30f8c31047568/bible_videos_jesus_resurrected_fishing.jpeg",
            },
          },
        ],
      },
      {
        time: "10:00 AM",
        color: "primary",
        events: [
          {
            title: "General Session (In-Person)",
            subtitle: "Maples Stake Conference",
            paragraph: "2 Hrs. - Everyone\n\n8137 Echo View Dr, West Jordan, UT 84081",
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
          {
            title: "General Session (Live Stream)",
            subtitle: "Maples Stake Conference",
            paragraph: "2 Hrs. - Everyone",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://youtu.be/kXoOmZTSVwY",
                external: true,
              },
            },
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
        ],
      },
    ],
  },
  */
  {
    date: getScheduleDate(new Date("April 2, 2022")),
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
                url: "https://newsroom.churchofjesuschrist.org/event/april-2022-general-conference",
                external: true,
              },
            },
            image: {
              src: "https://newsroom.churchofjesuschrist.org/media/960x540/painting-prophet-post-hero-10000x10000.jpeg",
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
                url: "https://newsroom.churchofjesuschrist.org/event/april-2022-general-conference",
                external: true,
              },
            },
            image: {
              src: "https://newsroom.churchofjesuschrist.org/media/960x540/painting-prophet-post-hero-10000x10000.jpeg",
            },
          },
        ],
      },
      {
        time: "6:00 PM",
        color: "red",
        events: [
          {
            title: "Saturday Evening Women's Session",
            subtitle: "April General Conference",
            paragraph: "2 Hours - All Women & Young Women",
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://newsroom.churchofjesuschrist.org/event/april-2022-general-conference",
                external: true,
              },
            },
            image: {
              src: "https://newsroom.churchofjesuschrist.org/media/960x540/painting-prophet-post-hero-10000x10000.jpeg",
            },
          },
        ],
      },
    ],
  },
  {
    date: getScheduleDate(new Date("April 3, 2022")),
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
                url: "https://newsroom.churchofjesuschrist.org/event/april-2022-general-conference",
                external: true,
              },
            },
            image: {
              src: "https://newsroom.churchofjesuschrist.org/media/960x540/painting-prophet-post-hero-10000x10000.jpeg",
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
                url: "https://newsroom.churchofjesuschrist.org/event/april-2022-general-conference",
                external: true,
              },
            },
            image: {
              src: "https://newsroom.churchofjesuschrist.org/media/960x540/painting-prophet-post-hero-10000x10000.jpeg",
            },
          },
        ],
      },
    ],
  },
]
