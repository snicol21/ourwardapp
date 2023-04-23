import { NextApiRequest, NextApiResponse } from "next"

import hymns from "../../../data/hymns.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { number } = req.query
  const hymn = hymns[parseInt(number as string)]

  if (!hymn) {
    return res.status(404).json({ message: `Hymn number ${number} not found` })
  }

  return res.json(hymn)
}
