import useFormulario from './hooks/useFormulario';
import Input from './components/Input';

const App = () => {

  const [formulario, handleChange] = useFormulario({name: ''})

  console.log(formulario)
  return(
    <div>
      <Input name="name" type="text" onChange={handleChange} label="Name"/>
    
    </div>
  )
}

export default App