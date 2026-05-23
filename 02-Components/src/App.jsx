import Card from "./Components/Card"
import Navbar from "./Components/Navbar"

function App() {

  const place = 'Ajmer'
  const age = 21

  return (
    <>
      <div>
         <h1>I'M From {place}</h1>
         <h2>I'M {age} Year Old</h2>
      </div>

      <Navbar />
      <Navbar />
      <Card />
      <Card />
      
    </>
  )
}

export default App
