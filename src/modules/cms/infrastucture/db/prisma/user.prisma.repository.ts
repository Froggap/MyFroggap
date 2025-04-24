// cms/infrastructure/db/prisma/UserRepository.ts

import { UserRepository } from "@/modules/cms/domain/user/repositories/user.repository";
import { CreateUserDTO } from "@/modules/cms/domain/user/entities/create-user.entity";
import { prisma } from "../../config/prisma";

export class PrismaUserRepository implements UserRepository {
  async createUser(data: CreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        username: data.username,
        password: data.password, // Deberías hashearlo antes
        img: "",
      },
    });
  }
}
