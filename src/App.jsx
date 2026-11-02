import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
          <section>
              <div>
                  <img src="C:\Users\CHINWA GSM\Images\etudiant3.jpg" alt="photo etudiant" width="200"/>
                  <br></br>
                  <br></br>
                  <h1 class="h1">Fiche Etudiant</h1>
                  <p>Email : SlimBoubaker@gmail.com</p>
                  <p>Telephone : +216 99 999 999</p>
                  <p>Filiére :Genie Logiciel et systéme d'informatique</p>
                  <p>Année d'etude : 2026-2027</p>
                  <p>Groupe  : GlS 2</p>
                  <p>ville : Mahdia</p>
                  <button class="h2" >contacter</button>
              </div>
          </section>
    </>
  )
}

export default App
