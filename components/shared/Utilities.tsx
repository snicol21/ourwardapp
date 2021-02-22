import { IScheduleDate } from "../schedules/Schedule"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import isBetween from "dayjs/plugin/isBetween"
import advancedFormat from "dayjs/plugin/advancedFormat"
import { IDateDisplay } from "./Interfaces"

dayjs.extend(relativeTime)
dayjs.extend(isBetween)
dayjs.extend(advancedFormat)

export function getNextDayOfWeek(rawDate: Date, dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7): IScheduleDate {
  let resultDate = new Date(rawDate.getTime())
  resultDate.setDate(rawDate.getDate() + ((7 + dayOfWeek - rawDate.getDay()) % 7))

  return {
    date: resultDate,
    dateFormatted: dayjs(resultDate).format("dddd, MMMM Do, YYYY"),
    weekOfTheMonth: Math.floor(resultDate.getDate() / 7),
  }
}

export const hideBodyScroll = (hide: boolean) => {
  if (typeof document !== `undefined`) {
    const setOverFlowY = (value) => (document.getElementsByTagName("body")[0].style.overflowY = value)
    hide ? setOverFlowY("hidden") : setOverFlowY("auto")
  }
}

export function getDateDisplay(rawDate: Date, withinDays: number, duration?: number): IDateDisplay {
  const date = dayjs(rawDate)
  return {
    dateDisplay: date.format("ddd. MMMM Do"),
    dateFullDisplay: date.format("dddd, MMMM Do, YYYY"),
    timeDisplay: date.format("h:mm A"),
    timeRangeDisplay: duration ? `${date.format("h:mm A")} - ${date.add(duration, "minute").format("h:mm A")}` : undefined,
    relativeDisplay: dayjs().to(date, true),
    isoString: date.toISOString(),
    isWithin: date.isBetween(dayjs(), dayjs().add(withinDays, "day"), "day"),
  }
}
