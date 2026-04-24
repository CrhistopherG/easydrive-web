function Servicios() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header (SIN CAMBIOS) */}
      <header className="bg-blue-600 text-white p-5 text-center">
        <h1 className="text-3xl font-bold">EasyDrive</h1>
        <p className="text-sm">Nuestros Servicios</p>
      </header>

      {/* Servicios */}
      <section className="p-8 grid gap-6 md:grid-cols-4">

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="text-4xl mb-2">🚗</div>
          <h2 className="text-xl font-bold mb-2">Renta de Autos</h2>
          <p className="text-gray-600">
            Vehículos modernos para viajes seguros y cómodos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="text-4xl mb-2">👨‍✈️</div>
          <h2 className="text-xl font-bold mb-2">Chofer Privado</h2>
          <p className="text-gray-600">
            Conductores profesionales disponibles para ti.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="text-4xl mb-2">🎧</div>
          <h2 className="text-xl font-bold mb-2">Soporte 24/7</h2>
          <p className="text-gray-600">
            Atención al cliente en cualquier momento.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="text-4xl mb-2">📍</div>
          <h2 className="text-xl font-bold mb-2">Entrega a Domicilio</h2>
          <p className="text-gray-600">
            Recibe el vehículo donde lo necesites.
          </p>
        </div>

      </section>

      {/* Beneficios */}
      <section className="bg-white py-10 px-8">
        <h2 className="text-2xl font-bold text-center mb-6">¿Por qué elegirnos?</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-4">
            <div className="text-3xl mb-2">🔒</div>
            <p className="font-semibold">Seguridad Garantizada</p>
          </div>

          <div className="p-4">
            <div className="text-3xl mb-2">⏰</div>
            <p className="font-semibold">Disponibilidad 24/7</p>
          </div>

          <div className="p-4">
            <div className="text-3xl mb-2">⭐</div>
            <p className="font-semibold">Alta Calificación</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center p-10">
        <h2 className="text-2xl font-bold mb-3">¿Listo para tu viaje?</h2>
        <p className="mb-4">Reserva tu vehículo en segundos</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition">
          Reservar ahora
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 EasyDrive - Todos los derechos reservados</p>
      </footer>

    </div>
  )
}

export default Servicios;