import { IScheduleDate } from "../schedule/Schedule"

export function getNextDayOfWeek(date: Date, dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7): IScheduleDate {
  let resultDate = new Date(date.getTime())
  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7))

  return {
    date: resultDate,
    dateFormatted: resultDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    weekOfTheMonth: Math.floor(resultDate.getDate() / 7),
  }
}

export const hideBodyScroll = (hide: boolean) => {
  if (typeof document !== `undefined`) {
    const setOverFlowY = (value) => (document.getElementsByTagName("body")[0].style.overflowY = value)
    hide ? setOverFlowY("hidden") : setOverFlowY("auto")
  }
}
