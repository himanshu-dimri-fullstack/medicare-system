import React from 'react'

const DashboardCard = () => {
    const data = [
        {
            id: 1,
            head: "Total Category",
            value: 9
        },
        {
            id: 2,
            head: "Total Subcategory",
            value: 30
        },
        {
            id: 3,
            head: "Total Products",
            value: 90
        }
    ]
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className='bg-white rounded-2xl hover:bg-[#1c9d36] hover:text-white hover:shadow shadow-xl flex flex-col items-center gap-3 py-5'>
                            <h2 className='text-lg font-semibold'>{item.head}</h2>
                            <p className='text-lg'>{item.value}</p>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default DashboardCard