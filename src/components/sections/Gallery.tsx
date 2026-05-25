const images = [
  'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80',
]

export function Gallery() {
  return (
    <section className="py-20">
      <div className="section-container">
        <span className="badge">Galería</span>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src) => <img key={src} src={src} className="h-56 w-full rounded-2xl object-cover" alt="Comida Burger Luna" />)}
        </div>
      </div>
    </section>
  )
}
