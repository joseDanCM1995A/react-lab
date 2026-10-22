import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import "./Modal.css"
import { useModalContext } from "./context/use-modal-context";

interface Props {
  children: React.ReactNode
}

const eventListener = "keydown";

export const Modal = ({ children }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const { state, setState } = useModalContext();

  const closeModal = () => { setState(false) }

  const modalRoot = document.getElementById("modal")
  console.log(modalRoot);
  

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState(false)
      }
    }
    if (state) {
      document.addEventListener(eventListener, handleEsc)
    }

    return () => {
      document.removeEventListener(eventListener, handleEsc)
    }
  }, [setState, state])

  if (!state || !modalRoot) {
    console.log('lll', state);
    console.log('modal', modalRoot);
    
    return null;
  }

  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={handleContentClick}  ref={modalRef}>
        {children}
        <button className="close-button" onClick={closeModal}>Close</button>
      </div>
    </div>, modalRoot)
}