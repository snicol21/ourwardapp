import DarkButton from "../buttons/DarkButton"
import { IFaceCard, IImage } from "../layout/Interfaces"

const FaceCard = ({ ...card }: IFaceCard) => {
  return (
    <div className="flex flex-col items-center rounded-lg shadow-xl overflow-hidden p-8">
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
      <h3 className="text-2xl font-bold pb-5">{card.title}</h3>
      <DarkButton href={card.href} passHref={!!card.passHref} className="px-12">
        Schedule
      </DarkButton>
    </div>
  )
}

export default FaceCard
