import React from 'react';

// Define la interfaz actualizada para las propiedades del componente
interface ProfileCardProps {
  name: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, imageUrl, linkedinUrl }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.03] max-w-sm mx-4 my-6 border border-white/20">
      
      {/* Sección de la Imagen */}
      <section className="mb-4">
        <img
          src={imageUrl}
          alt={`Foto de ${name}`}
          className="w-32 h-32 object-cover rounded-full border-4 border-primary-foreground shadow-lg"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://via.placeholder.com/128?text=No+Photo';
          }}
        />
      </section>

      {/* Sección del Contenido */}
      <section className="text-center">
        <h3 className="text-3xl font-bold text-primary-foreground tracking-tight mb-1">
          {name}
        </h3>
          <p className="text-gray-200 text-base leading-relaxed">
            {description}
          </p>
        {/* Enlace y Botón de LinkedIn con Hover y Animación */}
        {linkedinUrl && ( // Solo muestra el enlace si la URL existe
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            // Clases para el efecto de hover y animación en el contenedor del enlace
            className="inline-block transition-transform duration-300 hover:scale-110 mb-3"
            aria-label={`Perfil de LinkedIn de ${name}`}
          >
            <button
              type="button"
              // Clases para el estilo base y el cambio de color al hacer hover
              className="p-2 rounded-full text-gray-400 bg-transparent transition-colors duration-300 hover:text-white hover:bg-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2]"
            >
              {/* SVG del Icono de LinkedIn */}
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.78 21h-3.69v-7.79c0-1.85-.7-3.11-2.29-3.11-1.25 0-2 1.05-2.33 1.94-.12.35-.15.83-.15 1.3v7.66H7.33s.02-12.08 0-13.33h3.69v1.58h.05c.5-.78 1.43-1.89 3.51-1.89 2.56 0 4.49 1.68 4.49 5.34V21zM5.33 7.85A2.33 2.33 0 013 5.52a2.33 2.33 0 012.33-2.33c1.28 0 2.32 1.04 2.32 2.33 0 1.28-1.04 2.33-2.32 2.33zm-.01 13.15H7.7V8.17H5.32v12.83z"/>
              </svg>
            </button>
          </a>
        )}

      </section>
    </div>
  );
};

export default ProfileCard;