import foto1 from "./images/crhistopher.jpg";
import foto2 from "./images/juanpa.jpg";
import foto3 from "./images/isaac.jpg";
import foto4 from "./images/jesus.jpg";

function Contacto() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-600 text-white p-5 text-center">
        <h1 className="text-3xl font-bold">EasyDrive</h1>
        <p className="text-sm">Contáctanos</p>
      </header>

      {/* Formulario */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Envíanos un mensaje
        </h2>

        <form className="max-w-3xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="tel"
            placeholder="Teléfono"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Selecciona el motivo</option>
            <option value="soporte">Soporte técnico</option>
            <option value="ventas">Ventas</option>
            <option value="informacion">Información general</option>
          </select>

          <textarea
            placeholder="Escribe tu mensaje..."
            rows={4}
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="suscripcion" />
            <label htmlFor="suscripcion" className="text-sm text-gray-600">
              Deseo recibir noticias y promociones
            </label>
          </div>

          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* Integrantes (se conserva igual con imágenes) */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestro Equipo
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {/* Integrante 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src={foto1}
              alt="Integrante 1"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-bold">Christopher Isai Ramirez Gutierrez</h3>
            <p className="text-gray-500 text-sm">Project Manager</p>
            <a
              href="https://github.com/CrhistopherG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-2 hover:underline cursor-pointer"
            >
              https://github.com/CrhistopherG
            </a>
          </div>

          {/* Integrante 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src={foto2}
              alt="Integrante 2"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-bold">Juan Pablo Pérez Martín</h3>
            <p className="text-gray-500 text-sm">Backend / Base de Datos</p>
            <a
              href="https://github.com/JuanPabloPerezMartin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-2 hover:underline cursor-pointer"
            >
              https://github.com/JuanPabloPerezMartin
            </a>
          </div>

          {/* Integrante 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src={foto3}
              alt="Integrante 3"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-bold">Isaac Adrian Canul Perera</h3>
            <p className="text-gray-500 text-sm">Frontend / App</p>
            <a
              href="https://github.com/IsaacCanul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-2 hover:underline cursor-pointer"
            >
              https://github.com/IsaacCanul
            </a>
          </div>

          {/* Integrante 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src={foto4}
              alt="Integrante 4"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-bold">Jesus Alberto Jiménez Gómez</h3>
            <p className="text-gray-500 text-sm">Análisis de Datos</p>
            <a
              href="https://github.com/Jesusgomez365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-2 hover:underline cursor-pointer"
            >
              https://github.com/Jesusgomez365
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 EasyDrive - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}

export default Contacto;
