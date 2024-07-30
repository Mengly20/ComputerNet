import React from 'react'
import Navbar from '../Navbar/Navbar'
import Img1 from '../../assets/calegories/categorise1.png'
import Img2 from '../../assets/calegories/categorise2.png'
import Img3 from '../../assets/calegories/categorise3.png'
import Img4 from '../../assets/calegories/categorise4.png'
import Img5 from '../../assets/calegories/categorise5.png'
import Img6 from '../../assets/calegories/categorise6.png'
import Img7 from '../../assets/calegories/categorise7.png'
import Img8 from '../../assets/calegories/categorise8.png'
import Img9 from '../../assets/computer/computer1.png'
import Img10 from '../../assets/computer/computer3.png'
import Img11 from '../../assets/computer/computer4.png'
import Img12 from '../../assets/computer/computer2.png'
import Imgcase1 from '../../assets/case/case1.png'
import Imgcase2 from '../../assets/case/case2.png'
import Imgcase3 from '../../assets/case/case3.png'
import Imgcase4 from '../../assets/case/case4.png'

import {FaStar} from "react-icons/fa"

const ProductsData=[
    {
        id: 1,
        img: Img1,
        title:"Dell 19.5 Inch",
        description:"$89"
    },
    {
        id: 2,
        img: Img2,
        title:"Dell 21.5 Inch",
        description:"$99"
    },
    {
        id: 3,
        img: Img3,
        title:"ROG Strix X32",
        description:"$299"
    },
    {
        id: 4,
        img: Img4,
        title:"ROG Strix X22",
        description:"$249"
    },
    {
        id: 5,
        img: Img5,
        title:"Retina iMac",
        description:"$499"
    }
    ,
    {
        id: 6,
        img: Img6,
        title:"iMac Silicon",
        description:"$699"
    }
    ,
    {
        id: 7,
        img: Img7,
        title:"MSI G274QPF",
        description:"$190"
    }
    ,
    {
        id: 8,
        img: Img8,
        title:"MSI MAG 275F",
        description:"$189"
    }
   

]

const labtop=[
    {
        id: 1,
        img: Img9,
        title:"Macbook M2",
        description:"$1499"
    },
    {
        id: 2,
        img: Img10,
        title:"Macbook M1",
        description:"$1299"
    },
    {
        id: 3,
        img: Img11,
        title:"Dell XSP",
        description:"$1200"
    },
    {
        id: 4,
        img: Img12,
        title:"MSI prestige 15",
        description:"$1550"
    },
]

const casePc=[
    {
        id: 1,
        img: Imgcase1,
        title:"Macbook M2",
        description:"$1499"
    },
    {
        id: 2,
        img: Imgcase2,
        title:"Macbook M1",
        description:"$1299"
    },
    {
        id: 3,
        img: Imgcase3,
        title:"Dell XSP",
        description:"$1200"
    },
    {
        id: 4,
        img: Imgcase4,
        title:"MSI prestige 15",
        description:"$1550"
    },
]
const Categories = () => {
  return (
    <div>
        <Navbar/>
        <div>
        {/* monitor */}
      <div className="container ">
        {/* header sestion */}
        <div className="text-left mb-5 max-w-[600px] mx-8 py-4">
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Monitor</h1>
            
        </div>
        {/* body sestion */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center "
        >
            {ProductsData.map((data)=>(
                <div
                data-aos="zoom-out"
                className="rounded-2xl bg-gray-100  hover:bg-black/80  hover:text-white relative shadow-xl duration-300 group max-w-[400px] w-[180px] h-[250px]"
                >
                    {/* image sestion */}
                    <div className="h-[100px]" >
                        <img src={data.img}  
                        className=" max-w-[180px] block mx-auto transform -translate-y-12 group-hover:scale-110 duration-300 drop-shadow-md "
                        />
                    </div>
                    {/* detail sestion */}
                    <div className="p-4 text-center">
                        {/* star rating */}
                        {/* <div className="w-full flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        </div> */}
                        <h1
                        className="text-xl font-bold group-hover:text-white"
                        >{data.title}</h1>
                        <p
                        className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2"
                        >{data.description}</p>
                        <button
                            className="bg-black/80 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-black/90"
                            // onClick={handleOrderPopup}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
      {/* // labtop */}
      <div className="container ">
        {/* header sestion */}
        <div className="text-left mb-5 max-w-[600px] mx-8 py-4">
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Labtop</h1>
            
        </div>
        {/* body sestion */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center "
        >
            {labtop.map((data)=>(
                <div
                data-aos="zoom-out"
                className="rounded-2xl bg-gray-100  hover:bg-black/80  hover:text-white relative shadow-xl duration-300 group max-w-[400px] w-[180px] h-[250px]"
                >
                    {/* image sestion */}
                    <div className="h-[100px]" >
                        <img src={data.img}  
                        className=" max-w-[180px] block mx-auto transform -translate-y-12 group-hover:scale-110 duration-300 drop-shadow-md "
                        />
                    </div>
                    {/* detail sestion */}
                    <div className="p-4 text-center">
                        {/* star rating */}
                        <div className="w-full flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        </div>
                        <h1
                        className="text-xl font-bold group-hover:text-white"
                        >{data.title}</h1>
                        <p
                        className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2"
                        >{data.description}</p>
                        <button
                            className="bg-black/80 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-black/90"
                            // onClick={handleOrderPopup}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
      {/* // Case */}
      <div className="container ">
        {/* header sestion */}
        <div className="text-left mb-5 max-w-[600px] mx-8 py-4">
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Case</h1>
            
        </div>
        {/* body sestion */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center "
        >
            {casePc.map((data)=>(
                <div
                data-aos="zoom-out"
                className="rounded-2xl bg-gray-100  hover:bg-black/80  hover:text-white relative shadow-xl duration-300 group max-w-[400px] w-[180px] h-[250px]"
                >
                    {/* image sestion */}
                    <div className="h-[100px]" >
                        <img src={data.img}  
                        className=" max-w-[180px] block mx-auto transform -translate-y-12 group-hover:scale-110 duration-300 drop-shadow-md "
                        />
                    </div>
                    {/* detail sestion */}
                    <div className="p-4 text-center">
                        
                        <h1
                        className="text-xl font-bold group-hover:text-white"
                        >{data.title}</h1>
                        <p
                        className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2"
                        >{data.description}</p>
                        <button
                            className="bg-black/80 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-black/90"
                            // onClick={handleOrderPopup}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
      {/* space */}
      <div className="py-5">
      </div>
    </div>
    </div>
  )
}

export default Categories
