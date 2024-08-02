import React from 'react'
import Img1 from "../../assets/computer/computer1.png"
import Img2 from "../../assets/computer/computer2.png"
import Img3 from "../../assets/computer/computer3.png"
import Img4 from "../../assets/computer/computer4.png"
import {FaStar} from "react-icons/fa"
const ProductsData=[
    {
        id: 1,
        img: Img1,
        title:"Macbook M2",
        description:"$1499"
    },
    {
        id: 2,
        img: Img2,
        title:"MSI Prestige 15",
        description:"$1550"
    },
    {
        id: 3,
        img: Img3,
        title:"Macbook M1",
        description:"$1299"
    },
    {
        id: 4,
        img: Img4,
        title:"Dell XSP",
        description:"$1200"
    }
]
const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header sestion */}
        <div className="text-left mb-14 max-w-[600px] mx-8 py-4">
            <p data-aos="fade-up"  className="text-sm text-orange-300">Top Recommand Products </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Best of Best Rate</h1>
            <p data-aos="fade-up" className="text-xs text-gray-500">Limited!!</p>
        </div>
        {/* body sestion */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center"
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
    </div>
  )
}
export default TopProducts
