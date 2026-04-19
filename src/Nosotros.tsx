function Nosotros() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-600 text-white p-5 text-center">
        <h1 className="text-3xl font-bold">EasyDrive</h1>
        <p className="text-sm">Sobre Nosotros</p>
      </header>

      {/* About */}
      <section className="p-10 grid md:grid-cols-2 gap-8 items-center bg-white">
        
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
          <p className="text-gray-600 text-lg">
            EasyDrive es un proyecto tecnológico enfocado en la prevención de
            accidentes mediante el uso de IoT. Desarrollamos soluciones que
            permiten monitorear en tiempo real el estado del conductor y del
            vehículo, ayudando a tomar decisiones antes de que ocurra un riesgo.
          </p>
        </div>

        {/* Imagen */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
            alt="IoT Vehicular"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </section>

      {/* Tecnología */}
      <section className="p-10 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Imagen */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            alt="Sensores y datos"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Nuestra Tecnología</h2>
          <p className="text-gray-600 text-lg">
            Nuestro sistema se basa en un prototipo con sensores que detectan
            condiciones críticas como fatiga, consumo de alcohol o movimientos
            bruscos. Estos datos se envían a una aplicación donde pueden ser
            analizados en tiempo real para prevenir accidentes.
          </p>
        </div>

      </section>

      {/* Misión */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Reducir los accidentes de tránsito mediante el uso de tecnología
          inteligente, brindando herramientas tanto a empresas como a conductores
          independientes para monitorear, analizar y mejorar la seguridad en cada
          trayecto.
        </p>
      </section>

      {/* A quién ayudamos */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          ¿A quién ayudamos?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Empresas con flotillas</h3>
            <p className="text-gray-600">
              Monitorea a tus conductores en tiempo real, reduce riesgos y toma
              decisiones basadas en datos para mejorar la seguridad y eficiencia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Conductores independientes</h3>
            <p className="text-gray-600">
              Analiza tu comportamiento al volante, recibe alertas y mejora tus
              hábitos de conducción para evitar accidentes.
            </p>
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

export default Nosotros