import { useState } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
