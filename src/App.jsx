import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css'
import Studenti from './components/Studenti'
import Open from './components/Open'
import Admin from './components/Admin'
import Pannell from './components/Panel'
import Corsi from './components/Corsi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile title="Giacomo" job="web developer" />
      <Studenti />
      <Open />
      <Admin />
      <Pannell />
      <div></div>
      <div></div>
      <div></div>
      <Corsi />
    </>
  )
}

export default App
