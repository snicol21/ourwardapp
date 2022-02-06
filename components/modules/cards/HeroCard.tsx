import { IButton, IImage } from "../../../shared/types"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

export type IHeroCard = {
  title: string
  subtitle?: string
  paragraph?: string
  image: IImage
  button: IButton
  type: "light" | "dark"
}

const getColor = {
  dark: ["bg-gray-800", "text-primary-400", "text-white", "text-gray-300"],
  light: ["bg-white", "text-primary-600", "text-black", "text-gray-600"],
}

const HeroCard = ({ ...card }: IHeroCard) => {
  const buttonColor = card.button.color ? card.button.color : "primary"
  return (
    <div className={`relative text-center sm:text-left rounded-lg shadow-xl ${getColor[card.type][0]}`}>
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none" src={card.image.src} alt={card.image.alt || ""} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className={`text-base font-semibold uppercase tracking-wider ${getColor[card.type][1]}`}>{card.subtitle}</h2>
          <p className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${getColor[card.type][2]}`}>{card.title}</p>
          {card.paragraph && <p className={`mt-3 text-lg ${getColor[card.type][3]}`}>{card.paragraph}</p>}
          <div className="mt-2 md:mt-8 text-center sm:text-left">
            <PrimaryButton
              type={card.type === "light" ? "dark" : "light"}
              color={buttonColor}
              link={card.button.link}
              size="lg"
              disabled={!!card.button.disabled}
              className="mt-5 font-bold md:mt-0"
            >
              {card.button.text}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
