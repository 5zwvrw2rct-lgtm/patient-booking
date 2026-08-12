import type { NextApiRequest, NextApiResponse } from 'next';
import { seedAdminOnStartup } from '../../src/scripts/seedOnStartup';

let seeded = false;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!seeded) {
    seeded = true;
    await seedAdminOnStartup();
  }

  res.status(200).json({ status: 'ok' });
}
