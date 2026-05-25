const burgers = [
  { name: 'Luna Smash', detail: 'Doble smash, cheddar, bacon crispy, salsa Luna.', price: '13,90€' },
  { name: 'Truffle Moon', detail: 'Carne madurada, mayo trufada, cebolla caramelizada.', price: '15,50€' },
  { name: 'Volcánica', detail: 'Jalapeños, chipotle, pepper jack, toque ahumado.', price: '14,40€' },
]

export function FeaturedBurgers() {
  return (
    <section id="burgers" className="py-20">
      <div className="section-container">
        <span className="badge">Burgers destacadas</span>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {burgers.map((burger) => (
            <article key={burger.name} className="rounded-2xl border border-white/10 bg-brand-gray p-6">
              <h3 className="text-2xl font-bold text-white">{burger.name}</h3>
              <p className="mt-2 text-sm text-white/70">{burger.detail}</p>
              <p className="mt-4 text-lg font-extrabold text-brand-beige">{burger.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
