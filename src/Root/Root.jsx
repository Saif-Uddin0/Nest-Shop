import React from 'react';
import MainHeader from '../component/MainHeader';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Root = () => {
    return (
        <div>
            <div>
                <MainHeader></MainHeader>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;