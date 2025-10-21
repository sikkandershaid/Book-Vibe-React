import React from 'react';
import HeroBanner from './HeroBanner';
import Books from '../Books/Books';
import { Helmet } from "@dr.pogodin/react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Boi Poka</title>
            </Helmet>
            <HeroBanner></HeroBanner>
            <Books />
        </div>
    );
};

export default Home;