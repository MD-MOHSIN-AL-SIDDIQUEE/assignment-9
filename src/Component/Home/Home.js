import React from 'react';
import Body from '../Body/Body';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className="background">
            <Navbar></Navbar>
            <Body></Body>
        </div>
    );
};

export default Home;