
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import ErrorPage from './ErrorPage';

const Signup = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();

    const [Values, SetValues] = useState({
        username: "",
        email: "",
        password: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        SetValues({ ...Values, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:2001/api/v1/sign-up", Values);
            toast.success(res.data.message);
            navigate("/");
        } catch (err) {
            toast.error(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <>
            {isLoggedIn ? <ErrorPage /> : (
                <div className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300">
                    <ToastContainer position="top-center" autoClose={5000} />
                    <div className="w-4/6 md:w-3/6 lg:w-2/6 bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
                        <Link to="/" className="text-3xl font-bold text-teal-900 hover:text-teal-700 transition-all">
                            PodQuest
                        </Link>

                        <div className="mt-6 w-full">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold text-gray-700">Username</label>
                                <input
                                    type="text"
                                    className="mt-2 px-3 py-2 rounded-lg outline-none border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-300 transition-all"
                                    required
                                    placeholder="Enter your username"
                                    name="username"
                                    value={Values.username}
                                    onChange={change}
                                />
                            </div>

                            <div className="w-full flex flex-col mt-4">
                                <label className="font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="mt-2 px-3 py-2 rounded-lg outline-none border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-300 transition-all"
                                    required
                                    placeholder="Enter your email"
                                    name="email"
                                    value={Values.email}
                                    onChange={change}
                                />
                            </div>

                            <div className="w-full flex flex-col mt-4">
                                <label className="font-semibold text-gray-700">Password</label>
                                <input
                                    type="password"
                                    className="mt-2 px-3 py-2 rounded-lg outline-none border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-300 transition-all"
                                    required
                                    placeholder="Enter your password"
                                    name="password"
                                    value={Values.password}
                                    onChange={change}
                                />
                            </div>

                            <button
                                className="w-full mt-6 bg-teal-900 hover:bg-teal-700 text-white font-semibold text-lg rounded-lg py-2 shadow-md transition-all"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </button>

                            <p className="text-center text-gray-600 mt-4">
                                Already have an account?{" "}
                                <Link to="/login" className="font-semibold text-teal-800 hover:text-teal-600 transition-all">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Signup;
