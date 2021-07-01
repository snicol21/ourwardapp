import { IButton, IImage } from "../../../shared/types"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

export type IContactCard = {
  title: string
  subtitle: string
  className?: string
  images?: IImage[]
  button?: IButton
  hidden?: boolean
  soft?: boolean
}

const ContactCard = ({ ...card }: IContactCard) => {
  const buttonColor = card.button?.color ? card.button?.color : "primary"
  return (
    <div className={`${card.className} bg-white rounded-lg shadow-xl p-8 h-full text-center flex flex-col justify-between`}>
      <div className="flex flex-col items-center">
        {card.images && (
          <div className="flex -space-x-4 pb-5">
            {card.images.map((image: IImage) => (
              <img
                key={image.src}
                style={{ height: image.height, width: image.width }}
                className={`relative inline-block rounded-full ring-2 ${card.soft ? "ring-gray-400" : "ring-primary"}`}
                src={image.src}
                alt={image.alt || ""}
              />
            ))}
          </div>
        )}
        <div className={`${card.soft ? "text-gray-400" : "text-primary"} font-semibold`}>{card.subtitle}</div>
        <h3 className={`${card.soft ? "text-xl text-center" : "text-2xl text-center"} font-bold`}>{card.title}</h3>
      </div>
      {card.button && (
        <div className="pt-5">
          <PrimaryButton type="dark" color={buttonColor} link={card.button.link}>
            {card.button.text}
          </PrimaryButton>
        </div>
      )}
    </div>
  )
}

export default ContactCard
