import { CreateUserUseCase } from "@/modules/cms/application/use-cases/createUser";
import { PrismaUserRepository } from "@/modules/cms/infrastucture/db/prisma/UserRepository";

export async function POST (req: Request, res: Response) {
    const body = await req.json();
    const { username, password } = body;
  
    const userRepo = new PrismaUserRepository();
    const useCase = new CreateUserUseCase(userRepo);
  
    await useCase.execute({ username, password });
  
    return Response.json({ message: 'Usuario creado con éxito' });
}