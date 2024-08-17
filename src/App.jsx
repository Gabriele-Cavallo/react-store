import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Modal from './components/Modal';
import Footer from './components/Footer';
import ModalContextProvider from './store/context';

function App() {
  return (
    <ModalContextProvider>
      <Modal />
      <Header />
      <Outlet />
      <Footer />
    </ModalContextProvider>
  )
}

export default App
