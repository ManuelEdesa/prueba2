import React from 'react';

import { Lista } from './componentes/Lista';
//importamos la clase 
import ListaClase from './componentes/ListaClase';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp 1)', prioridad: 'alta' },
    { done: true, texto: 'Elemento (Comp 2)', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Elemento (Comp 3)' },
    { done: true, texto: 'Elemento (Comp 4)' },
    { done: false, texto: 'Elemento (Comp 5)' },
  ];
  const elementos3 = [{ done: false, texto: 'Elemento (Comp 6)' }];
//hay que cambiar la referencia a la clase ListaClase
  return (
    <div>
      <h1>Listas de tareas</h1>
      <Lista titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
    
      <ListaClase titulo="Lista de la compra" icono="✌" elementos={elementos2} />
      <Lista titulo="Todos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}
