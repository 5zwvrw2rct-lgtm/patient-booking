import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../src/lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@patient.com' },
    update: {},
    create: {
      email: 'admin@patient.com',
      passwordHash: hashedPassword,
      role: 'ADMIN',
      isActive: true,
    },
  });

  return res.status(200).json({ ok: true });
}
