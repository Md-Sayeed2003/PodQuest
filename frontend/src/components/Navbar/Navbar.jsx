
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//     const [MobileNav, setMobileNav] = useState(false);

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "Categories", path: "/categories" },
//         { name: "All Podcasts", path: "/all-podcasts" },
//     ];

//     return (
//         <>
//             <nav className="px-6 md:px-12 py-4 bg-teal-700 shadow-lg">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="flex items-center gap-4">
//                         <img 
//                             src="https://cdn-icons-png.flaticon.com/128/2368/2368447.png" 
//                             className="h-12" 
//                             alt="PodQuest" 
//                         />
//                         <Link to="/" className="text-4xl font-bold text-black hover:text-green-900 transition-all">
//                         PodQuest
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden lg:flex items-center space-x-6">
//                         {navLinks.map((item, i) => (
//                             <Link 
//                                 to={item.path} 
//                                 key={i} 
//                                 className="text-lg font-medium text-black hover:text-green-900 transition-all duration-300"
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* Login / Signup Buttons */}
//                     <div className="hidden lg:flex items-center space-x-4">
//                         {!isLoggedIn ? (
//                             <>
//                                 <Link 
//                                     className="px-6 py-2 border border-black text-black rounded-full hover:bg-teal-900 hover:text-white transition-all" 
//                                     to="/login"
//                                 >
//                                     Login
//                                 </Link>
//                                 <Link 
//                                     className="px-6 py-2 bg-white text-black rounded-full hover:bg-teal-900 hover:text-white transition-all" 
//                                     to="/signup"
//                                 >
//                                     Sign Up
//                                 </Link>
//                             </>
//                         ) : (
//                             <Link 
//                                 className="px-6 py-2 bg-white text-black rounded-full hover:bg-teal-900 hover:text-white transition-all" 
//                                 to="/profile"
//                             >
//                                 Profile
//                             </Link>
//                         )}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="lg:hidden">
//                         <button 
//                             className="text-4xl text-black"
//                             onClick={() => setMobileNav(true)}
//                         >
//                             <IoReorderThreeOutline />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation Menu */}
//                 <div className={`fixed inset-0 bg-blue-200 z-50 flex flex-col items-center justify-center transform transition-transform ${MobileNav ? "translate-x-0" : "translate-x-full"}`}>
//                     {/* Close Button */}
//                     <div className="absolute top-6 right-6 text-4xl text-black">
//                         <button onClick={() => setMobileNav(false)}>
//                             <RxCross2 />
//                         </button>
//                     </div>

//                     {/* Mobile Links */}
//                     <div className="flex flex-col items-center space-y-8 text-3xl">
//                         {navLinks.map((item, i) => (
//                             <Link 
//                                 to={item.path} 
//                                 key={i} 
//                                 className="text-black hover:text-teal-900 transition-all duration-300"
//                                 onClick={() => setMobileNav(false)}
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}

//                         {/* Mobile Login / Signup */}
//                         {!isLoggedIn ? (
//                             <>
//                                 <Link 
//                                     to="/login" 
//                                     className="px-6 py-3 border border-black text-black rounded-full hover:bg-teal-900 hover:text-white transition-all"
//                                     onClick={() => setMobileNav(false)}
//                                 >
//                                     Login
//                                 </Link>
//                                 <Link 
//                                     to="/signup" 
//                                     className="px-6 py-3 bg-white text-black rounded-full hover:bg-teal-900 hover:text-white transition-all"
//                                     onClick={() => setMobileNav(false)}
//                                 >
//                                     Sign Up
//                                 </Link>
//                             </>
//                         ) : (
//                             <Link 
//                                 to="/profile" 
//                                 className="px-6 py-3 bg-white text-black rounded-full hover:bg-teal-900 hover:text-white transition-all"
//                                 onClick={() => setMobileNav(false)}
//                             >
//                                 Profile
//                             </Link>
//                         )}
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [MobileNav, setMobileNav] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: "All Podcasts", path: "/all-podcasts" },
    ];

    return (
        <>
            <nav className="px-6 md:px-12 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/2368/2368447.png" 
                            className="h-12" 
                            alt="PodQuest" 
                        />
                        <Link to="/" className="text-4xl font-bold text-white hover:text-violet-200 transition-all">
                            PodQuest
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((item, i) => (
                            <Link 
                                to={item.path} 
                                key={i} 
                                className="text-lg font-medium text-white hover:text-indigo-200 transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Login / Signup Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {!isLoggedIn ? (
                            <>
                                <Link 
                                    className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-indigo-800 transition-all" 
                                    to="/login"
                                >
                                    Login
                                </Link>
                                <Link 
                                    className="px-6 py-2 bg-white text-indigo-800 font-semibold rounded-full hover:bg-indigo-100 transition-all" 
                                    to="/signup"
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <Link 
                                className="px-6 py-2 bg-white text-indigo-800 font-semibold rounded-full hover:bg-indigo-100 transition-all" 
                                to="/profile"
                            >
                                Profile
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button 
                            className="text-4xl text-white"
                            onClick={() => setMobileNav(true)}
                        >
                            <IoReorderThreeOutline />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`fixed inset-0 bg-gradient-to-br from-violet-100 to-indigo-200 z-50 flex flex-col items-center justify-center transform transition-transform ${MobileNav ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Close Button */}
                    <div className="absolute top-6 right-6 text-4xl text-indigo-800">
                        <button onClick={() => setMobileNav(false)}>
                            <RxCross2 />
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="flex flex-col items-center space-y-8 text-3xl">
                        {navLinks.map((item, i) => (
                            <Link 
                                to={item.path} 
                                key={i} 
                                className="text-indigo-900 hover:text-violet-700 transition-all duration-300"
                                onClick={() => setMobileNav(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile Login / Signup */}
                        {!isLoggedIn ? (
                            <>
                                <Link 
                                    to="/login" 
                                    className="px-6 py-3 border border-indigo-800 text-indigo-800 rounded-full hover:bg-indigo-800 hover:text-white transition-all"
                                    onClick={() => setMobileNav(false)}
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className="px-6 py-3 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 transition-all"
                                    onClick={() => setMobileNav(false)}
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <Link 
                                to="/profile" 
                                className="px-6 py-3 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 transition-all"
                                onClick={() => setMobileNav(false)}
                            >
                                Profile
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
