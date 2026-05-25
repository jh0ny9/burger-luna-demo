import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { FeaturedBurgers } from './components/sections/FeaturedBurgers'
import { DeliveryBlock } from './components/sections/DeliveryBlock'
import { About } from './components/sections/About'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="bg-brand-charcoal text-brand-ivory">
      <Header />
      <main>
        <Hero />
        <FeaturedBurgers />
        <DeliveryBlock />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
