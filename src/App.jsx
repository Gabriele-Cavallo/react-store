import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'
import Modal from './components/Modal';

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  function handleToggle(){
    setToggleModal((prevState) => !prevState)
  }

  return (
    <>
      <Modal onClose={handleToggle} open={toggleModal} />
      <Header openModal={handleToggle}/>
      <Outlet />
    </>
  )
}

export default App
