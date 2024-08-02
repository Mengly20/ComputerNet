import React from 'react'
import footerLogo from"../../assets/logo.png"
import Banner from "../../assets/website/footer4.jpg"
import {FaFacebook,FaInstagram,FaLinkedin,FaLocationArrow, FaMobileAlt} from "react-icons/fa";
const BannerImg = {
    backgroundImage:`url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundsize: "cover",
    height:"100%",
    width:"100%",
};
const FooterLinks =[
    {
        name: "Home",
        link:"/Home"
      },
      {
        name: "Product",
        link: "/Product"
      },
      {
        name:"Categories",
        link: "/Categorise"
      },
      {
        name:"Brand",
        link:"/Brand"
      }
]
const information=[
  {
    name:"Background",
    link:"/BackGround"
  },
  {
    name:"Detail",
    link:"/Detail"
  },
  {
    name:"More",
    link:"/More"
  },
  {
    name:"Help",
    link:"/Help"
  }
]
const Footer = () => {
  return (
    <div style={BannerImg} 
    className="text-white ">
      <div className="container">
        <div data-aos="zoom-out" className="grid md:grid-cols-3 pb-54 pt-5">
        {/* company detail */}
            <div className="py-8 px-4">
                <h1
                className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"
                > <img src={footerLogo} alt="" 
                className="max-w-[60px]"
                /> ComputerNet
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aut, sed beatae incidunt iure at.</p>
            </div>
        {/* Footer Link */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1
                  className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3"
                  >Links</h1>
                  <ul className="flex flex-col gap-3">
                    {
                      FooterLinks.map((link)=>(
                        <li 
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 "
                        key={link.name}
                        > 
                        <span>{link.name}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              {/* information link */}
              <div>
                <div className="py-8 px-4">
                  <h1
                  className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3"
                  >News</h1>
                  <ul className="flex flex-col gap-3">
                    {
                      information.map((link)=>(
                        <li 
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 "
                        key={link.name}
                        > 
                        <span>{link.name}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              {/* Social link */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl"/>
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl"/>
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl"/>
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow/>
                    <p>Phnome Penh, Cambodia</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt/>
                    <p>+885 66727374</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
