import { useRoutes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Producto from './pages/Producto';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import NoEncontrado from './pages/NoEncontrado';

export default function Rutas() {
  const componenteRutas = useRoutes([
    { path: "/inicio", element: <Inicio /> },
    { path: "/producto", element: <Producto /> },
    { path: "/nosotros", element: <Nosotros /> },
    { path: "/contacto", element: <Contacto /> },
    { path: "*", element: <NoEncontrado /> }
  ]);

  return componenteRutas;
}


