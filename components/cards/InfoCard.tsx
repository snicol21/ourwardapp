import PrimaryButton from "../buttons/PrimaryButton"
import Icon from "../shared/Icon"
import { IButton, IImage } from "../shared/Interfaces"
import { getDateDisplay } from "../shared/Utilities"

export type IInfoCard = {
  title: string
  date?: Date
  image?: IImage
  button?: IButton
  hidden?: boolean
}

const InfoCard = ({ ...card }: IInfoCard) => {
  const dateDisplay = getDateDisplay(card.date, 7)
  return (
    <PrimaryButton
      type="pass-thru"
      link={card.button.link}
      modal={card.button.modal}
      className="flex text-left col-span-1 shadow-xl rounded-md bg-white focus:outline-none"
    >
      <div className="w-16 md:w-20">
        <img className="w-full h-full object-cover rounded-l-md" src={card.image?.src || "https://via.placeholder.com/382"} alt={card.image?.alt || ""} />
      </div>
      <div className="flex-1 flex items-center justify-between truncate">
        <div className="flex-1 px-4 py-2 text-sm overflow-hidden">
          <div className="text-black font-semibold text-md pb-1 md:text-lg truncate" title={card.title}>
            {card.title}
          </div>
          {card.date && (
            <div className="text-gray-500 flex flex-wrap pb-1">
              <div className="pr-2 flex items-center">
                <Icon name="calendar" className="h-4 w-4 mr-2 text-gray-300" />
                <time dateTime={dateDisplay.isoString}>{dateDisplay.dateDisplay}</time>
              </div>
              <div className="pr-2 flex items-center">
                <Icon name="clock" className="h-4 w-4 mr-2 text-gray-300" />
                <time dateTime={dateDisplay.isoString}>{dateDisplay.timeDisplay}</time>
              </div>
              <div
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  dateDisplay.isWithin ? "bg-green-100 text-green-800" : "bg-primary-100 text-primary-800"
                }`}
              >
                {dateDisplay.relativeDisplay}
              </div>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 pr-2">
          <div className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 bg-transparent hover:text-gray-500">
            <span className="sr-only">Open options</span>
            <Icon name="chevron-right" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </PrimaryButton>
  )
}

export default InfoCard
