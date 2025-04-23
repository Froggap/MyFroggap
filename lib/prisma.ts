// lib/prisma.ts

import { PrismaClient } from '../generated/prisma';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Evitar múltiples instancias en desarrollo (Next.js recarga módulos)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // opcional: para ver las consultas
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
