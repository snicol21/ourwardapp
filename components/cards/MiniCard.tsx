import Button from "../buttons/Button"
import { IMiniCard } from "../layout/Interfaces"

const MiniCard = ({ ...card }: IMiniCard) => {
  return (
    <div className="flex flex-col bg-white justify-between items-center rounded-lg shadow-xl p-8 h-full">
      <div className="flex flex-col items-center">
        <div className="text-primary font-semibold">{card.subTitle}</div>
        <h3 className="text-2xl text-center font-bold pb-5">{card.title}</h3>
      </div>
      <Button type="dark" href={card.href} className="px-12">
        Schedule
      </Button>
    </div>
  )
}

export default MiniCard
