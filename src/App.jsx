import Intro from './components/Intro'
import Countdown from './components/Countdown'
import Details from './components/Details'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  return (
    <>
      <main className="overflow-x-clip">
        <Intro />
        <Countdown />
        <Details />
        <Location />
        <Gallery />
        <Registry />
        <RSVP />
        <Contact />
        <Footer />
      </main>
      <MusicPlayer src={`${import.meta.env.BASE_URL}cancion.mp3`} />
    </>
  )
}
