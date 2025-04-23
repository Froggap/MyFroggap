import { NextRequest } from "next/server";

export async function GET (req: Request, res: Response) {
    return Response.json({message: 'Hello World!'});
}