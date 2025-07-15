
import React, { useEffect, useState } from 'react';
import { authActions } from '../../store/auth.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Header = () => {
    const [userData, setUserData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.get("http://localhost:2001/api/v1/logout", { withCredentials: true });
        dispatch(authActions.logout());
        navigate("/");
    };

    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await axios.get("http://localhost:2001/api/v1/user-details", { withCredentials: true });
            setUserData(res.data.user);
        };

        fetchUserDetails();
    }, []);

    return (
        <>
            {userData && (
                <div className="bg-gradient-to-br from-indigo-300 to-indigo-200 border border-indigo-400 rounded-xl shadow-md py-6 px-6 flex flex-col md:flex-row items-center justify-between">
                    
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <p className="text-indigo-500 text-lg">Profile</p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
                            {userData.username}
                        </h1>
                        <p className="text-indigo-600 mt-1 text-lg">
                            {userData.email}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <button 
                            onClick={handleLogout} 
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-700 transition-all duration-300"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;


