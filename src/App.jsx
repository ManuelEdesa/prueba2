import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';

function createRoutes (){
  //creamos la lista de rutas
//creamos una variable auxiliar
  const listRoutes=[];


  
  
  return listRoutes
}


export function App() {
  return (
    <Router>
      <Header />
      {createRoutes()}
      <Route path="/" exact component={Home} />
      <Route path="/listas" component={PaginaListas} />
      <Route path="/perfil" component={Perfil} />
    </Router>
  );
}

