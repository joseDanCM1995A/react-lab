import { ColorRed, Button } from './components/buttons/button/Button';
import { AppForm } from './components/forms/form/form';
import { GlobalProvider } from './context/global.context';
import './App.css'


function App() {
  const submit = () => {
    console.log("submitted");
    
  }
  const handleClick = () => {
    console.log("clicked me");
  }

  const dimehola =() => {
    alert("hola")
  }

  return (
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimehola}>My button red</Button></ColorRed>
      <Button parentMethod={handleClick}>My normal button</Button>

      <AppForm>
        <button type="submit" onClick={submit}></button>
      </AppForm>
    </GlobalProvider>
  )
}

export default App
