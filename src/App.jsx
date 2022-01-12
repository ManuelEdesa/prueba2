import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';
import { MenuItems } from './components/data/MenuItems';

function createRoutes (){
  //creamos la lista de rutas
//creamos una variable auxiliar
  const listRoutes=[];
//creamos el bucle para recorrer las rutas que nos devuelven 
for (let i=0;i<MenuItems.length; i++){
listRoutes.push(
  <Route path={MenuItems[i].path}
   exact
   component={MenuItems[i].component}/>
);
} 
  return listRoutes;
}


export function App() {
  return (
    <Router>
      <Header />
      {createRoutes()}
      {/* */}
      {MenuItems.map(function createRoutes(item){
        return (
        <Route path={MenuItems[i].path}
        exact
        component={item.component}/>
     );

      })}
    </Router>
  );
}

