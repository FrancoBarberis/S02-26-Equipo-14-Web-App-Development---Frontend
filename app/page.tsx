export default function Home() {
  return (
    <section className="relative h-[calc(100dvh-64px)] w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(/HorseHero.jpg)`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Equipamiento Ecuestre de Alto Rendimiento
        </h1>

        <p className="mt-4 max-w-2xl text-lg md:text-l text-white/90">
          Monturas, bridones, estribos y ropa técnica para jinete y caballo.
          Calidad profesional para cada disciplina.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition"
          >
            Comprar ahora
          </a>
          <a
            href="/products"
            className="px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white/10 transition"
          >
            Ver productos
          </a>
        </div>
      </div>
    </section>
  );
}