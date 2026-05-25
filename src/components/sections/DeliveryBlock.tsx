import { Bike, Clock3 } from 'lucide-react'

export function DeliveryBlock() {
  return (
    <section id="delivery" className="py-20">
      <div className="section-container rounded-3xl border border-brand-red/40 bg-gradient-to-br from-brand-red/20 to-brand-gray p-8 sm:p-12">
        <span className="badge">Pide a domicilio</span>
        <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Tu Burger Luna en casa, en minutos.</h2>
        <div className="mt-6 grid gap-4 text-sm text-white/80 sm:grid-cols-2">
          <div className="flex items-center gap-2"><Bike className="h-4 w-4 text-brand-beige"/> Delivery diario en Puerto de Alcúdia</div>
          <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-brand-beige"/> Pedido rápido y seguimiento fácil</div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-charcoal">Just Eat</a>
          <a href="#" className="rounded-full bg-brand-charcoal px-5 py-3 text-sm font-bold text-white border border-white/20">A Taula</a>
          <a href="#" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Ver carta</a>
        </div>
      </div>
    </section>
  )
}
