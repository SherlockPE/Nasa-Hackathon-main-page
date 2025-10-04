// Body.tsx (Ejemplo)

// La clase 'custom-hero-bg' debe estar definida en tu App.css (como te expliqué antes) 
// para usar la imagen de fondo de las estrellas.

function Body() {
  return (
    // 1. Contenedor principal que ocupa toda la pantalla con la imagen de fondo.
    <div className="relative h-screen w-screen bg-cover bg-center custom-hero-bg flex items-center justify-center">
        
        {/* 2. Capa de gradiente (Overlay), esencial para la legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* 3. Contenido de texto centrado vertical y horizontalmente */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center -mt-20"> 
            
            {/* -mt-20 mueve el texto ligeramente hacia arriba del centro absoluto, ajústalo según necesites */}

            
            <h1 className="text-6xl font-extrabold text-primary-foreground tracking-tight py-8">
                Building Habitable homes for Space
            </h1>
            
        </div>
    </div>
  );
}

export default Body