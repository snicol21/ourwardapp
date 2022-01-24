import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { getDateDisplay, IDateDisplay } from "../../../shared/utils/date.util"
import { IButton } from "../../../shared/types"
import Linkify from "linkify-react"
import Icon from "../../elements/icons/Icon"

type SubDate = {
  subTitle?: string
  date: Date
}

export type IAnnouncement = {
  title: string
  date?: Date
  dates?: SubDate[]
  description?: string
  button?: IButton
}

const options = {
  attributes: null,
  className: "text-blue-700 hover:text-blue-500",
  defaultProtocol: "http",
  events: null,
  format: (value, type) => value,
  formatHref: (href, type) => href,
  ignoreTags: [],
  nl2br: false,
  rel: null,
  tagName: "a",
  target: "_blank",
  truncate: 0,
  validate: true,
}

const renderDate = (date: Date, subTitle?: string) => {
  const dateDisplay = getDateDisplay(date, 7)
  return (
    <div className="mt-2 text-xs">
      {subTitle && <span className="mr-2 font-semibold text-black">{subTitle}</span>}
      <div key={dateDisplay.isoString} className="flex flex-wrap text-gray-500">
        <div className="pr-2 flex items-center">
          <Icon name="calendar" className="h-3 w-3 mr-1" />
          <time dateTime={dateDisplay.isoString}>{dateDisplay.dateDisplay}</time>
        </div>
        <div className="pr-2 flex items-center">
          <Icon name="clock" className="h-3 w-3 mr-1" />
          <time dateTime={dateDisplay.isoString}>{dateDisplay.timeDisplay}</time>
        </div>
        {dateDisplay.isWithin && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <small>{dateDisplay.relativeDisplay}</small>
          </span>
        )}
      </div>
    </div>
  )
}
const renderSubDate = (subDate: SubDate) => renderDate(subDate.date, subDate.subTitle)

const Announcement = ({ ...announcement }: IAnnouncement) => {
  return (
    <div key={announcement.title}>
      <div className="block">
        <div className="text-base font-semibold text-black">{announcement.title}</div>
        {announcement.date && !announcement.dates && renderDate(announcement.date)}
        {announcement.dates && announcement.dates.map((subDate) => renderSubDate(subDate))}
        {announcement.description && (
          <Linkify tagName="p" options={options} className="mt-2 text-sm text-gray-500">
            {announcement.description}
          </Linkify>
        )}
      </div>
      <div>
        {announcement.button && (
          <PrimaryButton type="link" color="blue" link={announcement.button.link} modal={announcement.button.modal}>
            <span className="font-normal">{announcement.button.text}</span>
          </PrimaryButton>
        )}
      </div>
    </div>
  )
}

export default Announcement