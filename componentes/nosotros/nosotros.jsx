import React from 'react';
import './AboutUs.css'  // Import a CSS file for styling (optional)
import Hcarousel from '../Hcaroussel/Hcaroussel';
const AboutUs = () => {
  return (

    <>
    <Hcarousel />
    <div className="about-us">
      <header className="about-us-header">
        <h1>Conocenos</h1>
      </header>
      <section className="about-us-content">
        <p>Bienvenidos a rutas verdes viajes, donde cada aventura comienza con un compromiso firme hacia la sostenibilidad y la excelencia. Fundada en 2024 en la vibrante ciudad de Buenos Aires, nuestra misión es ofrecer experiencias de viaje únicas con atención profesional de primer nivel.</p>
        <h2>Nuestro equipo</h2>
        <p>Creemos que nuestro equipo es el corazón de nuestra empresa. Fomentamos un ambiente de trabajo inclusivo y motivador, donde cada empleado se siente valorado y empoderado. Invertimos en su desarrollo profesional y bienestar, ofreciendo capacitación continua y beneficios que promueven el equilibrio entre el trabajo y la vida personal. Nuestra cultura empresarial se basa en la colaboración y la innovación, y estamos orgullosos de atraer a los mejores talentos del sector.</p>
        <h2>Innovación al Servicio de tu Experiencia</h2>
        <p>Nos distinguimos por nuestra capacidad para innovar en el sector turístico. Hemos integrado tecnología de punta para mejorar cada aspecto de tu viaje, desde la planificación hasta la ejecución.Nuestro enfoque en la tecnología nos permite ofrecer experiencias más conectadas y eficientes, adaptadas a las necesidades de cada viajero.</p>
        <h2>Compromiso con el Medio Ambiente</h2>
        <p>En Rutas Verdes Viajes, entendemos que la belleza del mundo es un regalo que debemos preservar. Desde nuestro lanzamiento, hemos integrado prácticas ecológicas en cada aspecto de nuestro negocio. Nuestros itinerarios priorizan destinos que promueven el turismo responsable y apoyan iniciativas de conservación local. Utilizamos transporte ecológico, colaboramos con proveedores que comparten nuestra visión verde y compensamos nuestra huella de carbono a través de proyectos de reforestación y energía renovable.</p>
        <h2>Por qué Elegirnos</h2>
        <p>¿Qué nos hace diferentes? En Rutas Verdes Viajes, no solo organizamos viajes, creamos memorias sostenibles y enriquecedoras. Nuestro compromiso con el medio ambiente, nuestra inversión en el bienestar de nuestros empleados y nuestra pasión por la innovación nos posicionan como líderes en el sector turístico. Estamos en constante crecimiento, siempre buscando nuevas formas de mejorar y ofrecer lo mejor a nuestros clientes. La confianza que nuestros viajeros depositan en nosotros es nuestra mayor recompensa, y nos impulsa a seguir evolucionando y superando expectativas.</p>
        <p>¡Únete a nosotros y descubre un mundo de viajes que no solo te llevarán a lugares increíbles, sino que también contribuirán a un futuro más verde y justo!</p>

      </section>
    </div>
    </>
  );
};

export default AboutUs;