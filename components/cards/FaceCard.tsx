import PrimaryButton from "../buttons/PrimaryButton"
import { IImage, IButton } from "../shared/Interfaces"

export type IFaceCard = {
  title: string
  subtitle: string
  images: IImage[]
  button: IButton
  hidden?: boolean
}

const FaceCard = ({ ...card }: IFaceCard) => {
  const buttonColor = card.button.color ? card.button.color : "primary"
  return (
    <div className="col-span-1 bg-white rounded-lg shadow-xl p-8 h-full text-center">
      <div className="flex flex-col items-center">
        <div className="flex -space-x-4 pb-5">
          {card.images.map((image: IImage) => (
            <img
              key={image.src}
              style={{ height: image.height, width: image.width }}
              className="relative inline-block rounded-full ring-2 ring-primary"
              src={image.src}
              alt={image.alt || ""}
            />
          ))}
        </div>
        <div className="text-primary font-semibold">{card.subtitle}</div>
        <h3 className="text-2xl text-center font-bold pb-5">{card.title}</h3>
      </div>
      <PrimaryButton type="dark" color={buttonColor} link={card.button.link} className="px-12">
        {card.button.text}
      </PrimaryButton>
    </div>
  )
}

export default FaceCard
