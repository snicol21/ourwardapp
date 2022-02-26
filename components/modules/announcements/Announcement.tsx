import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { getDateDisplay } from "../../../shared/utils/date.util"
import { IButton, ILink } from "../../../shared/types"
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
  location?: {
    address: string
    link?: string
  }
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
    <div key={`${date.toISOString()}${subTitle ? "-" + subTitle : ""}`} className="flex flex-col mt-2 text-xs">
      <span className={`mr-2 font-semibold text-black ${!subTitle && "hidden"}`}>{subTitle}</span>
      <div key={dateDisplay.isoString} className="inline-flex flex-wrap text-gray-500">
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

const Announcement = ({ ...announcement }: IAnnouncement) => {
  return (
    <div>
      <div className="block">
        <div className="text-base font-semibold text-black">{announcement.title}</div>
        {announcement.date && !announcement.dates && renderDate(announcement.date)}
        {announcement.dates && announcement.dates.map((subDate) => renderDate(subDate.date, subDate.subTitle))}
        {announcement.description && (
          <Linkify tagName="p" options={options} className="mt-2 text-sm text-gray-500">
            {announcement.description}
          </Linkify>
        )}
      </div>
      {announcement.location && (
        <div className="mt-2 flex items-center text-xs text-gray-500">
          <Icon name="location-marker" className="h-3 w-3 mr-1" />
          {announcement.location.link && (
            <PrimaryButton
              color="blue"
              type="link"
              link={{ url: announcement.location?.link, external: true }}
              className="text-left whitespace-pre sm:whitespace-nowrap"
            >
              {announcement.location.address}
            </PrimaryButton>
          )}
          {!announcement.location.link && <div className="text-xs">{announcement.location.address}</div>}
        </div>
      )}
      <div className="mt-2 flex justify-end">
        {announcement.button && (
          <PrimaryButton size="sm" color="green" link={announcement.button.link} modal={announcement.button.modal}>
            <span className="font-normal">{announcement.button.text}</span>
          </PrimaryButton>
        )}
      </div>
    </div>
  )
}

export default Announcement
