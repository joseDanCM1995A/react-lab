import './App.css'
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
    <Modal>
      <h2>Hola EVZODA</h2>
      <h3>Te quiero</h3>
    </Modal>
    <button onClick={openModal}>Abrete Sésamo</button>
  </>
  )
}

export default App