import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from '../componentes/footer/Footer'
import Header from '../componentes/Header/Header';
import FormularioI from '../componentes/formulariol/formularioI';
import Home from '../componentes/Home/Home'
import ListaLugares from '../componentes/busqueda/busqueda';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../componentes/nosotros/nosotros'
import Hcarousel from '../componentes/Hcaroussel/Hcaroussel'
import Cartas from '../componentes/CiudadesRecomendadas/CiudadesRecomendadas';



function App() {
  return (
    <>
      <Router>
     <header>
        <Header />
        <p>Bienvenidos</p>
         
     </header>
    {/* <Hcarousel />   */}
    {/* lo que va aca es todo los componentes de la api por su cuenta */}
    <Routes>
      <Route path='/busqueda' element={<ListaLugares />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/formulariol' element={<FormularioI />}></Route>
      <Route path='/AboutUs' element={<AboutUs />}></Route>
      <Route path='/Cartas' element={<Cartas />}></Route>
      <Route path='/https://www.google.com/search?q=${google}' element={<ListaLugares />}></Route>
    </Routes>
    <footer>
    <Footer />
    </footer>
    </Router>   
    </>
  )
}

export default App
