import React from 'react';
import Header from '../pages/sheared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sheared/Footer/Footer';

const Main = () => {
    
    return (
        <div>
            <Header></Header> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;