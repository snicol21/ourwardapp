import Button from "../buttons/Button"
import { IImage, IHref } from "../shared/Interfaces"

export type IImageCard = {
  title: string
  subTitle: string
  description: string
  image: IImage
  button: string
  href: IHref
  hidden: boolean
}

const ImageCard = ({ ...card }: IImageCard) => {
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover object-top lg:h-64" src={card.image.src} alt={card.image.alt || ""} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-primary font-semibold">{card.subTitle}</div>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{card.title}</p>
              <p className="mt-3 text-base text-gray-500">{card.description}</p>
            </a>
          </div>
          <div className="pt-6 text-center md:text-left">
            <Button type="dark" href={card.href} className="px-16">
              {card.button}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageCard
