import PrimaryButton from "../buttons/PrimaryButton"
import Icon from "../shared/Icon"
import { IButton, IImage } from "../shared/Interfaces"

export type IInfoCard = {
  title: string
  image?: IImage
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
      <div className="flex-shrink-0 flex w-16 rounded-l-md">
        <img
          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          src={card.image?.src || "https://via.placeholder.com/382"}
          alt={card.image?.alt || ""}
        />
      </div>
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
