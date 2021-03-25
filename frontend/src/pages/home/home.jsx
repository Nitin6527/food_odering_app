import React from 'react';
import Banner from '../../components/banner/banner';
import About from '../../components/about/about';
import Special from '../../components/special/special';
import Menu from '../../components/Menu/menu';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <About />
            <Special />
            <Menu />
        </div>
    )
}

export default HomePage
