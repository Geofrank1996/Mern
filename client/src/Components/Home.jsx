import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Main from '../Components/Main';
import Product from '../Components/Product';
import Footer from '../Components/Footer';
import GridDiv from '../Components/GridDiv';
import Cat from '../Components/Cat';
import '../App.css'


function Home() {
    const location = useLocation()

    return (
        <div className="homepage">
            <Navbar />
            <Banner />
            <Main />
            <Product />
            <Cat />
            <GridDiv />
            <Footer />
        </div>
    )
}

export default Home
