import { CreateUserDTO } from "../entities/create-user.entity";

export interface UserRepository {
    createUser(data: CreateUserDTO): Promise<void>;
}