import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ReferenceComponent from "../components/reference.component";
const Aboutus = () => {
    return (
        <>
            <Header/>
            <Navbar/>

                <ReferenceComponent/>

            <Footer/>
        </>
    );
};

export default Aboutus;