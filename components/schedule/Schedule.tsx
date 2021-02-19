import ImageCard from "../cards/ImageCard"
import MiniCard from "../cards/MiniCard"
import Divider from "../dividers/Divider"
import SectionHeader from "../headers/SectionHeader"
import { IButtonColor, ILink, IImage } from "../shared/Interfaces"

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
  link: ILink
  image?: IImage
}

const getColorStyle = {
  primary: "bg-primary-100 text-primary-800",
  blue: "bg-blue-100 text-blue-800",
  red: "bg-red-100 text-red-800",
  green: "bg-green-100 text-green-800",
}

const Schedule = ({ date, times }: ISchedule) => {
  return (
    <>
      <SectionHeader title={date.dateFormatted} />
      {times.map((time) => (
        <div key={time.time}>
          <Divider className="mt-8 md:mt-12 lg:mt-14" />
          <div className="pt-8">
            <div className={`inline-flex items-center px-8 py-1 rounded-full text-lg font-semibold ${getColorStyle[time.color]}`}>{time.time}</div>
            <div className={`grid grid-cols-1 gap-x-6 sm:grid-cols-2 pt-5`}>
              {time.events
                .filter((event) => event.repeat.includes(date.weekOfTheMonth))
                .map((event) =>
                  event.image ? (
                    <div key={event.title} className="py-3 w-full">
                      <ImageCard
                        title={event.title}
                        subtitle={event.subtitle}
                        paragraph={event.paragraph}
                        image={event.image}
                        button={event.button}
                        buttonColor={time.color}
                        link={event.link}
                      />
                    </div>
                  ) : (
                    <div key={event.title} className="py-3 w-full">
                      <MiniCard
                        title={event.title}
                        subtitle={event.subtitle}
                        paragraph={event.paragraph}
                        button={event.button}
                        buttonColor={time.color}
                        link={event.link}
                      />
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default Schedule
