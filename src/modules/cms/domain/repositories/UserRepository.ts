import { CreateUserDTO } from "../../interface/CreateUserDTO";

export interface UserRepository {
    createUser(data: CreateUserDTO): Promise<void>;
}