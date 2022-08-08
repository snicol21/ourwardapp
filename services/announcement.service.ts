import { IAnnouncement } from "../components/modules/announcements/Announcement"

const apiUrl = "https://api.latterdayward.com/api"
const apiWard = "maples3rd"
const headers = {
  headers: {
    "x-api-key": process.env.LATTER_DAY_API_TOKEN,
    "Content-Type": "application/json",
  },
}

/**
 * ANNOUNCEMENTS
 */
export const announcementsRequest = new Request(`${apiUrl}/announcement/${apiWard}`, headers)

export const convertAnnouncement = (announcement: IAnnouncementResponse): IAnnouncement => {
  return {
    title: announcement?.title,
    description: announcement?.description,
    ...(announcement?.dates?.length === 1 && { date: new Date(announcement.dates[0].date) }),
    ...(announcement?.dates?.length > 1 && {
      dates: announcement?.dates?.map((subDate) => {
        return { date: new Date(subDate.date), ...(subDate?.subTitle && { subTitle: subDate.subTitle }) }
      }),
    }),
    ...(announcement?.location?.address && { location: announcement.location }),
  }
}

export const convertAnnouncements = (announcements: IAnnouncementResponse[]): IAnnouncement[] => {
  return announcements.filter((announcement) => announcement.active).map((announcement) => convertAnnouncement(announcement))
}

/**
 * RESPONSE TYPE
 */
export type IAnnouncementResponse = {
  id: string
  wardPath: string
  title: string
  description: string
  active: boolean
  dates: [
    {
      subTitle: string
      date: Date
    }
  ]
  location: {
    address: string
    link: string
  }
  type: string
}
