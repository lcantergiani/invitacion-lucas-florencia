import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Location from './components/Location'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Countdown />
      <Location />
      <Registry />
      <RSVP />
      <Contact />
      <Footer />
    </main>
  )
}
