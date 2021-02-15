import Button from "../buttons/Button"
import { IHref } from "../shared/Interfaces"

export type IMiniCard = {
  title: string
  subtitle: string
  button: string
  href: IHref | IHref[]
  hidden: boolean
}

const MiniCard = ({ ...card }: IMiniCard) => {
  return (
    <div className="col-span-1 bg-white text-center rounded-lg shadow-xl p-8">
      <div className="flex flex-col items-center">
        <div className="text-primary font-semibold">{card.subtitle}</div>
        <h3 className="text-xl text-center font-bold pb-5">{card.title}</h3>
      </div>
      <Button type="dark" href={card.href} className="px-12">
        {card.button}
      </Button>
    </div>
  )
}

export default MiniCard
