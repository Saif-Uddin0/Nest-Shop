import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { FaAngleDown, FaHeadset, FaThLarge } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router';

const BottomHeader = () => {
    return (
        <div className='border-b border-gray-200 sticky top-0 z-50 bg-white'>
            <div className='container mx-auto py-3 flex items-center justify-between'>
                <div className='flex items-center justify-between gap-7'>
                    <button className='btn bg-[#29A56C] text-white text-lg font-medium rounded-md'> <FaThLarge size={16}></FaThLarge>Browse All Categories <IoIosArrowDown></IoIosArrowDown></button>
                    {/* ================== CENTER: Navigation Links ================== */}
                    <div className="hidden lg:flex items-center gap-6 text-md font-medium">
                        <NavLink
                            to="/deals"
                            className={({ isActive }) =>
                                `flex items-center gap-1 transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            <AiOutlineFire size={18} className="text-green-600" /> Deals
                        </NavLink>

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            Home <FaAngleDown className="ml-1 text-xs" />
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            Shop <FaAngleDown className="ml-1 text-xs" />
                        </NavLink>

                        <NavLink
                            to="/vendors"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            Vendors <FaAngleDown className="ml-1 text-xs" />
                        </NavLink>

                        <NavLink
                            to="/mega-menu"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            Mega Menu <FaAngleDown className="ml-1 text-xs" />
                        </NavLink>

                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            Blog <FaAngleDown className="ml-1 text-xs" />
                        </NavLink>

                        <NavLink
                            to="/pages"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            Pages <FaAngleDown className="ml-1 text-xs" />
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `transition-colors duration-200 ${isActive ? "text-green-600 font-semibold" : "text-gray-800"
                                } hover:text-green-600`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>

                {/* Support Center for mobile */}
                <div className="flex items-center gap-3 px-6 ">
                    <FaHeadset className="text-4xl" />
                    <div>
                        <p className="font-bold text-green-500 text-xl">1900 - 888</p>
                        <p className="text-xs text-gray-500">24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;