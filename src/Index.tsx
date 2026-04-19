import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";

function Index() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/index" element={
            <>
              <h1 className="flex justify-center content-center p-10 text-justify">Bienvenidos a la pagina web de EasyDrive, tu solución de transporte confiable y conveniente. En EasyDrive, nos dedicamos a ofrecer servicios de transporte de alta calidad para satisfacer tus necesidades de movilidad. Ya sea que necesites un viaje rápido por la ciudad, un traslado al aeropuerto o un servicio de transporte para eventos especiales, estamos aquí para ayudarte. Nuestra plataforma fácil de usar te permite reservar tu viaje en segundos, y nuestros conductores profesionales están comprometidos a brindarte una experiencia segura y cómoda. ¡Explora nuestros servicios y descubre cómo EasyDrive puede hacer que tus desplazamientos sean más fáciles y agradables!</h1>
            </>
          }/>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Index;