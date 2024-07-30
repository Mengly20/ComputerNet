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
      title: "Macbook M2",
      rating: 4.8,
      color: "black",
      price: "$1499",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Macbook M2",
      rating: 4.5,
      color: "gray",
      price: "$1499",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Macbook M1",
      rating: 4.7,
      color: "gray",
      price: "$1299",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "MSI Katana 15",
      rating: 4.4,
      color: "black",
      price: "$1200",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img5,
      title: "MSI prestige 15",
      rating: 4.5,
      color: "black",
      price: "$1550",
      aosDelay: "800",
    },
    {
      id: 6,
      img: Img6,
      title: "Dell XSP",
      rating: 4.5,
      color: "gray",
      price: "$1200",
      aosDelay: "800",
    },
    {
      id: 7,
      img: Img7,
      title: "Dell 14.6 FCES",
      rating: 4.5,
      color: "gray",
      price: "$1300",
      aosDelay: "800",
    },
    {
      id: 8,
      img: Img8,
      title: "Macbook M3",
      rating: 4.5,
      color: "Pink",
      price: "$1899",
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
            <p data-aos="fade-up"  className="text-sm text-orange-300">Top Selling Products </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-500">Hurry Up all you guys!!</p>
      </div>
      {/* Body section */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 place-items-center gap-5 flex-auto">
                {/* card section */}
                {ProductsData.map((data)=>(
                    <div 
                    data-aos="fade-up"
                    
                    data-aos-delay={data.aosDelay}
                    key={data.id} 
                    className="space-y-3" >
                        <div>
                        <img src={data.img} alt=""
                        className="h-[350px] w-[600px] object-cover rounded-md "
                        />
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mt-50% mb-12%">{data.title}</h3>
                            <p className="text-sm text-gray-600" >{data.color}</p>
                            <p className="text-sm text-gray-600" >{data.price}</p>
                            <div className="flex items-center gap-2">
                              <FaStar className="text-yellow-400" />
                              <span>{data.rating}</span>
                            </div>
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
