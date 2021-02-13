import Button from "../buttons/Button"
import { IFaceCard, IImage } from "../layout/Interfaces"

const FaceCard = ({ ...card }: IFaceCard) => {
  return (
    <div className="flex flex-col bg-white justify-between items-center rounded-lg shadow-xl p-8 h-full">
      <div className="flex flex-col items-center">
        <div className="flex -space-x-4 pb-5">
          {card.images.map((image: IImage) => (
            <img
              key={image.id}
              style={{ height: image.height, width: image.width }}
              className="relative z-30 inline-block rounded-full ring-2 ring-primary"
              src={image.src}
              alt={image.alt || ""}
            />
          ))}
        </div>
        <div className="text-primary font-semibold">{card.subTitle}</div>
        <h3 className="text-2xl text-center font-bold pb-5">{card.title}</h3>
      </div>
      <Button type="dark" href={card.href} className="px-12">
        Schedule
      </Button>
    </div>
  )
}

export default FaceCard
