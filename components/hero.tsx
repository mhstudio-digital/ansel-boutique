export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(201,169,110,0.12),transparent_60%)]"
      />
      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">
        Colección permanente
      </p>
      <h1 className="max-w-3xl text-balance font-serif text-5xl leading-[1.1] tracking-tight text-ink sm:text-6xl md:text-7xl">
        La moda como expresión de lo eterno.
      </h1>
      <p className="mt-8 max-w-md text-balance text-base text-ink/60 sm:text-lg">
        Piezas únicas para mujeres que saben lo que quieren.
      </p>
      <a
        href="#coleccion"
        className="group relative mt-12 overflow-hidden rounded-full border border-ink px-8 py-3 text-sm uppercase tracking-widest text-ink transition-colors duration-300 hover:text-cream"
      >
        <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
        <span className="relative">Ver colección</span>
      </a>
    </section>
  );
}
