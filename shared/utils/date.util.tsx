import { IScheduleDate } from "../../components/modules/schedules/Schedule"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import isBetween from "dayjs/plugin/isBetween"
import advancedFormat from "dayjs/plugin/advancedFormat"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

dayjs.extend(relativeTime)
dayjs.extend(isBetween)
dayjs.extend(advancedFormat)
dayjs.extend(isSameOrAfter)

export type IDateDisplay = {
  dateDisplay: string
  dateFullDisplay: string
  timeDisplay: string
  timeRangeDisplay?: string
  relativeDisplay: string
  isoString: string
  isWithin: boolean
  isOver: boolean
}

export function getScheduleDate(date: Date) {
  return {
    date: date,
    dateFormatted: dayjs(date).format("dddd, MMMM Do, YYYY"),
    weekOfTheMonth: Math.ceil(date.getDate() / 7),
  }
}

export function getNextSunday(): Date {
  const rawDate = new Date()
  const dayOfWeek = 7
  let resultDate = new Date(rawDate.getTime())
  resultDate.setDate(rawDate.getDate() + ((7 + dayOfWeek - rawDate.getDay()) % 7))
  return resultDate
}

export function getDateDisplay(rawDate: Date, withinDays: number, duration?: number): IDateDisplay {
  const date = dayjs(rawDate)
  return {
    dateDisplay: date.format("ddd. MMMM Do"),
    dateFullDisplay: date.format("dddd, MMMM Do, YYYY"),
    timeDisplay: date.format("h:mm A"),
    timeRangeDisplay: duration ? `${date.format("h:mm A")} - ${date.add(duration, "minute").format("h:mm A")}` : undefined,
    relativeDisplay: dayjs(date).fromNow(false),
    isoString: date.toISOString(),
    isWithin: date.isBetween(dayjs(), dayjs().add(withinDays, "day"), null, "[]"),
    isOver: dayjs(date).diff(dayjs(), "hour") < 0,
  }
}

export function isSameOrAfterToday(rawDate: Date) {
  return dayjs(rawDate).isSameOrAfter(dayjs(), "date")
}
