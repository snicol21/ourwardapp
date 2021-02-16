import Button from "../buttons/Button"
import { IEventModal } from "../modals/EventModal"
import { IHref, IButtonColor } from "../shared/Interfaces"

export type IInfoCard = {
  title: string
  button?: string
  buttonColor?: IButtonColor
  href?: IHref
  hidden?: boolean
}

const InfoCard = ({ ...card }: IInfoCard) => {
  const buttonColor = card.buttonColor ? card.buttonColor : "primary"
  return (
    <div className="bg-primary rounded-lg shadow-xl">
      <div className="p-6 sm:px-12 md:px-14 lg:px-16 xl:px-28">
        <div className="w-full flex flex-wrap items-center justify-center sm:justify-between">
          <h2 className="text-md font-bold text-white text-center w-full pb-5 sm:pb-0 sm:text-left sm:w-auto sm:text-lg">{card.title}</h2>
          {card.button && (
            <div className="flex items-center">
              <Button type="light" color={buttonColor} href={card.href}>
                {card.button}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
