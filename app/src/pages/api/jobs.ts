import type { NextApiRequest, NextApiResponse } from 'next'

import { JOBS } from '../../data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  const jobs: Job[] = Object.values(JOBS)
  res.status(200).json(jobs)
}
