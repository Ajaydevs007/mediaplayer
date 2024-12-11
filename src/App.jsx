import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import Landing from './Pages/Landing'
import History from './Pages/History'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'




function App() {


  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <Header />
      <Routes>
        <Route element={<Landing />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<History />} path='/history' />
      </Routes>
      <Footer />





    </>
  )
}

export default App
