import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-[1171px] mx-auto flex flex-col min-h-screen'>
            <Header/>
                <main className="main-content flex-1">
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    );
};

export default Root;