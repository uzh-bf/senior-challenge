import type { NextApiRequest, NextApiResponse } from 'next'

import { JOBS } from '../../data'

// this API endpoint returns the full list of jobs found in data.ts and does not need to be customized
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  const jobs: Job[] = Object.values(JOBS)
  res.status(200).json(jobs)
}
