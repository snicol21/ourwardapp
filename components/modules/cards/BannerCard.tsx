import { IButton } from "../../../shared/types"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import Icon from "../../elements/icons/Icon"

export type IBannerCard = {
  title: string
  subtitle: string
  paragraph?: string
  button?: IButton
  hidden?: boolean
}

const BannerCard = ({ ...card }: IBannerCard) => {
  return (
    <div className="bg-green-50 shadow-xl rounded-lg border-2 border-green-500">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg leading-6 font-bold text-gray-900">{card.title}</h3>
            <div className="mt-1 pr-2 flex items-center">
              <Icon name="calendar" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
              <time>{card.subtitle}</time>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <PrimaryButton type="dark" color="green" link={card.button.link}>
              {card.button.text}
            </PrimaryButton>
          </div>
        </div>
        <div className="bg-white border border-gray-200 mt-3 text-base p-5 rounded-xl">{card.paragraph && <p>{card.paragraph}</p>}</div>
      </div>
    </div>
  )
}

export default BannerCard
