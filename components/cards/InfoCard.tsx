import PrimaryButton from "../buttons/PrimaryButton"

type InfoCard = {
  id: number
  title: string
  href: string
  passHref?: boolean
  hidden: boolean
}

const InfoCard = ({ ...card }: InfoCard) => {
  return (
    <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
      <div className="p-6 sm:px-12 md:px-14 lg:px-16 xl:px-28">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">{card.title}</h2>
          <div className="flex items-center">
            <PrimaryButton href={card.href} passHref={!!card.passHref}>
              Learn More
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
