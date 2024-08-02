import React from 'react'
import BannerImg from '../../assets/Banner/Banner1.jpg'
import { MdSmartphone } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { MdKeyboard } from 'react-icons/md';
import { MdCloud } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="min-h-[500px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* image sestion */}
            <div data-aos="zoom-out">
                <img src={BannerImg} alt=""
                className="max-w-[400px] h-full w-full mx-auto drop-shadow-[-10px_10px_12px_rgba_(0,0,0,1)] object-cover "
                />
            </div>
            {/* text sestion */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
              <h1 className="text-3xl sm:text-4xl font-bold">
                All Products Sale upto 10% off
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, esse.
              </p>
              <div>
                <div data-aso="fade-up" className="flex items-center gap-4 py-1">
                  <MdSmartphone
                  className=" text-4xl h-12 w-12 shadow-sm p-4 rounded-full  dark:bg-orange-400 "
                  />
                  <p>Quality Products</p>
                </div>
                <div data-aso="fade-up" className="flex items-center gap-4 py-1 ">
                  <MdCloud
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  dark:bg-blue-300"
                  />
                  <p>Online Product</p>
                </div>
                <div data-aso="fade-up" className="flex items-center gap-4 py-1 ">
                  <MdComputer
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  dark:bg-purple-400 "
                  />
                  <p className="py-3">Best Performent</p>
                </div>
                <div data-aso="fade-up" className="flex items-center gap-4 py-1 ">
                  <MdKeyboard
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  dark:bg-green-300 
                  "
                  />
                  <p className="py-3">First Hand</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
