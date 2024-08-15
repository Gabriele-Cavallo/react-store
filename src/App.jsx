import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'
import Modal from './components/Modal';

function App() {
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
  }

  return (
    <>
      <Modal tab={toggleModal.tab} onClose={handleToggle} open={toggleModal.toggle} />
      <Header openModal={handleToggle}/>
      <Outlet />
    </>
  )
}

export default App
