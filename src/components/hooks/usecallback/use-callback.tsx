// objetivo: se utiliza para memorizar una instancia de una funcion
// hace que un hijo no renderice
// la diferencia con usememo y usecallback es que use memo memoriza la funcion y usecallback la instancia 

import { useCallback, useState } from "react";

// ejezmplo
// supongamos que tenemos un numero de telefoto al que llamas con frecuencia
// en cez de marcarlo continuamente lo vamos a almacenar en contactos del telefono
// a menos que el numero cambie siemore utilizo el mismo contaco

interface Contact {
    id: number,
    name: string,
    phone: string
}

interface ContactProps{
    contact: Contact,
    onCall: (phone: string) => void
}

const ContacCard = ({contact, onCall}: ContactProps) => {
    console.log(`renderizando contacto ${contact.name}`);

    return(
        <div>
            <h3>{contact.name}</h3>
            <p>Telefono: {contact.phone}</p>
            <button onClick={() => onCall(contact.phone)}>Llamar</button>
        </div>
    )
}

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        {
            id: 1, name: "name 1", phone: "123-456-789"
        },
        {
            id: 2, name: "name 2", phone:"123-456-789"
        },
        {
            id: 3, name: "name 3", phone: "123-456-789"
        },
        {
            id: 4, name: "name 4", phone:"123-456-789"
        },
    ])

    const [log, setLog] = useState<string>('')

    const makeCall = useCallback((phone: string) => setLog(`llamando al ${phone}`), [])

    const addContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: `Contacto ${contacts.length + 1}`,
            phone: `${Math.floor(1000000000 + Math.random() * 900000000000)}`
        }

        setContacts([...contacts, newContact])
    }

    return(
        <div>
            <h2>Agenda de contactos</h2>
            {contacts.map(contact => (
                <ContacCard key={contact.id} contact={contact} onCall={makeCall}/>
            ))}
            <button onClick={addContact}>Agregar contactp</button>
            <p>{log}</p>
        </div>
    )
}

export default PhoneBook