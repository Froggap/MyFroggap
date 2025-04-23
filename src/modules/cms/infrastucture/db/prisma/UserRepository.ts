// cms/infrastructure/db/prisma/UserRepository.ts

import { UserRepository } from "@/modules/cms/domain/repositories/UserRepository";
import { CreateUserDTO } from "@/modules/cms/interface/CreateUserDTO";
import { prisma } from "../../../../../../lib/prisma";

export class PrismaUserRepository implements UserRepository {
  async createUser(data: CreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        username: data.username,
        password: data.password, // Deberías hashearlo antes
        img: data.img || "", // Proporciona un valor predeterminado si no se pasa
      },
    });
  }
}
