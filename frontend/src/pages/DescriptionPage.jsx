import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DescriptionPage = () => {

  const[Podcasts,setPodcasts] = useState([]);

  const { id } = useParams();

  useEffect(()=>{

    const fetch = async()=>{
      try {

        const res = await axios.get(`http://localhost:2001/api/v1/get-podcasts/${id}`,{withCredentials:true});
        
        setPodcasts(res.data.data);
        
      } catch (error) {
        console.log(error)
      }
      
    };

    fetch();
  },[])

  // console.log(Podcasts.category.categoryName)


  return (
    <div className='px-4 py-4 lg:px-12 h-screen bg-blue-50 flex flex-col md:flex-row items-center justify-between gap-4'>
      {Podcasts && (<>
      
      <div className='w-2/6 flex items-center justify-center md:justify-start md:items-start '>
        
        <img
           src={`http://localhost:2001/${Podcasts.frontImage}`}
          alt="/" 
          className='rounded w-full h-[50vh] object-cover ' 
        />
        

      </div>

      <div className='w-4/6'>

        <div className='text-4xl font-semibold'>{Podcasts.title}</div>

        <h4 className='mt-4'>{Podcasts.description}</h4>

         <div className='mt-5 w-fit p-2 bg-orange-100 text-orange-700 border border-orange-700 rounded-full px-4 py-2 text-center'>
              <h1 className='text-2xl'>{Podcasts?.category?.categoryName}</h1>
          </div>
      </div>
      
      </>
    
      )}
    </div>
  )
}

export default DescriptionPage