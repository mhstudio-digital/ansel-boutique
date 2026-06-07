const links = [
  { label: "Colección", href: "#coleccion" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-ink/10 px-6 py-16 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <span className="font-serif text-xl tracking-[0.2em] text-ink">ANSEL</span>
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-widest text-ink/60 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink/40">
          © 2026 Ansel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
