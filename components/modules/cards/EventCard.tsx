import PrimaryButton from "../../elements/buttons/PrimaryButton"
import Icon from "../../elements/icons/Icon"
import { getDateDisplay } from "../../../shared/utils/date.util"
import { IButton, IImage } from "../../../shared/types"

export type IEventCard = {
  title: string
  date?: Date
  image?: IImage
  button?: IButton
  hidden?: boolean
}

const EventCard = ({ ...card }: IEventCard) => {
  const dateDisplay = getDateDisplay(card.date, 7)
  return (
    <div className="rounded-lg shadow-xl flex bg-white">
      <div className="relative w-24">
        <img className="absolute h-full object-cover rounded-l-lg" src={card.image?.src} alt={card.image?.alt} />
      </div>
      <PrimaryButton
        type="pass-thru"
        link={card.button.link}
        modal={card.button.modal}
        className="relative w-full px-4 py-5 flex text-left items-center space-x-3 overflow-hidden"
      >
        <div className="flex-1 min-w-0 rounded-lg">
          <a href="#responsive" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="text-black font-semibold text-md pb-1 truncate" title={card.title}>
              {card.title}
            </p>
            {card.date && (
              <div className="text-sm text-gray-600 flex flex-wrap leading-6">
                <div className="pr-2 flex items-center">
                  <Icon name="calendar" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
                  <time dateTime={dateDisplay.isoString}>{dateDisplay.dateDisplay}</time>
                </div>
                <div className="pr-2 flex items-center">
                  <Icon name="clock" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
                  <time dateTime={dateDisplay.isoString}>{dateDisplay.timeDisplay}</time>
                  <span
                    className={`inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      dateDisplay.isOver ? "bg-red-100 text-red-800" : dateDisplay.isWithin ? "bg-green-100 text-green-800" : "bg-primary-100 text-primary-800"
                    }`}
                  >
                    {dateDisplay.relativeDisplay}
                  </span>
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="flex-shrink-0 pr-2">
          <div className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 bg-transparent hover:text-gray-500">
            <span className="sr-only">Open options</span>
            <Icon name="chevron-right" className="w-5 h-5" />
          </div>
        </div>
      </PrimaryButton>
    </div>
  )
}

export default EventCard
