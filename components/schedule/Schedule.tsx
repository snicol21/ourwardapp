import ImageCard from "../cards/ImageCard"
import MiniCard from "../cards/MiniCard"
import Divider from "../dividers/Divider"
import SectionHeader from "../headers/SectionHeader"
import { IButtonColor, IHref, IImage } from "../shared/Interfaces"

export type ISchedule = {
  date: IScheduleDate
  times: IScheduleTime[]
}

export type IScheduleDate = {
  date: Date
  dateFormatted: string
  weekOfTheMonth: number
}

export type IScheduleTime = {
  time: string
  color: IButtonColor
  events: IScheduleEvent[]
}

export type IScheduleEvent = {
  repeat: number[]
  title: string
  subtitle: string
  paragraph: string
  button: string
  href: IHref
  image?: IImage
}

const Schedule = ({ date, times }: ISchedule) => {
  return (
    <>
      <SectionHeader title={date.dateFormatted} />
      {times.map((time) => (
        <>
          <Divider className="mt-8 md:mt-12 lg:mt-14" />
          <div className="pt-8">
            <div className={`inline-flex items-center px-8 py-1 rounded-full text-lg font-semibold bg-${time.color}-100 text-${time.color}-800`}>
              {time.time}
            </div>
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 pt-5">
              {time.events
                .filter((event) => event.repeat.includes(date.weekOfTheMonth))
                .map((event) =>
                  event.image ? (
                    <ImageCard
                      title={event.title}
                      subtitle={event.subtitle}
                      paragraph={event.paragraph}
                      image={event.image}
                      button={event.button}
                      buttonColor={time.color}
                      href={event.href}
                    />
                  ) : (
                    <MiniCard
                      title={event.title}
                      subtitle={event.subtitle}
                      paragraph={event.paragraph}
                      button={event.button}
                      buttonColor={time.color}
                      href={event.href}
                    />
                  )
                )}
            </div>
          </div>
        </>
      ))}
    </>
  )
}
export default Schedule
