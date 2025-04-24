import { CreateUserDTO } from "@/modules/cms/domain/user/entities/create-user.entity";

export function validateCreateUserInput(data: CreateUserDTO): string[] {
    const errors: string[] = [];
  
    if (!data.username || data.username.trim() === "") {
      errors.push("El nombre de usuario es obligatorio.");
    }
  
    if (!data.password || data.password.trim() === "") {
      errors.push("La contraseña es obligatoria.");
    } else if (data.password.length < 8) {
      errors.push("La contraseña debe tener al menos 8 caracteres.");
    }
  
    return errors;
  }