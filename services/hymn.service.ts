type Hymn = {
  number: number
  name: string
  href: string
}

export async function getHymnByNumber(number: number): Promise<string | null> {
  const res = await fetch(`/api/hymn/${number}`)

  if (!res.ok) {
    // Handle the error as appropriate
    return null
  }

  const data: Hymn = await res.json()

  return data.href
}

export function parseHymnNumber(str: string): number | null {
  const match = str.match(/#(\d+)/)
  if (match && match[1]) {
    return parseInt(match[1], 10)
  }
  return null
}
