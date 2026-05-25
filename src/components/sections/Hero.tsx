import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-16">
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=80"
        alt="Hamburguesa premium Burger Luna"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-brand-charcoal" />
      <div className="absolute inset-0 bg-noise" />

      <div className="section-container relative flex min-h-[calc(100vh-4rem)] items-end pb-14 sm:items-center sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="badge">Puerto de Alcúdia · Delivery activo</span>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">Sabor brutal,<br />estilo <span className="text-brand-red">Burger Luna</span>.</h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">Una nueva experiencia premium: hamburguesas artesanas, ingredientes top y pedido rápido con Just Eat y A Taula.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#delivery" className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:scale-[1.02]">Pedir ahora</a>
            <a href="#burgers" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Ver carta</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
