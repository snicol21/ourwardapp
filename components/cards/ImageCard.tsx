import PrimaryButton from "../buttons/PrimaryButton"
import { IImage, IButton } from "../shared/Interfaces"

export type IImageCard = {
  title: string
  subtitle: string
  paragraph?: string
  image: IImage
  button: IButton
  hidden?: boolean
}

const ImageCard = ({ ...card }: IImageCard) => {
  const buttonColor = card.button.color ? card.button.color : "primary"
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-xl h-full overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover object-top lg:h-64" src={card.image.src} alt={card.image.alt || ""} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-primary font-semibold">{card.subtitle}</div>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{card.title}</p>
              {card.paragraph && <p className="mt-3 text-base text-gray-500">{card.paragraph}</p>}
            </a>
          </div>
          <div className="pt-6 text-center md:text-left">
            <PrimaryButton type="dark" color={buttonColor} link={card.button.link}>
              {card.button.text}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageCard
