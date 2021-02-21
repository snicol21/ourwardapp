import PrimaryButton from "../buttons/PrimaryButton"
import Icon from "../shared/Icon"
import { IButton } from "../shared/Interfaces"

export type IInfoCard = {
  title: string
  button?: IButton
  hidden?: boolean
}

const InfoCard = ({ ...card }: IInfoCard) => {
  return (
    <PrimaryButton
      type="pass-thru"
      link={card.button.link}
      modal={card.button.modal}
      className="flex text-left col-span-1 shadow-sm rounded-md focus:outline-none"
    >
      <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md" />
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm overflow-hidden">
          <div className="text-gray-900 font-medium truncate hover:text-gray-600" title={card.title}>
            {card.title}
          </div>
          <p className="text-gray-500">
            <time dateTime="2021-02-13">2/13/2021</time>
          </p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Open options</span>
            <Icon name="chevron-right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </PrimaryButton>
  )
}

export default InfoCard
