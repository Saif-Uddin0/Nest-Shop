import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaHeart, FaShoppingCart, FaUser, FaBalanceScale } from "react-icons/fa";
import navImg from '../../assets/logo.svg'



const LowHeader = () => {
    return (
        <div>
            <div className="border-b bg-white py-3">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                    {/* Logo Section */}
                    <div className="">
                        <img
                            src={navImg}
                            alt="Nest Logo"
                            className="w-30 h-30"
                        />
                        
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center border border-green-300 rounded-md w-full md:w-[500px]">
                        <select className="bg-white border-r border-green-300 text-gray-700 px-2 py-2 text-sm focus:outline-none">
                            <option>All Categories</option>
                            <option>Fruits</option>
                            <option>Vegetables</option>
                            <option>Dairy</option>
                            <option>Snacks</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search for items..."
                            className="flex-grow px-3 py-2 focus:outline-none text-sm"
                        />
                        <button className="px-3 text-green-600">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-5">
                        {/* Location Dropdown */}
                        <div className="flex items-center border rounded-md px-3 py-2 text-sm text-gray-700 hover:shadow-sm cursor-pointer">
                            <FaMapMarkerAlt className="text-green-600 mr-2" />
                            <span>Your Location</span>
                            <select className="bg-transparent border-none focus:outline-none cursor-pointer text-gray-700">
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Khulna</option>
                            </select>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-5 text-gray-700 text-sm">
                            {/* Compare */}
                            <div className="relative flex flex-col items-center cursor-pointer hover:text-green-600">
                                <FaBalanceScale size={18} />
                                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">3</span>
                                <p>Compare</p>
                            </div>

                            {/* Wishlist */}
                            <div className="relative flex flex-col items-center cursor-pointer hover:text-green-600">
                                <FaHeart size={18} />
                                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">6</span>
                                <p>Wishlist</p>
                            </div>

                            {/* Cart */}
                            <div className="relative flex flex-col items-center cursor-pointer hover:text-green-600">
                                <FaShoppingCart size={18} />
                                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">2</span>
                                <p>Cart</p>
                            </div>

                            {/* Account */}
                            <div className="flex flex-col items-center cursor-pointer hover:text-green-600">
                                <FaUser size={18} />
                                <p>Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LowHeader;