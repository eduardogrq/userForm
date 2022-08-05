import { useState } from "react"

const App = () => {
  const [formulario, setFormulario] = useState({name: ''})
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }
  console.log(formulario)
  return(
    <form>
      <input name="name" type="text" onChange={handleChange}/>
    </form>
  )
}

export default App