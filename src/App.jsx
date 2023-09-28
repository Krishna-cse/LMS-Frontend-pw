import './App.css'

import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer.jsx'
import HomeLayout from './Layout/HomeLayout'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
       </Routes> 
      {/* <Footer/>
      <HomeLayout/> */}
    </>
  )
}

export default App
