
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="bg-teal-100 px-12 h-screen flex flex-col items-center justify-center">
    
//       <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
//         <div className="lg:w-5/6 w-full text-center lg:text-left">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-900 leading-snug">
//             Your next favorite podcast starts here!
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-700">
//             Discover amazing stories, expert insights, and endless entertainment at your fingertips.
//           </p>
//         </div>

        
//         <div className="hidden lg:block w-2/3">
//           <img 
//             src="https://www.pinclipart.com/picdir/big/101-1019916_headphone-podcast-art-clipart.png" 
//             alt="Podcast Headphones"
//             className="w-full h-auto drop-shadow-lg"
//           />
//         </div>
//       </div>

      
//       <div className="mt-16 w-full flex flex-col lg:flex-row items-center justify-between">
//         <div className="flex flex-col items-center lg:items-start justify-center">
//           <p className="text-2xl md:text-3xl font-semibold text-gray-800 text-center lg:text-left">
//             Listen to the most popular podcasts on one platform —{" "}
//             <span className="text-teal-900 font-extrabold">PodQuest</span>
//           </p>

//           <Link
//             to="/login"
//             className="mt-6 lg:mt-8 px-6 py-3 bg-teal-900 text-white text-lg font-semibold rounded-full shadow-md hover:bg-teal-700 transition-all"
//           >
//             Login to Start Listening
//           </Link>
//         </div>
        
//         <div className="mt-8 lg:mt-0">
//           <p className="text-lg font-bold text-gray-700 text-center lg:text-right">
//             Our app offers more than <span className="text-teal-900 font-extrabold">2000+</span> podcasts for you 🎧
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-100 to-violet-200 px-12 h-screen flex flex-col items-center justify-center">
      
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-5/6 w-full text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-indigo-900 leading-snug">
            Your next favorite podcast starts here!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-800">
            Discover amazing stories, expert insights, and endless entertainment at your fingertips.
          </p>
        </div>

        <div className="hidden lg:block w-2/3">
          <img 
            src="https://www.pinclipart.com/picdir/big/101-1019916_headphone-podcast-art-clipart.png" 
            alt="Podcast Headphones"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-16 w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center lg:items-start justify-center">
          <p className="text-2xl md:text-3xl font-semibold text-slate-900 text-center lg:text-left">
            Listen to the most popular podcasts on one platform —{" "}
            <span className="text-violet-700 font-extrabold">PodQuest</span>
          </p>

          <Link
            to="/login"
            className="mt-6 lg:mt-8 px-6 py-3 bg-gradient-to-r from-violet-700 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-violet-800 hover:to-indigo-700 transition-all"
          >
            Login to Start Listening
          </Link>
        </div>

        <div className="mt-8 lg:mt-0">
          <p className="text-lg font-bold text-slate-800 text-center lg:text-right">
            Our app offers more than <span className="text-indigo-800 font-extrabold">2000+</span> podcasts for you 🎧
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;






