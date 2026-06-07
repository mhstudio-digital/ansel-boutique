const PRODUCTS = [
  {
    name: "Abrigo Étoile",
    price: "$890",
    category: "Abrigos",
    image: "https://source.unsplash.com/600x800/?fashion,luxury,minimal&sig=1",
  },
  {
    name: "Vestido Solène",
    price: "$640",
    category: "Vestidos",
    image: "https://source.unsplash.com/600x800/?fashion,luxury,minimal&sig=2",
  },
  {
    name: "Blazer Margaux",
    price: "$520",
    category: "Sastrería",
    image: "https://source.unsplash.com/600x800/?fashion,luxury,minimal&sig=3",
  },
  {
    name: "Blusa Aimée",
    price: "$310",
    category: "Blusas",
    image: "https://source.unsplash.com/600x800/?fashion,luxury,minimal&sig=4",
  },
  {
    name: "Pantalón Rive",
    price: "$420",
    category: "Pantalones",
    image: "https://source.unsplash.com/600x800/?fashion,luxury,minimal&sig=5",
  },
  {
    name: "Falda Noir",
    price: "$380",
    category: "Faldas",
    image: "https://source.unsplash.com/600x800/?fashion,luxury,minimal&sig=6",
  },
];

export function Collection() {
  return (
    <section id="coleccion" className="border-t border-ink/10 px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
            Selección
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            La colección
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article key={product.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg text-ink">{product.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink/50">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm text-gold">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
