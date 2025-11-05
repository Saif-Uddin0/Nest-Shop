import React from 'react';
import UpHeader from './Header/UpHeader';
import LowHeader from './Header/LowHeader';
import BottomHeader from './Header/BottomHeader';

const MainHeader = () => {
    return (
        <header className='w-full'>
            <div className='hidden lg:block'><UpHeader></UpHeader></div>
            <div><LowHeader></LowHeader></div>
            <div className='hidden lg:block sticky top-0 z-50 bg-white '><BottomHeader></BottomHeader></div>
        </header>
    );
};

export default MainHeader;