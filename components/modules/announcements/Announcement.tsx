import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { getDateDisplay } from "../../../shared/utils/date.util"
import { IButton } from "../../../shared/types"
import Linkify from "linkify-react"
import Icon from "../../elements/icons/Icon"

export type IAnnouncement = {
  date?: Date
  title: string
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

const Announcement = ({ ...announcement }: IAnnouncement) => {
  const dateDisplay = getDateDisplay(announcement.date, 7)
  return (
    <div key={announcement.title}>
      <div className="block">
        <div className="text-base font-semibold text-black">{announcement.title}</div>
        <div className="mt-2 text-sm text-gray-500 flex">
          <div className="pr-2 flex items-center">
            <Icon name="calendar" className="h-4 w-4 mr-2 mb-0.5" />
            <time dateTime={dateDisplay.isoString}>{dateDisplay.dateDisplay}</time>
          </div>
          <div className="pr-2 flex items-center">
            <Icon name="clock" className="h-4 w-4 mr-2 mb-0.5" />
            <time dateTime={dateDisplay.isoString}>{dateDisplay.timeDisplay}</time>
          </div>
          {dateDisplay.isWithin && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {dateDisplay.relativeDisplay}
            </span>
          )}
        </div>
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
