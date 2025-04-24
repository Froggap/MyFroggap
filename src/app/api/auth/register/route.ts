import { CreateUserUseCase } from "@/modules/cms/application/use-cases/user/createUser";
import { PrismaUserRepository } from "@/modules/cms/infrastucture/db/prisma/user.prisma.repository";
import { NextResponse } from "next/server";

export async function POST (req: Request, res: Response) {
    try {
        const body = await req.json();
        const { username, password } = body;
    
        const userRepo = new PrismaUserRepository();
        const useCase = new CreateUserUseCase(userRepo);
    
        await useCase.execute({ username, password });
    
        return NextResponse.json({ message: 'Usuario creado con éxito' }, { status: 201 });
      } catch (error: any) {
        return NextResponse.json(
          { error: error.message || 'Error interno del servidor' },
          { status: 400 }
        );
      }
}