import type { NextApiRequest, NextApiResponse } from 'next'

import { JOBS } from '../../../data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job>
) {
  res.status(200).json(JOBS[0])
}
