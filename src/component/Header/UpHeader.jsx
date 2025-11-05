import React from 'react';

const UpHeader = () => {
    return (
        <div className='shadow-xs'>
            <div className='flex items-center justify-between container mx-auto p-1'>
                <div>
                    <ul className='flex items-center justify-between gap-2 text-sm text-gray-500'>
                        <li className="border-r pr-1.5 border-gray-200">About Us</li>
                        <li className="border-r border-gray-200 pr-1.5">My Account</li>
                        <li className="border-r border-gray-200 pr-1.5">Wishlist</li>
                        <li className=" ">Order Tracking</li>
                    </ul>
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>Supper Value Deals - Save more with coupons</p>
                </div>
                <div className='flex items-center justify-between gap-2 text-sm text-gray-500'>
                    <p>Need help? Call Us:<span className='text-[#3BB77E]'>+ 1800 900</span></p>
                    <span className='text-gray-200'>|</span>
                    <div className='flex items-center justify-center gap-1'>
                        <select className="select select-bordered select-sm border-none bg-white text-gray-600 focus:outline-none">
                            <option>English</option>
                            <option>বাংলা</option>
                        </select>
                        <select className="select select-bordered select-sm border-none bg-white text-gray-600 focus:outline-none">
                            <option>USD</option>
                            <option>BDT</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpHeader;