"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const SIZES = ["S", "M", "L", "XL"];

const PRODUCTS = [
  {
    name: "Abrigo Étoile",
    price: "$890",
    category: "Abrigos",
    image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&h=500&fit=crop",
    description:
      "Confeccionado en lana merino italiana. Corte estructurado que define la silueta con elegancia atemporal.",
  },
  {
    name: "Vestido Solène",
    price: "$640",
    category: "Vestidos",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    description:
      "Seda natural en tono profundo. Diseño fluido pensado para la mujer que domina cada espacio que habita.",
  },
  {
    name: "Blazer Margaux",
    price: "$520",
    category: "Sastrería",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
    description:
      "Sastrería de precisión en gabardina premium. La pieza que transforma cualquier look en una declaración.",
  },
  {
    name: "Blusa Aimée",
    price: "$310",
    category: "Blusas",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=500&fit=crop",
    description:
      "Lino europeo en corte relaxed. Suavidad y estructura en perfecta armonía.",
  },
  {
    name: "Pantalón Rive",
    price: "$420",
    category: "Pantalones",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop",
    description:
      "Corte palazzo en crepe de alta densidad. Movimiento y elegancia en cada paso.",
  },
  {
    name: "Falda Noir",
    price: "$380",
    category: "Faldas",
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400&h=500&fit=crop",
    description:
      "Midi en punto canalé negro. Minimalismo absoluto con máximo impacto visual.",
  },
];

type Product = (typeof PRODUCTS)[number];

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const whatsappHref = `https://wa.me/50683674466?text=${encodeURIComponent(
    `Hola, me interesa consultar sobre ${product.name} de Ansel Boutique.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden bg-cream md:grid-cols-2"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream/80 text-ink transition-colors hover:text-gold"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[3/4] overflow-hidden bg-ink/5 md:aspect-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
          <div>
            <h3 className="font-serif text-2xl text-ink sm:text-3xl">{product.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-ink/50">
              {product.category}
            </p>
          </div>
          <p className="text-lg text-gold">{product.price}</p>
          <p className="text-sm leading-relaxed text-ink/60">{product.description}</p>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-ink/50">Talla</p>
            <div className="flex gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`flex h-10 w-10 items-center justify-center border text-sm transition-colors ${
                    selectedSize === size
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/20 text-ink hover:border-ink"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-2 inline-flex items-center justify-center overflow-hidden border border-ink px-6 py-3 text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:text-cream"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative">Consultar disponibilidad</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
            <article
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
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

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
