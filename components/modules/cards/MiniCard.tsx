import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { IButton } from "../../../shared/types"

export type IMiniCard = {
  title: string
  subtitle: string
  paragraph?: string
  button?: IButton
  hidden?: boolean
}

const MiniCard = ({ ...card }: IMiniCard) => {
  const buttonColor = card.button && card.button.color ? card.button.color : "primary"
  return (
    <div className="col-span-1 bg-white text-center rounded-lg shadow-xl p-8">
      <div className="flex flex-col items-center">
        <div className="text-primary font-semibold">{card.subtitle}</div>
        <h3 className="text-xl text-center font-bold">{card.title}</h3>
        {card.paragraph && <p className="mt-3 text-base text-gray-500">{card.paragraph}</p>}
      </div>
      {card.button && (
        <PrimaryButton type="dark" color={buttonColor} link={card.button.link} className="mt-5">
          {card.button.text}
        </PrimaryButton>
      )}
    </div>
  )
}

export default MiniCard
