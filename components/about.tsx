export function About() {
  return (
    <section id="nosotros" className="border-t border-ink/10 px-6 py-28 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://source.unsplash.com/600x800/?fashion,luxury,minimal&sig=7"
            alt="Atelier ANSEL"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="max-w-md">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
            Nuestra historia
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Nosotros
          </h2>
          <p className="mt-6 text-ink/60">
            ANSEL nace de la convicción de que la moda verdadera no necesita
            gritar. Diseñamos piezas atemporales, confeccionadas con materiales
            nobles, pensadas para acompañar a la mujer contemporánea en cada
            etapa de su vida.
          </p>
          <p className="mt-4 text-ink/60">
            Cada prenda es una declaración silenciosa: elegancia, propósito y
            una belleza que perdura más allá de las temporadas.
          </p>
        </div>
      </div>
    </section>
  );
}
