
export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;
    
    return Response.json({ message: 'Usuario conectado con éxito' });
}