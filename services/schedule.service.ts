import { IScheduleTime } from "../components/modules/schedules/Schedule"
import { config } from "../config"

const { apiUrl, apiWard, apiHeaders } = config

/**
 * REQUESTS
 */
export const schedulesRequest = new Request(`${apiUrl}/schedule/${apiWard}`, apiHeaders)

/**
 * CONVERTER - SCHEDULES
 */
export const convertSchedule = (schedule: IScheduleResponse): IScheduleTime => {
  return {
    time: schedule.time,
    color: schedule.color,
    events: schedule.events.map((event) => {
      return {
        ...(event.repeats.length && { repeats: event.repeats }),
        title: event.title,
        subtitle: event.subtitle,
        description: event.description,
        ...(event?.button?.text && {
          button: {
            text: event.button.text,
            color: schedule.color,
            link: {
              url: event.button.link.url,
              ...(event?.button?.link?.calendly && { calendly: event.button.link.calendly }),
              ...(event?.button?.link?.label && { label: { text: event.button.link.label } }),
              ...(event?.button?.link?.external && { external: event.button.link.external }),
            },
          },
        }),
        ...(event?.image?.src && {
          image: {
            src: event.image.src,
            ...(event?.image?.alt && { alt: event.image.alt }),
            ...(event?.image?.width && { width: event.image.width }),
            ...(event?.image?.height && { height: event.image.height }),
          },
        }),
      }
    }),
    isAgenda: !!schedule.isAgenda,
  }
}
export const convertSchedules = (schedules: IScheduleResponse[]): IScheduleTime[] => {
  return schedules.map((schedule) => convertSchedule(schedule))
}

/**
 * RESPONSE TYPE
 */
export type IScheduleResponse = {
  id: string
  wardPath: string
  time: string
  color: "primary" | "blue" | "red" | "green" | "gray"
  events: [
    {
      repeats: number[]
      title: string
      subtitle: string
      description: string
      image?: {
        src: string
        alt?: string
        width?: number
        height?: number
      }
      button?: {
        text: string
        link: {
          url: string
          calendly?: boolean
          label?: string
          external?: boolean
        }
      }
    }
  ]
  dateOverride: Date
  isAgenda?: boolean
}
