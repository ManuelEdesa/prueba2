//crear mediante un bucle con las rutas de la funcion de la clase app donde crea el home paginalista y perfil
import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';

//hay que añadir la referencia a las rutas
export const MenuApp =[
  {
    id:1,
    path: '/',
    title: 'Home',
  },
  {
    id:2,
    path: '/listas',
    title: 'PaginaListas',
  },
  {
    id:3,
    path: '/perfil',
    title: 'Perfil',
  },
]