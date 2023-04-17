import { ISchedule } from "../components/modules/schedules/Schedule"
import { getScheduleDate } from "../shared/utils/date.util"

export const dataSpecialSchedules: ISchedule[] = [
  {
    date: getScheduleDate(new Date("August 20, 2022")),
    times: [
      {
        time: "6:00 PM",
        color: "green",
        events: [
          {
            title: "Saturday Adult Session (In-Person)",
            subtitle: "Maples Stake Conference",
            description: "60 Min. - All Adults\n\n6592 W. Haven Maple Dr., West Jordan, UT 84081",
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
          {
            title: "Saturday Adult Session (Live Stream)",
            subtitle: "Maples Stake Conference",
            description: "60 Min. - All Adults",
            /*
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://youtu.be/TdBSW0sCKBA",
                external: true,
              },
            },
            */
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
        ],
        isAgenda: false
      },
    ],
  },
  {
    date: getScheduleDate(new Date("August 21, 2022")),
    times: [
      {
        time: "7:00 AM",
        color: "red",
        events: [
          {
            title: "Leadership Session (In-Person)",
            subtitle: "Maples Stake Conference",
            description:
              "60 Min. - Leadership\nStake and ward council members, their counselors & secretaries, and the priest quorum 1st assistant and oldest YW class president\n\n6592 W. Haven Maple Dr., West Jordan, UT 84081",
            image: {
              src: "https://assets.ldscdn.org/73/9f/739fda296913c3dc2370fb242e8c378a5f30f8c31047568/bible_videos_jesus_resurrected_fishing.jpeg",
            },
          },
          {
            title: "Leadership Session (Live Stream)",
            subtitle: "Maples Stake Conference",
            description:
              "60 Min. - Leadership\nStake and ward council members, their counselors & secretaries, and the priest quorum 1st assistant and oldest YW class president",
            /*
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://youtu.be/fxkfJbiSTDk",
                external: true,
              },
            },
            */
            image: {
              src: "https://assets.ldscdn.org/73/9f/739fda296913c3dc2370fb242e8c378a5f30f8c31047568/bible_videos_jesus_resurrected_fishing.jpeg",
            },
          },
        ],
        isAgenda: false
      },
      {
        time: "10:00 AM",
        color: "primary",
        events: [
          {
            title: "General Session (In-Person)",
            subtitle: "Maples Stake Conference",
            description: "2 Hrs. - Everyone\n\n6592 W. Haven Maple Dr., West Jordan, UT 84081",
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
          {
            title: "General Session (Live Stream)",
            subtitle: "Maples Stake Conference",
            description: "2 Hrs. - Everyone",
            /*
            button: {
              text: "Join Broadcast",
              link: {
                url: "https://youtu.be/kXoOmZTSVwY",
                external: true,
              },
            },
            */
            image: {
              src: "https://assets.ldscdn.org/ee/52/ee5282bb18248f61866b05ccb48931a69f046e6f/pictures_of_jesus_with_a_child.jpeg",
            },
          },
        ],
        isAgenda: false
      },
    ],
  },
  /*
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
            description: "2 Hours - Everyone",
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
            description: "2 Hours - Everyone",
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
        isAgenda: false
      },
      {
        time: "6:00 PM",
        color: "red",
        events: [
          {
            title: "Saturday Evening Women's Session",
            subtitle: "April General Conference",
            description: "2 Hours - All Women & Young Women",
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
        isAgenda: false
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
            description: "2 Hours - Everyone",
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
        isAgenda: false
      },
      {
        time: "2:00 PM",
        color: "green",
        events: [
          {
            title: "Sunday Afternoon Session",
            subtitle: "April General Conference",
            description: "2 Hours - Everyone",
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
        isAgenda: false
      },
    ],
  },
  */
]
