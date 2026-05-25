import { Menu } from 'lucide-react'

const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Burgers', href: '#burgers' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-charcoal/75 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#inicio" aria-label="Burger Luna inicio">
          <img src="/logo-burger-luna.svg" alt="Logo Burger Luna" className="h-9 w-auto" />
        </a>

        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="text-brand-ivory/80 transition hover:text-brand-ivory">
              {item.label}
            </a>
          ))}
        </nav>

        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/20 md:hidden" aria-label="Abrir menú">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
