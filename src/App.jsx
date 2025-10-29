import { BrowserRouter, Routes, Route } from "react-router"; // ← CORREGIDO
import Inicio from "./pages/inicio";
import Producto from "./pages/producto";
import Nosotros from "./pages/nosotros";
import Contacto from "./pages/contacto";
import NoEncontrado from "./pages/noEncontrado";
import NavBar from "./components/navBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <rutas/>
    </BrowserRouter>
  )
}


