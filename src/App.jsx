import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/inicio";
import Producto from "./pages/producto";
import Nosotros from "./pages/nosotros";
import Contacto from "./pages/contacto";
import NoEncontrado from "./pages/noEncontrado";
import Navbar from "components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      
       <header>
        <Navbar />
       </header>
      
      <main>
        <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

