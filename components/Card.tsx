import cardData from "../content/card/card-data.json"

type CardGroup = {
  id: string
  name: string
  description?: string
  items: Card[]
}

type Card = {
  id: number
  header: string
  subHeader?: string
  image: string
  path: {
    internal?: string
    external?: string
  }
  hidden: boolean
}

function Card({ ...card }: Card) {
  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div>
            <h3 className="text-gray-900 text-lg font-medium truncate">{card.header}</h3>
            <p className="mt-1 text-gray-500 text-sm truncate">{card.subHeader}</p>
          </div>
        </div>
        <img className="h-12 rounded-full flex-shrink-0" src={card.image} alt="" />
      </div>
    </li>
  )
}

export default function Cards() {
  const cardGroups: CardGroup[] = cardData
  return (
    <div>
      {cardGroups.map((cardGroup: CardGroup) => (
        <div>
          <div className="flex flex-col pb-4">
            <h3 className="uppercase font-semibold">{cardGroup.name}</h3>
            <p className="text-gray-500 text-sm">{cardGroup.description}</p>
          </div>
          <ul className="pb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardGroup.items
              .filter((card) => !card.hidden)
              .map((card: Card) => (
                <Card key={card.id} {...card} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
