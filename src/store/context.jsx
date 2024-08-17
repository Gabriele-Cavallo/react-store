import { createContext } from "react";
import { useState } from "react";

export const ModalContext = createContext({
  tabSelectedCtx: '',
  toggleModalFn: () => {},
  email: ''
});

export default function ModalContextProvider({children}) {
    const [toggleModal, setToggleModal] = useState({
        toggle: false,
        tab: ''
    });
    
    function handleToggle(tabSelected){
      setToggleModal((prevState) => {
        return {
          ...prevState,
          toggle: !prevState.toggle,
          tab: tabSelected
        }
      })
      if(!email.includes('@') || !email.includes('.it') && !email.includes('.com')){
        setEmail(email);
      }else {
        setEmail('');
      }
    }

    const [email, setEmail] = useState('');
    function handleEmailInput(value){
        setEmail(value);
    }

    const ctxValue = {
        tabSelectedCtx: toggleModal,
        toggleModalFn: handleToggle,
        emailInput: handleEmailInput,
        email
    }

    return <ModalContext.Provider value={ctxValue}>
        {children}
    </ModalContext.Provider>
}