import Button from "../buttons/Button"
import Image from "next/image"
import { IImage, IHref } from "../shared/Interfaces"

export type IHeroCard = {
  title: string
  subTitle?: string
  image: IImage
  button: string
  href: IHref
}

const HeroCard = ({ ...card }: IHeroCard) => {
  return (
    <div className="bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500 rounded-lg shadow-xl">
      <div className="flex flex-wrap justify-center p-6 sm:p-12 md:p-14 lg:p-16 xl:px-28">
        <div className="flex items-center md:flex-1">
          <Image key={card.image.src} src={card.image.src} alt={card.image.alt || ""} width={card.image.width} height={card.image.height} />
          <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24">
            <h2 className="text-lg font-extrabold text-white sm:text-4xl">{card.title}</h2>
            {card.subTitle && <h4 className="mt-1 leading-6 text-primary-200">{card.subTitle}</h4>}
          </div>
        </div>
        <div className="flex items-center">
          <Button type="light" href={card.href} className="px-16 py-2 mt-5 md:mt-0 lg:py-4">
            {card.button}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
