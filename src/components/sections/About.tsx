export function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="section-container grid items-center gap-8 md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80" alt="Equipo preparando hamburguesa" className="h-72 w-full rounded-3xl object-cover"/>
        <div>
          <span className="badge">Sobre Burger Luna</span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Hamburguesas con alma en Puerto de Alcúdia.</h2>
          <p className="mt-4 text-white/75">Burger Luna nace para quienes quieren sabor real: carne jugosa, pan brioche, ingredientes de calidad y un servicio que funciona tanto en local como en delivery.</p>
        </div>
      </div>
    </section>
  )
}
