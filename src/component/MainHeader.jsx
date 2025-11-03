import React from 'react';
import UpHeader from './Header/UpHeader';
import LowHeader from './Header/LowHeader';

const MainHeader = () => {
    return (
        <div>
            <div><UpHeader></UpHeader></div>
            <div><LowHeader></LowHeader></div>
        </div>
    );
};

export default MainHeader;