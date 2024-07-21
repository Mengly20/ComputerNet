import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Products from './components/Product/Products'


const App = () => {



  return (
    <div >
      
      {/* link next webpage */}
      <a href="/Home"></a>
      <a href="/Product"></a>
     

       {/* Create Router */}
       
       <Routes>
        
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/Product" element={<Products/>}/>
      </Routes>
       
      
      
      


    </div>
  )
}

export default App
