import { Menu } from 'lucide-react'

const nav = ['Inicio', 'Burgers', 'Delivery', 'Nosotros', 'Contacto']

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-charcoal/75 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#inicio" className="text-xl font-black tracking-wide text-brand-ivory">BURGER <span className="text-brand-red">LUNA</span></a>
        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-brand-ivory/80 transition hover:text-brand-ivory">{item}</a>
          ))}
        </nav>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/20 md:hidden" aria-label="Abrir menú">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
