import React from 'react'
import Navbar from '../Navbar/Navbar'
import Img1 from "../../assets/top_sale/computer1.png"
import Img2 from "../../assets/top_sale/computer2.png"
import Img3 from "../../assets/top_sale/computer3.png"
import Img4 from "../../assets/top_sale/computer4.png"
import Img5 from "../../assets/top_sale/computer5.png"
import Img6 from "../../assets/top_sale/computer6.png"
import Img7 from "../../assets/top_sale/computer7.png"
import Img8 from "../../assets/top_sale/computer8.png"
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Asus ProArt",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img5,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
    {
      id: 6,
      img: Img6,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
    {
      id: 7,
      img: Img7,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
    {
      id: 8,
      img: Img8,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
    
  ];

const Products = () => {
  return (
    <div>
        {/* Navbar */}
    <Navbar/>
      <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm text-orange-300">Top Selling Products </p>
            <h1 className="text-3xl font-bold ">Products</h1>
            <p className="text-xs text-gray-500">Hurry Up all you guys!!</p>
      </div>
      {/* Body section */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 place-items-center gap-5 flex-auto">
                {/* card section */}
                {ProductsData.map((data)=>(
                    <div>
                        <div>
                        <img src={data.img} alt=""
                        className="h-[250px] w-[600px] object-cover rounded-md "
                        />
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mt-50% mb-12%">{data.title}</h3>
                        </div>
                    </div>
                    
                ))},
                
            </div>
        </div>
      </div>
      </div>


    </div>
  )
}

export default Products
