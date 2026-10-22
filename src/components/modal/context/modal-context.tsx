import { createContext, useState, type ReactNode } from "react";

const ModalContext = createContext<{
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>
}>({
  state: true,
  setState: ()  => {
    console.log("🚨 setState POR DEFECTO — NO estás dentro del ModalProvider");
  },
})

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false)

  return <ModalContext.Provider value={{ state, setState }}>{children}</ModalContext.Provider>
}


export {
  ModalProvider,
  ModalContext
}