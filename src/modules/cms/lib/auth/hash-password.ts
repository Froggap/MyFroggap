import { Params } from "../../utils/params";
import * as bcrypt from 'bcrypt-ts';

export async function hashPassword(password: string): Promise<string> {
    
    const saltRounds = Params.SALT_ROUNDS;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;

}