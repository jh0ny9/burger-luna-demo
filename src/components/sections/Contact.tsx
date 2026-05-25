import { MapPin, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contacto" className="py-20">
      <div className="section-container rounded-3xl border border-white/10 bg-brand-gray p-8">
        <span className="badge">Contacto y ubicación</span>
        <h2 className="mt-4 text-3xl font-black">Visítanos o pide online.</h2>
        <div className="mt-6 space-y-3 text-white/80">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-red"/> Puerto de Alcúdia, Mallorca</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-red"/> +34 000 000 000</p>
        </div>
      </div>
    </section>
  )
}
