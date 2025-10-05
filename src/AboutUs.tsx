import ProfileCard from './ProfileCard'; 

const teamMembers = [
  {
    name: 'David',
		description: 'lorem ipsum dolor sit amet ahasr as adjsa das daskj sado',
		imageUrl: '/david.jpg', // ¡Asegúrate de que esta ruta exista!
		linkedinUrl: 'https://www.linkedin.com/in/david-l%C3%B3pez-l%C3%B3pez-95b2a5228/'
  },
  {
    name: 'Miguel',
		description: 'lorem ipsum dolor sit amet ahasr as adjsa das daskj sado',
    imageUrl: '/miguel.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/miguel-navarro-lopez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Nacho',
		description: 'lorem ipsum dolor sit amet ahasr as adjsa das daskj sado',
    imageUrl: '/nacho.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/ignacio-moreno-parra-8b0a83219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Fabri',
		description: 'lorem ipsum dolor sit amet ahasr as adjsa das daskj sado',
    imageUrl: '/fabri.jpg',
		linkedinUrl: ''
  },
];

function AboutUs() {
    return (
        <>
          <div className={
              `min-h-screen w-full 
              bg-repeat bg-cover bg-center bg-bottom
              bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),rgba(50,49,127,0.5)),url('../public/space-3.jpg')]
              text-white
              pt-24 md:pt-40 
              relative
              flex flex-col items-center p-4 md:p-16`
              }>
              {/* Título Principal*/}
              <div>
                  <h1 className='text-6xl font-extrabold text-primary-foreground tracking-tight py-8 text-center'>
                      About Us
                  </h1>
              </div>
              
              {/* Contenedor de las Tarjetas de Perfil */}
              <div className='flex flex-wrap justify-center w-full max-w-6xl'>
                  {teamMembers.map((member) => (
                      <ProfileCard
                          key={member.name}
                          name={member.name}
                          description={member.description}
                          imageUrl={member.imageUrl}
                          linkedinUrl={member.linkedinUrl} // <-- ¡Pasando la nueva prop!
                      />
                  ))}
              </div>
              
          </div>
        </>
    );
}

export default AboutUs;