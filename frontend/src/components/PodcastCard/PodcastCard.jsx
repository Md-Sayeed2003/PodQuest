import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { playerActions } from '../../store/player.js';

const PodcastCard = ({ data }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handlePlay = (e) => {
        if (isLoggedIn) {
            e.preventDefault();
            dispatch(playerActions.setDiv());
            dispatch(playerActions.changeImage(`http://localhost:2001/${data.frontImage}`));
            dispatch(playerActions.changeSong(`http://localhost:2001/${data.audioFile}`));
        }
    };

    return (
        <div className="p-4">
            <Link
                to={`/description/${data._id}`}
                className="border p-5 rounded-2xl flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
           
                <div className="relative">
                    <img
                        src={`http://localhost:2001/${data.frontImage}`}
                        alt="Podcast"
                        className="rounded-xl size-[30vh] object-cover w-full"
                    />
                </div>

              
                <div className="mt-3 text-xl font-bold text-gray-900">
                    {data.title.length > 20 ? data.title.slice(0, 20) + "..." : data.title}
                </div>

              
                <div className="mt-2 text-gray-600 text-sm">
                    {data.description.length > 70 ? data.description.slice(0, 70) + "..." : data.description}
                </div>

                
                <div className="mt-3 bg-blue-100 text-blue-700 border border-blue-700 rounded-full px-4 py-1 text-sm font-semibold w-fit">
                    {data.category.categoryName}
                </div>

         
                <div className="mt-4">
                    <Link
                        to={isLoggedIn ? "#" : "/signup"}
                        className="bg-blue-900 text-white px-5 py-2 rounded-lg mt-2 flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
                        onClick={handlePlay}
                    >
                        ▶ Play Now
                    </Link>
                </div>
            </Link>
        </div>
    );
};

export default PodcastCard;
