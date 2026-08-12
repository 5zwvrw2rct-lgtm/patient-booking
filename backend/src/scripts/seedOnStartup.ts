import { prisma } from '../lib/prisma';
import bcrypt from 'bcryptjs';

export async function seedAdminOnStartup() {
  try {
    const existing = await prisma.user.findUnique({
      where: { email: 'admin@patient.com' },
    });

    if (!existing) {
      const hashedPassword = await bcrypt.hash('admin123', 10);

      await prisma.user.create({
        data: {
          email: 'admin@patient.com',
          passwordHash: hashedPassword,
          role: 'ADMIN',
          isActive: true,
        },
      });

      console.log('Admin user seeded: admin@patient.com / admin123');
    } else {
      console.log('Admin user already exists, skipping seed');
    }
  } catch (err) {
    console.error('Error while seeding admin user on startup', err);
  }
}
