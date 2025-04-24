// cms/application/use-cases/createUser.ts

import { UserRepository } from "../../../domain/user/repositories/user.repository";
import { CreateUserDTO } from "../../../domain/user/entities/create-user.entity";
import { validateCreateUserInput } from "../../validations/user/user.validate";
import { hashPassword } from "@/modules/cms/lib/auth/hash-password";



export class CreateUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {

    if(!data) throw new Error('Datos de usuario no enviados');
  
    const validationErrors = validateCreateUserInput(data);
    if (validationErrors.length > 0) {
      throw new Error(`Errores de validación: ${validationErrors.join(', ')}`);
    }

    const hashedPassword = await hashPassword(data.password);
    const newUser = {...data, password: hashedPassword};

    await this.userRepo.createUser(newUser);
  }
}
