import { FaSave } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Landing Page</h1>
          <p className="text-muted-foreground">Personaliza los elementos de tu página de inicio.</p>
        </div>
        <button className="bg-black text-white hover:bg-black/90">
          <FaSave className="mr-2 h-4 w-4" />
          Guardar Cambios
        </button>
      </div>
     
        
    </div>
  )
}
