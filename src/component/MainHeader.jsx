import React from 'react';
import UpHeader from './Header/UpHeader';
import LowHeader from './Header/LowHeader';
import BottomHeader from './Header/BottomHeader';

const MainHeader = () => {
    return (
        <div>
            <div className='hidden lg:block'><UpHeader></UpHeader></div>
            <div><LowHeader></LowHeader></div>
            <div className='hiddem lg:block'><BottomHeader></BottomHeader></div>
        </div>
    );
};

export default MainHeader;