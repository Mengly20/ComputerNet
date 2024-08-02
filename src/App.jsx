import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Products from './components/Product/Products'
import Categories from './components/Categories/Categories'
import Brand from './components/Brand/Brand'
import AOS from 'aos'
import "aos/dist/aos.css"
const App = () => {
React.useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing: "ease-in-sine",
    delay: 100,

  })
  AOS.refresh();
},[]);


  return (
    <div >
      
      {/* link next webpage */}
      <a href="/Home"></a>
      <a href="/Product"></a>
      <a href="/Categorise"></a>
      <a href="/Brand"></a>
     

       {/* Create Router */}
       
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/Product" element={<Products/>}/>
        <Route  path="/Categorise" element={<Categories/>} />
        <Route  path="/Brand" element={<Brand/>}/>

      </Routes>
       
      
      
      


    </div>
  )
}

export default App
