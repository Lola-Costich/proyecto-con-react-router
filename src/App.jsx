import { BrowserRouter, Route, Router } from "react-router";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <routes>
          <Router>
            <Route path="/inicio" element={<inicio />} />
            <Route path="/producto" element={<producto />} />
            <Route path="/nosotros" element={<nosotros />} />
            <Route path="/contacto" element={<contacto />} />
            <Route path="*" element={<noEncontrado />} />
          </Router>
        </routes>
      </BrowserRouter>
    </div>
  )
}

