import React from 'react';
import MainBanner from '../components/MainBanner';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <div className='mt-16'>
            <MainBanner/>
            <Categories/>
        </div>
    );
};

export default Home;