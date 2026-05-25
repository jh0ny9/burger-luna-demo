import { About } from './components/About'
import { Contact } from './components/Contact'
import { DeliveryBlock } from './components/DeliveryBlock'
import { FeaturedBurgers } from './components/FeaturedBurgers'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

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
