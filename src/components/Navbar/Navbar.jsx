import React from 'react';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping} from "react-icons/fa6";


const Menu =[
  {
    id: 1,
    name: "Home",
    link:"/Home"
  },
  {
    id: 2,
    name: "Product",
    link: "/Product"
  },
  {
    id:3,
    name:"Categories",
    link: "/Categorise"
  },
  {
    id:4,
    name:"Brand",
    link:"/Brand"
  }
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-bgprimary/80 py-2">
        <div className=" flex justify-between items-center mx-1 px-0 ml-5 mr-5cd ">
            <div>
                <a href="#" className="font-bold text-2xl sm: text-3xl flex gap-1 ">
                    <img src={Logo} alt="Logo" className='w-[60px] h-[60px]' />
                    computernet
                </a>
            </div>
            {/* button search  */}
            <div >
                <div className=" relative group hidden sm:block ">
                   <input 
                   
                   type="text" 
                   placeholder="search " 
                   className=" bg-bgsearch w-[200px] sw:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary " /> 
                    <IoMdSearch className="text-gray-500 group-hover:text-primary  absolute top-1/2 -translate-y-1/2 right-3 "  />
                </div>
              {/* Button order */}
              </div >
              <div className="flex justify-between items-center gap-2 ">
            <button 
              onClick={()=> alert("Ordering not available yet")}
              className="bg-gradient-to-r from-bgsearch to-secondary translate-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
                <span >
                  Order
                </span>
                <FaCartShopping
                className="text-xl text-white drop-shadow-sm cursor-pointer"
                />
            </button>
            {/* button login */}
            <button 
              onClick={()=> alert("Login not available yet")}
              className="bg-gradient-to-r bg-bglogin translate-all duration-400 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
            >
                <span >
                  Login
                </span>
            </button>
            </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div >
            <ul className="flex">
              {
                Menu.map((data)=>(
                 <li className="flex">
                  <a href={data.link} 
                  className="inline-block px-16 hover:text-secondary  duration-200 py-2" 
                  > {data.name} </a>
                 </li>
                ))}
               
                
            </ul>
      </div>
    </div>
  )
}

export default Navbar
