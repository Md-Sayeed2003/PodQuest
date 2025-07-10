import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    const cat =[
        {
            name : "Comedy",
            color : "bg-purple-200",
            to : "/categories/Comedy",
            img : "https://img.freepik.com/premium-vector/yellow-orange-white-comedy-3d-editable-text-effect-font-style_249611-25441.jpg"
        },

        {
            name : "Business",
            color : "bg-green-200",
            to : "/categories/Business",
            img : "https://img.freepik.com/free-vector/pitch-meeting-concept-illustration_114360-6000.jpg"
        },

        {
            name : "Education",
            color : "bg-blue-200",
            to : "/categories/Education",
            img : "https://img.freepik.com/free-vector/education-concept-illustration_114360-7908.jpg"
        },

        {
            name : "Hobbies",
            color : "bg-red-200",
            to : "/categories/Hobbies",
            img : "https://img.freepik.com/free-vector/organic-flat-design-about-me-concept_23-2148905881.jpg"
        },

        {
            name : "Government",
            color : "bg-zinc-200",
            to : "/categories/Government",
            img : "https://img.freepik.com/free-vector/india-general-election-government_24911-115861.jpg"
        },
    ]


  return (
    <div className='h-screen bg-blue-50 lg:h-[78vh]'>
        <div className='px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {cat.map((items,i)=>(
                <Link key={i} to={items.to} className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative  h-[22vh]  overflow-hidden  md:z-0 lg:z-0 -z-20`}>

                    <div>{items.name}</div>

                    <div className='w-[100%] flex items-center justify-end absolute -bottom-2 -right-2'>
                        <img src={items.img} alt={items.name} className='rounded rotate-12 h-[15vh] md:h-[17vh] lg:h-[18vh]' />
                    </div>
                
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Categories