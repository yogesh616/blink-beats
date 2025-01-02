import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainData from './components/MainData'
import Top from './components/Top'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top />
     <Header />
      <MainData />
     <Footer />
    </>
  )
}

export default App
