import Button from "../buttons/Button"
import { IHref, IImage } from "../shared/Interfaces"

export type IFaceCard = {
  title: string
  subtitle: string
  images: IImage[]
  button: string
  href: IHref
  hidden: boolean
}

const FaceCard = ({ ...card }: IFaceCard) => {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow-xl p-8 h-full text-center">
      <div className="flex flex-col items-center">
        <div className="flex -space-x-4 pb-5">
          {card.images.map((image: IImage) => (
            <img
              key={image.src}
              style={{ height: image.height, width: image.width }}
              className="relative z-30 inline-block rounded-full ring-2 ring-primary"
              src={image.src}
              alt={image.alt || ""}
            />
          ))}
        </div>
        <div className="text-primary font-semibold">{card.subtitle}</div>
        <h3 className="text-2xl text-center font-bold pb-5">{card.title}</h3>
      </div>
      <Button type="dark" href={card.href} className="px-12">
        {card.button}
      </Button>
    </div>
  )
}

export default FaceCard
