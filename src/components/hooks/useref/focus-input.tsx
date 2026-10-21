import { useRef } from "react"

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)


    const handleButtonClick = () => {
        if(!inputRef.current){
            console.log("No existe la referencia al elemento");
            return
        }

        inputRef.current.focus()
    }

    return(
        <div>
            <button onClick={handleButtonClick}> Enfocar en el input</button>
        </div>
    )
}

export default FocusInput