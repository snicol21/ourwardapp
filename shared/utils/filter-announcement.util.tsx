import { IAnnouncement } from "../../components/modules/announcements/Announcement"
import { isBeforeNow } from "./date.util"

// .filter((announcement) => isSameOrAfterToday(announcement.date))
// .sort((a: any, b: any) => a.date - b.date)

const keepForHoursFromStart = 2

export function filterAndSortAnnouncements(announcements: IAnnouncement[]) {
  const filteredAnnouncements: IAnnouncement[] = []

  for (let i = 0; i < announcements.length; i++) {
    if (announcements[i].date) {
      if (!isBeforeNow(announcements[i].date, keepForHoursFromStart)) {
        filteredAnnouncements.push(announcements[i])
        if (announcements[i].dates) delete announcements[i].dates
      }
    } else if (announcements[i].dates?.length) {
      for (let j = announcements[i].dates.length; j >= 0; j--) {
        if (isBeforeNow(announcements[i].dates[j]?.date, keepForHoursFromStart)) announcements[i].dates.splice(j, 1)
      }
      announcements[i].dates.sort((a: any, b: any) => a.date - b.date)
      announcements[i].date = announcements[i].dates[0].date
      if (announcements[i].dates.length) filteredAnnouncements.push(announcements[i])
    }
  }

  return filteredAnnouncements.sort((a: any, b: any) => a.date - b.date)
}
