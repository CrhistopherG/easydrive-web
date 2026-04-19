function Servicios() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-600 text-white p-5 text-center">
        <h1 className="text-3xl font-bold">EasyDrive</h1>
        <p className="text-sm">Nuestros Servicios</p>
      </header>

      {/* Servicios */}
      <section className="p-8 grid gap-6 md:grid-cols-3">

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-2">Renta de Autos</h2>
          <p className="text-gray-600">
            Ofrecemos vehículos modernos para viajes seguros y cómodos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-2">Chofer Privado</h2>
          <p className="text-gray-600">
            Servicio de transporte con conductores profesionales.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-2">Soporte 24/7</h2>
          <p className="text-gray-600">
            Atención al cliente en cualquier momento del día.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 EasyDrive - Todos los derechos reservados</p>
      </footer>

    </div>
  )
}

export default Servicios