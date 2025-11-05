import { NavLink } from "react-router";
import { IoIosGitCompare, IoIosHeartEmpty } from "react-icons/io";
import {
    FaSearch,
    FaMapMarkerAlt,
} from "react-icons/fa";
import navImg from "../../assets/logo.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";



const LowHeader = () => {

    return (
        <div className="shadow-xs border-b border-gray-100 bg-white py-3 ">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* Mobile Menu Button */}
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Shop</NavLink></li>
                            <li><NavLink>Vendors</NavLink></li>
                            <li><NavLink>Mega Menu</NavLink></li>
                            <li><NavLink>Blog</NavLink></li>
                            <li><NavLink>Pages</NavLink></li>
                            <li><NavLink>Language</NavLink></li>
                        </ul>
                    </div>
                    <img  src={navImg} alt="Nest Logo" className="w-40 hidden md:block" />
                </div>

                {/* Search (hidden on small screens) */}
                <div className="hidden lg:flex items-center border-2 border-green-300 rounded-md w-[500px] px-3 py-1.5">
                    <select className="bg-white  border-green-300 text-gray-600 px-2 py-2 text-sm focus:outline-none font-bold">
                        <option>All Categories</option>
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        <option>Dairy</option>
                        <option>Snacks</option>
                    </select>
                    <span className="ml-2 text-gray-300 text-lg font-extralight">|</span>
                    <input
                        type="text"
                        placeholder="Search for items..."
                        className="flex-grow px-3 py-2 focus:outline-none text-sm"
                    />
                    <button className="px-3 text-green-600">
                        <FaSearch />
                    </button>
                </div>
                {/* location */}
                <div className="hidden xl:flex items-center border border-gray-200 rounded-md px-2 py-2 shadow-xs text-sm text-gray-700 hover:shadow-sm cursor-pointer ">
                        <CiLocationOn size={20} className="text-gray-400 mr-2" />
                        <select className="bg-transparent border-none focus:outline-none cursor-pointer text-green-600 font-semibold">
                            <option className="text-gray-600 p-1">Your Location</option>
                            <option className="text-gray-600 p-1">Dhaka</option>
                            <option className="text-gray-600 p-1">Chittagong</option>
                            <option className="text-gray-600 p-1">Khulna</option>
                        </select>
                    </div>
                <div className="dropdown hidden md:block">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Shop</NavLink></li>
                            <li><NavLink>Vendors</NavLink></li>
                            <li><NavLink>Mega Menu</NavLink></li>
                            <li><NavLink>Blog</NavLink></li>
                            <li><NavLink>Pages</NavLink></li>
                            <li><NavLink>Language</NavLink></li>
                        </ul>
                    </div>
                    {/* logo */}
                    <div className="flex md:hidden">
                        <img src={navImg} alt="Nest Logo" className="w-40" />
                    </div>
                    

                {/* Right Section */}
                <div className="flex items-center gap-4 md:gap-6">
                    
                    {/* Mobile Menu Button */}
                    


                    {/* Icons */}
                    <div className="flex items-center gap-5 text-gray-700 text-sm order-3">
                        <div className="relative lg:flex flex-col items-center cursor-pointer hover:text-green-600 hidden">
                            <IoIosGitCompare size={26} />
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                                3
                            </span>
                            <p className="hidden md:block">Compare</p>
                        </div>

                        <div className="relative flex flex-col items-center cursor-pointer hover:text-green-600">
                            <IoIosHeartEmpty size={26} />
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                                6
                            </span>
                            <p className="hidden md:block">Wishlist</p>
                        </div>

                        <div className="relative flex flex-col items-center cursor-pointer hover:text-green-600">
                            <MdOutlineShoppingCart size={26} />
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                                2
                            </span>
                            <p className="hidden md:block">Cart</p>
                        </div>

                        <div className="lg:flex flex-col items-center cursor-pointer hover:text-green-600 hidden">
                            <FaRegCircleUser size={26} />
                            <p className="hidden md:block">Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LowHeader;
