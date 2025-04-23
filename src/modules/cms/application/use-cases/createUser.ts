// cms/application/use-cases/createUser.ts

import { UserRepository } from "../../domain/repositories/UserRepository";
import { CreateUserDTO } from "../../interface/CreateUserDTO";



export class CreateUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {
    // Aquí puedes validar si el usuario ya existe, etc.
    await this.userRepo.createUser(data);
  }
}
