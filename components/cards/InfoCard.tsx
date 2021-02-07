import PrimaryButton from "../buttons/PrimaryButton"
import { IInfoCard } from "../layout/Interfaces"

const InfoCard = ({ ...card }: IInfoCard) => {
  return (
    <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
      <div className="p-6 sm:px-12 md:px-14 lg:px-16 xl:px-28">
        <div className="w-full flex flex-wrap items-center justify-center sm:justify-between">
          <h2 className="text-md font-bold text-white text-center w-full pb-5 sm:pb-0 sm:text-left sm:w-auto sm:text-lg">{card.title}</h2>
          <div className="flex items-center">
            <PrimaryButton href={card.href} passHref={!!card.passHref} type="light">
              Learn More
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
