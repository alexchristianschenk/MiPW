import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'

import ListaCasas from '../src/components/casas/ListaCasas' 
import Footer from '../src/components/footer/Footer'
import Boton from '../src/components/seccion/Seccion'
import Bnadvar from './components/Bnadvar/Bnadvar';
import Header from './components/Header/Header';



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { Link } from 'react-router-dom';
import Hcarousel from './components/Hcaroussel/Hcaroussel';
import FormularioI from './components/formularioI/formularioI';
import Home from './components/Home/Home';
import ListaLugares from './components/busqueda/busqueda';

function App() {
  
  // const logo= texto;

  return (
    <>
      
    <Router>
     <header>
        <Header />
        <p>ddjd</p>
        {/* <Hcarousel /> */}
     </header> 
    {/* lo que va aca es todo los componentes de la api por su cuenta */}
    {/* <Boton className='servicios'></Boton> */}
    {/* <FormularioI /> */}
    {/* <Boton /> */}
    {/* terminan acá
    <p className='ListaCasas'>Lorem, ipsum dol
      or sit amet cons
      unt culpa a laborum error, asperiores dolorum d.</p>
    <p className='aside'>Lorem, ipsum dol
      or sit amet cons
      unt culpa a laborum error, asperiores dolorum d.</p> */}
      <FormularioI />
    <Routes>
      <Route path='/busqueda' element={<ListaLugares />}></Route>
      <Route path='/Home' element={<Home />}></Route>

    </Routes>
    <Footer />
    
    </Router>
    </>
      
   
  )
}

export default App;


