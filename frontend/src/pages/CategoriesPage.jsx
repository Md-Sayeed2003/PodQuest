
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PodcastCard from "../components/PodcastCard/PodcastCard.jsx";

const CategoriesPage = () => {
  const { cat } = useParams();
  const [Podcasts, setPodcasts] = useState([]); 

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await axios.get(`https://podquest.onrender.com/api/v1/category/${cat}`, {
          withCredentials: true,
        });
        setPodcasts(res.data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcasts();
  }, [cat]); 

  return (
    <div className="px-4 bg-teal-100 py-4 lg:px-12">
      <h1 className="text-xl font-semibold">{cat}</h1>

      <div>
        <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Podcasts.length > 0 ? (
            Podcasts.map((items) => (
              <div key={items._id || items.title}>
                <PodcastCard data={items} />
              </div>
            ))
          ) : (
            <div className="text-3xl font-bold  flex items-center justify-center w-full h-full">
                No Podcast Found {" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
