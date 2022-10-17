import { Brand } from './components/Brand'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Info } from './components/Info'
import { Navbar } from './components/Navbar'
import { Shorter } from './components/Shorter'
import './index.css'

function App() {

  return (
    <div >
      <div className='p-6'>

        <Navbar />
        <Hero />
        <Shorter />
        <Info />

      </div>
      <Brand />
      <Footer />
    </div>
  )
}

export default App
