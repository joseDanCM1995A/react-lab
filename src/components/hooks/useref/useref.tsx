// objetivo: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
// SIN causar un re-render

import { useRef, useState } from "react"

// hacer referencia a un elemento del DOM

// EJEMPLO:
// Un marcador de un libro que usamos para guardar la ultima posicion de la lectura
// NO modifica el contenido del libro 

const BookReader = () =>{
    const currenPageRef = useRef<number>(1)
    const [currenPage, setCurrentPage] = useState(0)


    const nextPage = () => {
        currenPageRef.current += 1;
        console.log(`avanzaste a la pagina ${currenPageRef.current}`);
    }
    
    const prevPage = () => {
        if(currenPageRef.current === 1){
            console.log(`aNo se puede retroceder la pagina porque ya te encuentras en la pagina${currenPageRef.current}`);
            return
        }

        currenPageRef.current -= 1;
        console.log(`Retrocediste a la oagina ${currenPageRef.current}`);
    }

    const goToPage = (page: number) => {
        if(currenPageRef.current < 1){
            console.log(`No se puede saltar a una pagina imposible`);
            return
        }

        currenPageRef.current = page
        setCurrentPage(page )
        console.log(`Salataste a la pagina ${currenPageRef.current}`);
    }

    return(
        <div>
            <h2>Lectura de libro</h2>
            <p>Pagina actual: {currenPageRef.current}</p>
            <p>Pagina actual from state: {currenPage}</p>
            <button onClick={prevPage}>Pagina anterior</button>
            <button onClick={nextPage}>Pagina siguiente</button>
            <button onClick={() => goToPage(5)}>Ir a la pagina</button>
        </div>
    )
}


export default BookReader