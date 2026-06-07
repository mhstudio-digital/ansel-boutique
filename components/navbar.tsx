const links = [
  { href: "#coleccion", label: "Colección" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-12">
        <a href="#" className="font-serif text-2xl tracking-[0.2em] text-ink">
          ANSEL
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-ink/70 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
