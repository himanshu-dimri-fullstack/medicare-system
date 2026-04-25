import React from 'react'
import HomeSlider from '../components/HomeSlider'
import { FaPhone } from "react-icons/fa6";

const HomePage = () => {
    return (
        <div>
            <HomeSlider />
            <div className='grid grid-cols-3 -mt-1.5'>
                <div className='bg-[#1c9d36] flex justify-center py-3'>
                    <div className='w-[80%]'>
                        <div className='flex justify-center'>
                            <FaPhone className='text-3xl text-white' />
                        </div>
                        <div>
                            <h3 className='text-3xl text-center font-semibold text-white pt-3'>24/7 Customer Care</h3>
                        </div>

                        <div className='flex justify-center pt-3'>
                            <div className='w-[70%] text-center text-xl text-white'>
                                <span>Dedicated Customer
                                    Provide Best Care And Service</span>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='bg-white flex justify-center py-3'>
                    <div className='w-[80%]'>
                        <div className='flex justify-center'>
                            <FaPhone className='text-3xl text-black' />
                        </div>
                        <div>
                            <h3 className='text-3xl text-center font-semibold text-black pt-3'>24/7 Customer Care</h3>
                        </div>

                        <div className='flex justify-center pt-3'>
                            <div className='w-[70%] text-center text-xl text-black'>
                                <span>Dedicated Customer
                                    Provide Best Care And Service</span>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='bg-[#1c9d36] flex justify-center py-3'>
                    <div className='w-[80%]'>
                        <div className='flex justify-center'>
                            <FaPhone className='text-3xl text-white' />
                        </div>
                        <div>
                            <h3 className='text-3xl text-center font-semibold text-white pt-3'>24/7 Customer Care</h3>
                        </div>

                        <div className='flex justify-center pt-3'>
                            <div className='w-[70%] text-center text-xl text-white'>
                                <span>Dedicated Customer
                                    Provide Best Care And Service</span>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomePage