import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
import { IoChevronDown } from "react-icons/io5";
import { MdPictureAsPdf } from "react-icons/md";
import ImageSlider from '../components/productDetailPage/ImageSlider'; 4
import { data } from "../data/featuredProductsData.js"


const ProductDetail = () => {
    const { category, slug } = useParams();
    console.log(category, slug)

    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    const handleClick = () => {
        setOpen((prev) => !prev)
    }
    console.log(product)
    useEffect(() => {
        const product = data.find((item) => item.slug == slug);
        setProduct(product)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className='h-5 w-5 rounded-[50%] border border-t-[#1c9d36] border-white animate-spin'>

                </div>
            </div>

        )
    }
    return (
        <div className='min-h-screen bg-linear-to-br from-[#e9f7ef] px-3'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-6'>
                    <div className='order-2 md:order-1'>
                        <div className='flex gap-1 items-center flex-wrap '>
                            <Link to="/" className='text-[#1c9d36] text-sm font-semibold'>Home</Link>
                            <span className='text-gray-600 text-sm font-semibold'><FaAngleRight /></span>
                            <Link to="/products" className='text-[#1c9d36] text-sm font-semibold'>Products</Link>
                            <span className='text-gray-600 text-sm font-semibold'><FaAngleRight /></span>
                            <Link to="/products" className='text-[#1c9d36] text-sm font-semibold'>{product.category}</Link>
                            <span className='text-gray-600 text-sm font-semibold'><FaAngleRight /></span>
                            <span className='text-gray-600 text-sm font-semibold'>{product.name}</span>
                        </div>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold mt-8'>{product.name}</h1>
                        <p className='text-sm md:text-lg text-gray-600 py-5'>{product.desc}</p>
                        <div className='mb-5'>
                            {
                                product?.keyHighLights?.map((item, i) => {
                                    return (
                                        <div key={i} className='flex gap-2 items-center mb-3'>
                                            <div className='rounded-[50%] border border-[#1c9d36] text-sm w-6 h-6 flex 
                            justify-center items-center'>
                                                <TiTick />
                                            </div>
                                            <p className='text-sm md:text-md text-gray-600'>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button className='text-sm md:text-lg text-white bg-[#1c9d36] px-8 py-1 rounded'>Enquiry Now</button>
                        </div>
                    </div>
                    <div className='order-1 md:order-2 h-full md:shadow flex justify-center md:block'>
                        <ImageSlider data={product.images} />
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center mt-10 bg-[#eeffff] shadow p-2 md:p-5'>
                    {
                        product?.keyInformation?.map((item, i) => {
                            return (
                                <div key={i} className='flex gap-4 items-center'>
                                    <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                                        <FaRegStar className='stroke-[10.5]' />
                                    </div>
                                    <div>
                                        <h3 className='text-md md:text-lg lg:text-xl font-semibold mb-1 capitalize'>{item[0]}</h3>
                                        <p className=' text-sm text-gray-600 font-semibold capitalize'>{item[1]}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className='flex gap-4 items-center'>
                        <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                            <GrCube />
                        </div>
                        <div>
                            <h3 className='text-md md:text-lg lg:text-xl font-semibold mb-1'>Product Type</h3>
                            <p className='text-sm text-gray-600 font-semibold'>Bronchial Blocker</p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                            <FaRegStar className='stroke-[10.5]' />
                        </div>
                        <div>
                            <h3 className='text-md md:text-lg lg:text-xl font-semibold mb-1'>Key Features</h3>
                            <p className='text-sm text-gray-600 font-semibold'>High-Torque Control Sharf</p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                            <GrStepsOption className='stroke-[10.5]' />
                        </div>
                        <div>
                            <h3 className='text-md md:text-lg lg:text-xl font-semibold mb-1'>Available Options</h3>
                            <p className='text-sm text-gray-600 font-semibold'>One-Lung Ventilation</p>
                        </div>
                    </div> */}
                </div>

                <div className='mt-10'>
                    <h4 className='text-lg md:text-xl lg:text-2xl font-semibold mb-6'>Key Benefits</h4>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {
                            product?.keyBenefits?.map((item, i) => {
                                return (
                                    <div key={i} className='flex flex-col gap-3 justify-center bg-[#eeffff] shadow py-6 text-center'>
                                        {/* <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                                            <FaRegThumbsUp />
                                        </div> */}
                                        <div className='flex justify-center'>
                                            <h3 className='text-md md:text-lg lg:text-xl font-semibold mb-1 capitalize'>{item[0]}</h3>
                                        </div>
                                        <div className='flex justify-center'>
                                            <p className='w-[80%] text-sm text-gray-600 font-semibold capitalize'>{item[1]}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className='flex flex-col gap-3 justify-center items-center bg-[#eeffff] shadow py-6 text-center'>
                            <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                                <GiHamburgerMenu />
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='text-md md:text-lg lg:text-xl font-semibold mb-1'>Flexible Control</h3>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-[80%] text-sm text-gray-600 font-semibold'>Polyurethane-covered wire
                                    mesh blocker designed to
                                    provide control during
                                    placement.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 justify-center items-center bg-[#eeffff] shadow py-6 text-center'>
                            <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                                <LuTestTubeDiagonal />
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='w-[80%] text-md md:text-lg lg:text-xl font-semibold mb-1'>Standard ETTube Placement
                                </h3>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-[80%] text-sm text-gray-600 font-semibold'>Can be placed through a standard endotracheal tube
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 justify-center items-center bg-[#eeffff] shadow py-6 text-center'>
                            <div className='text-2xl lg:text-4xl text-[#1c9d36]'>
                                <MdOutlineConnectWithoutContact />
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='text-md md:text-lg lg:text-xl font-semibold mb-1'>Swivel Connector</h3>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-[80%] text-sm text-gray-600 font-semibold'>Unique swivel connector designed for easy connection to the anaesthesia circuit</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className='mt-10 shadow border border-[#eee] px-4 py-4'>
                    <h4 className='text-lg md:text-xl lg:text-2xl font-semibold mb-4'>Product Details</h4>
                    <p className='text-sm text-gray-600 w-full md:w-[80%] lg:w-[70%]'>{product?.shortDetail}</p>
                    <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className='text-sm text-gray-600 w-full md:w-[80%] lg:w-[70%] mt-3'>
                            {product?.completeDetail}
                        </p>
                    </div>
                    <button onClick={handleClick} className='flex items-center gap-3 text-[#1c9d36] mt-3 font-semibold'>{open ? "Hide Detail" : "Show More Detail"}
                        <IoChevronDown className={`transition-all duration-300 ${open ? "rotate-180" : ""}`} />
                    </button>
                </div>

                <div className='mt-10'>
                    <h4 className='text-lg md:text-xl lg:text-2xl font-semibold mb-4'>Specifications</h4>
                    <div className='overflow-x-auto'>

                        <table className='w-full min-w-175 border border-[#eee] shadow text-sm'>
                            <thead className='border border-[#eee] bg-[#eeffff]'>
                                <tr>
                                    {
                                        product?.specificationsHead?.map((item, i) => {
                                            return (
                                                <th key={i} className='border border-[#eee] py-3'>{item}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product?.specificationsData?.map((item, i) => {
                                        return (
                                            <tr key={i} className='border border-[#eee] py-3 text-center text-gray-600'>
                                                {
                                                    item.map((innerItem, i) => {
                                                        return (
                                                            <td key={i} className='border border-[#eee] py-2'>{innerItem}</td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='my-10 shadow bg-[#eeefff] py-5 px-10'>
                    <div className='flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center'>
                        <div className='flex items-center gap-10 w-full md:w-[50%]'>
                            <div className='text-5xl text-red-500'>
                                <MdPictureAsPdf />
                            </div>
                            <div>
                                <h5 className='text-xl mb-2'>Product Brochure</h5>
                                <p>Download the brochure for complete product information, product features, ordering specifications, and technical
                                    details.</p>
                            </div>
                        </div>
                        <div className='w-[50%] text-center'>
                            <button className='rounded border border-[#1c9d36] text-[#1c9d36] text-lg px-12 py-2
                            hover:bg-[#1c9d36] hover:text-white'>Download</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail