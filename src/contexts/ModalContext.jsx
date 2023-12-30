import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("This context was used outside of the provider");
  return context;
}

export { ModalContextProvider, useModal };
