// Body.tsx (Ejemplo)

// La clase 'custom-hero-bg' debe estar definida en tu App.css (como te expliqué antes) 
// para usar la imagen de fondo de las estrellas.
import TextType from './components/TextType';


function Main_page() {
	return (
		<div className="relative h-screen w-screen bg-cover bg-center custom-hero-bg flex items-center justify-center">
			
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
			
			<div className="relative z-10 flex flex-col items-center justify-center text-center -mt-20"> 
				
				<h1 className="text-6xl font-extrabold text-primary-foreground tracking-tight py-8">
					Building Habitable homes for Space
				</h1>
				
			</div>
		</div>
	)
}

function AboutChallenge() {
    return (
        // Contenedor Principal: Fondo y Flexbox
        <div className={
            `min-h-screen w-full 
            bg-repeat bg-cover bg-center bg-bottom
            bg-[linear-gradient(to_top,rgba(15,23,42,0.2),rgba(50,49,127,0.5)),url('../public/space-3.jpg')]
            text-white
            pt-24 md:pt-40 
            relative
            flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-16` 
        }>

            {/* ⬅️ Caja Izquierda: Título y Párrafo */}
            {/* 'group' permite que los hijos usen el estado 'group-hover' */}
            <div className='flex flex-col justify-center w-full md:w-3/5 lg:w-1/2 pr-0 lg:pr-16 group'>
                
                {/* Título: Brillo al hacer hover */}
                <div className='text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6'>
                    <TextType 
                        text={["About the Challenge", "About the Challenge"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                    <div className='h-2 bg-white w-3/5 mt-4 '></div>
                </div>
                
                {/* Párrafo */}
                <p className='text-lg sm:text-xl font-light leading-relaxed max-w-lg mt-4  
                                transition duration-300 ease-in-out 
                                group-hover:text-white 
                                group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]'>
                    A challenge by the Exploration Systems Development Mission Directorate (NASA) to imagine the future of life beyond Earth.
                </p>
            </div>

            {/* ➡️ Caja Derecha: La Tarjeta */}
			<div className='w-full mt-12 md:mt-0 md:w-2/5 lg:w-1/3 flex justify-end'>
				{/* CLASES DE HOVER APLICADAS*/}
				<div className='
					relative flex flex-col rounded-xl bg-white text-gray-700 shadow-2xl max-w-sm
					
					transition duration-300 ease-in-out 
					hover:scale-[1.02] 
					hover:shadow-xl 
					cursor-pointer
				'>
					
					{/* Contenedor del GIF/Imagen (ya tenía su propio zoom) */}
					<div className='relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-slate-900 bg-clip-border text-white'>
						<img 
							src="../public/transferencia_tierra_marte.gif" 
							alt="Animación de transferencia Tierra a Marte"
							className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
					</div>

					{/* Contenido de la Tarjeta */}
					<div className='p-6'>
						<h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
							You have to design your own home in space.
						</h5>
						<p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
							We create and experiment with different shapes, volumes, and layouts for a space habitat capable of sustaining human life, integrating essential systems such as life support, power, communication, and comfort.
						</p>
					</div>
					
					<div className='p-6 pt-0'>
						<a href="https://www.spaceappschallenge.org/2025/challenges/your-home-in-space-the-habitat-layout-creator/" target='blank' rel="noreferrer">
							<button 
								data-ripple-light="true" 
								type="button" 
								className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'
							>
								Read More
							</button>
						</a>
					</div>
				</div>
			</div>
        </div>
    )
}



function Body() {
  return (
	<>
		<Main_page>
		</Main_page>

		<AboutChallenge>
		</AboutChallenge>
	</>
);
}

export default Body