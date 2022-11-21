import { useLayoutEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

function App() {
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4200)
  }, [])

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center bg-black">
          <ClimbingBoxLoader
            // color="#007575"
            color="#f37a24"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="ease-in-out duration-500">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
