import { createContext, useContext, useState, type ReactNode } from "react"

interface GlobalContextType{
    value: number | null,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

export const EmptyGlobalState: number = 0

export const GlobalContext = createContext<GlobalContextType>({
    value: null,
    setValue: () => {}
})

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)

    if(!context.value && context.value !== 0){
        throw new Error("GlobalContext must be used within a GlobalContextProvider")
    }

    return context
}

interface GlobalProps{
    children: ReactNode
}


export const GlobalProvider = ({children}: GlobalProps) => {
    const [value, setValue] = useState<number>(EmptyGlobalState)

    return(
        <GlobalContext.Provider value={{value, setValue}}>{children}</GlobalContext.Provider>
    )
}

