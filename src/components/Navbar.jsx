import { NavLink } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "text-yellow-300 font-bold";
  const inactiveClass = "text-white hover:text-yellow-300 transition-colors";

  return (
    <nav className="bg-blue-600 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Mi App</h1>

        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/inicio" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/producto" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Producto
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Botón móvil */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-center">
          <li>
            <NavLink to="/inicio" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setIsOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/producto" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setIsOpen(false)}>
              Producto
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setIsOpen(false)}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setIsOpen(false)}>
              Contacto
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
