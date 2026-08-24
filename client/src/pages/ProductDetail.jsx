import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaGgCircle } from "react-icons/fa";
import { GrCube } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { GrStepsOption } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuTestTubeDiagonal } from "react-icons/lu";
import { MdOutlineConnectWithoutContact } from "react-icons/md";


const ProductDetail = () => {
    return (
        <div className='min-h-screen bg-linear-to-br from-[#e9f7ef]'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 items-center gap-10 pt-6'>
                    <div>
                        <div className='flex gap-1 items-center'>
                            <Link to="/" className='text-[#1c9d36] text-sm font-semibold'>Home</Link>
                            <span className='text-gray-600 text-sm font-semibold'><FaAngleRight /></span>
                            <Link to="/products" className='text-[#1c9d36] text-sm font-semibold'>Products</Link>
                            <span className='text-gray-600 text-sm font-semibold'><FaAngleRight /></span>
                            <Link to="/products" className='text-[#1c9d36] text-sm font-semibold'>Anaesthesia</Link>
                            <span className='text-gray-600 text-sm font-semibold'><FaAngleRight /></span>
                            <span className='text-gray-600 text-sm font-semibold'>Uniblocker</span>
                        </div>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold mt-8'>Uniblocker</h1>
                        <p className='text-lg text-gray-600 py-5'>Incorporates a steel mesh polyurethane covered
                            bronchial blocker shaft along with industry-leading
                            designs to simplify bronchial blocker placement.</p>
                        <div className='mb-5'>
                            <div className='flex gap-2 items-center mb-3'>
                                <div className='rounded-[50%] border border-[#1c9d36] text-sm w-6 h-6 flex 
                            justify-center items-center'>
                                    <TiTick />
                                </div>
                                <p className='text-md text-gray-600'>Simple and intuitiveplacement</p>
                            </div>
                            <div className='flex gap-2 items-center mb-3'>
                                <div className='rounded-[50%] border border-[#1c9d36] text-sm w-6 h-6 flex 
                            justify-center items-center'>
                                    <TiTick />
                                </div>
                                <p className='text-md text-gray-600'>Canbeplaced througha standard endotracheal tube</p>
                            </div>
                            <div className='flex gap-2 items-center mb-3'>
                                <div className='rounded-[50%] border border-[#1c9d36] text-sm w-6 h-6 flex 
                            justify-center items-center'>
                                    <TiTick />
                                </div>
                                <p className='text-md text-gray-600'>Flexible high-torqueblocker shaft</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='rounded-[50%] border border-[#1c9d36] text-sm w-6 h-6 flex 
                            justify-center items-center'>
                                    <TiTick />
                                </div>
                                <p className='text-md text-gray-600'>Unique swivelbronch adapter</p>
                            </div>
                        </div>
                        <div>
                            <button className='text-white bg-[#1c9d36] px-8 py-1 rounded text-lg'>Enquiry Now</button>
                        </div>
                    </div>
                    <div className='h-full shadow'>
                        <img src="/assets/product-detail-images/uniblocker-2.jpeg"
                            className='w-full h-120' />
                    </div>
                </div>
                <div className='flex gap-16 justify-center mt-10 bg-[#efefef] p-5'>
                    <div className='flex gap-4 items-center'>
                        <div className='text-4xl text-[#1c9d36]'>
                            <FaGgCircle className='stroke-[10.5]' />
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl lg:text-xl font-semibold mb-1'>Application</h3>
                            <p className='text-sm text-gray-600 font-semibold'>One-Lung Ventilation</p>
                        </div>
                    </div>
                    <div className='w-0.5 bg-gray-400'>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='text-3xl text-[#1c9d36]'>
                            <GrCube />
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl lg:text-xl font-semibold mb-1'>Product Type</h3>
                            <p className='text-sm text-gray-600 font-semibold'>Bronchial Blocker</p>
                        </div>
                    </div>
                    <div className='w-0.5 bg-gray-400'>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='text-3xl text-[#1c9d36]'>
                            <FaRegStar className='stroke-[10.5]' />
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl lg:text-xl font-semibold mb-1'>Key Features</h3>
                            <p className='text-sm text-gray-600 font-semibold'>High-Torque Control Sharf</p>
                        </div>
                    </div>
                    <div className='w-0.5 bg-gray-400'>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='text-3xl text-[#1c9d36]'>
                            <GrStepsOption className='stroke-[10.5]' />
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl lg:text-xl font-semibold mb-1'>Available Options</h3>
                            <p className='text-sm text-gray-600 font-semibold'>One-Lung Ventilation</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h4 className='text-lg md:text-xl lg:text-2xl font-semibold mb-6'>Key Benefits</h4>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='flex flex-col gap-3 items-center bg-[#efefef] py-6 text-center'>
                            <div className='text-3xl text-[#1c9d36]'>
                                <FaRegThumbsUp />
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='text-lg md:text-xl lg:text-xl font-semibold mb-1'>Simple Placement</h3>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-[80%] text-sm text-gray-600 font-semibold'>Designed to support simple placement for total or segmental bronchial blockade</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center bg-[#efefef] py-6 text-center'>
                            <div className='text-3xl text-[#1c9d36]'>
                                <GiHamburgerMenu />
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='text-lg md:text-xl lg:text-xl font-semibold mb-1'>Flexible Control</h3>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-[80%] text-sm text-gray-600 font-semibold'>Polyurethane-covered wire
                                    mesh blocker designed to
                                    provide control during
                                    placement.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center bg-[#efefef] py-6 text-center'>
                            <div className='text-3xl text-[#1c9d36]'>
                                <LuTestTubeDiagonal />
                            </div>
                            <div className='flex justify-center'>
                                <h3 className=' w-[80%] text-lg md:text-xl lg:text-xl font-semibold mb-1'>Standard ETTube Placement
                                </h3>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-[80%] text-sm text-gray-600 font-semibold'>Can be placed through a standard endotracheal tube
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center bg-[#efefef] py-6 text-center'>
                            <div className='text-3xl text-[#1c9d36]'>
                                <MdOutlineConnectWithoutContact />
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='text-lg md:text-xl lg:text-xl font-semibold mb-1'>Swivel Connector</h3>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-[80%] text-sm text-gray-600 font-semibold'>Unique swivel connector designed for easy connection to the anaesthesia circuit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail