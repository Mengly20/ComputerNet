import React from 'react'
import Image1 from "../../assets/hero/mac.png";
import Image2 from "../../assets/hero/mac2.png";
import Image3 from "../../assets/hero/mac3.png";
import Image4 from "../../assets/hero/mac4.png";
import Slider from "react-slick";

const ImageList=[{
    id:1,
    img: Image1,
    title: "Upto 10% off on Macbook",
    description:"MacBooks are renowned for their longevity, security features, and the ecosystem that allows seamless integration with other Apple products.",
},
{
    id:2,
    img: Image2,
    title: "Upto 10% off Limited",
    description:"MacBook Pro M2",
},
{
    id:3,
    img: Image3,
    title: "Upto 20% off on Monitor",
    description:"Monitor 24 TRUE PIXEL Display",
},
{
    id:2,
    img: Image4,
    title: "Hurry Up!!!",
    description:"Limited",
},

]

const Hero = () => {
 
    var settings ={
        dots: false,
        arrows: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus:true,
        

    };


  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[700px] bg-gray-50 flex justify-center items-center duration-200">
        {/* background pattern*/}
      <div className="h-[700px] w-[700px] bg-bgprimary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 mix-blend-darken">
        
      </div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings} >
            {ImageList.map((data)=>(
                <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* content section */}
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center  sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 
                        data-aos="zoom-out"
                        data-aos-once="true"
                        data-aos-duration="500"
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold ">{data.title} </h1>
                        <p   
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-sm">{data.description}</p>
                        <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                        >
                            <button className="bg-gradient-to-r from-primary to-bglogin/45 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full "
                            >Order Now</button>
                        </div>
                    </div>
                    {/* iamge section */}
                    <div className="order-1 sm:order-2">
                        <div
                        data-aos="zoom-in"
                        data-aos-once="true"
                        className="relative z-10"
                        >
                            <img src={data.img} alt="" 
                            className="w-[500px] h-[200px] sm:h-[370px] sm:w-[450px] sm:scale-100 lg:scale-120 object-contain mx-auto"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            ))}
        
        </Slider>
        
      </div>
    </div>
  )
}

export default Hero
