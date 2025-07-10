import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PodcastCard from '../components/PodcastCard/PodcastCard';

const AllPodcast = () => {

    const[Podcasts,setPodcasts] = useState();

    try {

        useEffect(()=>{

            const fetch = async()=>{
                const res = await axios.get('http://localhost:2001/api/v1/all-podcasts',{withCredentials:true});
                // const res = await axios.get('https://podquest.onrender.com/api/v1/all-podcasts',{withCredentials : true})
                setPodcasts(res.data.data);
            };

            fetch();
        },[])
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div>
        <div className='w-full bg-blue-50 px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
            {Podcasts && Podcasts.map((items,i)=><div key={i}><PodcastCard data={items}/></div>)}
        </div>
    </div>
  )
}

export default AllPodcast