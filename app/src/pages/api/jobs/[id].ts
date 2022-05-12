import type { NextApiRequest, NextApiResponse } from 'next'

import { JOBS } from '../../../data'

// this API endpoint should return the job as requested by ID and should be adapted to work
// it currently always returns the job with ID 1
// HINT: https://nextjs.org/docs/api-routes/dynamic-api-routes might be helpful
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job>
) {
  res.status(200).json(JOBS[1])
}
