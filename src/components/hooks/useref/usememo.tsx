// objetico: memorizar (cache) el resultado de ejecutar una funcion costosa, para evitar que se vuelva a llamar el metodo
// controlar si el beneficio de memorizarlo es superior al de recalcularlo

import { useMemo, useState } from "react"

// ejemplo:
// Tenemoos una lista de comparas y ya calculaste el costo total de hacer toda la compra
// si no ahrehamos nada nu tampoco cambio nadam cual es el costo total

interface Item {
    id: number,
    name: string,
    price: number
}


const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1, name: "Manzana", price: 5.5
        },
        {
            id: 2, name: "Cheetos", price: 15
        },
        {
            id: 3, name: "Huevo", price: 64.5
        },
        {
            id: 4, name: "Leche", price: 31
        },
    ])
    
    const [discount, setDiscount] = useState<number>(0)

    // const totalCost = items.reduce((total, item) => total + item.price, 0)
    // const finalCost = totalCost- discount

    const totalCost = useMemo(() => items.reduce((total, item) => total + item.price, 0), [items])

    const finalCost = useMemo(() => totalCost- discount, [totalCost, discount])

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `producto ${items.length + 1}`,
            price: Math.random() * 5
        }

        setItems([...items,  newItem])
    } 

    return(
        <div className="">
            <h2>Lista de compras</h2>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            {item.name}: ${item.price.toFixed(2)}
                        </li>
                    ))
                }
            </ul>

            <p>Costo total: ${totalCost.toFixed(2)}</p>
            
            <p>
                Descuento: $
                <input type="number" value={discount} onChange={ e => setDiscount(parseFloat(e.target.value) || 0)}/>
            </p>

            <p>Costo final ${finalCost.toFixed(2)}</p>
            <button onClick={addItem}> Agregar Producto </button>
        </div>
    )
}





export default ShoppingCart