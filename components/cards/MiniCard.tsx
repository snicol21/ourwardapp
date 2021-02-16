import Button from "../buttons/Button"
import { IHref, IButtonColor } from "../shared/Interfaces"

export type IMiniCard = {
  title: string
  subtitle: string
  paragraph?: string
  button: string
  buttonColor?: IButtonColor
  href: IHref | IHref[]
  hidden?: boolean
}

const MiniCard = ({ ...card }: IMiniCard) => {
  const buttonColor = card.buttonColor ? card.buttonColor : "primary"
  return (
    <div className="col-span-1 bg-white text-center rounded-lg shadow-xl p-8">
      <div className="flex flex-col items-center">
        <div className="text-primary font-semibold">{card.subtitle}</div>
        <h3 className="text-xl text-center font-bold">{card.title}</h3>
        {card.paragraph && <p className="mt-3 text-base text-gray-500">{card.paragraph}</p>}
      </div>
      <Button type="dark" color={buttonColor} href={card.href} className="mt-5 px-12">
        {card.button}
      </Button>
    </div>
  )
}

export default MiniCard
