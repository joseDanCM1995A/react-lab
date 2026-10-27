import './App.css'
import { AppRouter } from './appRouter'
import { ModalProvider } from './components/modal/context/modal-context'
import { useModalContext } from './components/modal/context/use-modal-context'
import { Modal } from './components/modal/modal'

function App() {
  const { setState } = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (
  <>
      <h2>app main</h2>
    {/* <button onClick={openModal}>Abrete Sésamo</button> */}
  </>
  )
}

export default App