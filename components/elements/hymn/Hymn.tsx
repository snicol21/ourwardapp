import { useEffect, useState } from "react"

import { getHymnByNumber } from "../../../services/hymn.service"

type Props = {
  number: number
  name: string
}

const Hymn: React.FC<Props> = ({ number, name }) => {
  const [href, setHref] = useState<string | null>(null)

  useEffect(() => {
    async function loadHymn() {
      const href = await getHymnByNumber(number)
      setHref(href)
    }
    loadHymn()
  }, [number])

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
      {name}
    </a>
  )
}

export default Hymn
