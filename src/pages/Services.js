import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";





const Services = () => {

  


        return (
            <>
                <Header/>
            <Navbar/>
            <Hero hero="servicesHero">

                <Banner title="Hizmetlerimiz">

                    <Link to="/quality" className="btn-primary">
                        Kalite Kontrol
                    </Link>
                    <Link to="/prosessmanagement" className="btn-primary">
                       Proses Yonetimi
                    </Link>
                    <Link to="/prosessiyilestirme" className="btn-primary">
                        Proses Iyilestirme
                    </Link>
                    <Link to="/csl" className="btn-primary">
                        CSL1-CSL2
                    </Link>
                    <Link to="/temsilcilik" className="btn-primary">
                        Musteri Temsilciligi
                    </Link>
                    <Link to="/denetim" className="btn-primary">
                        Denetim
                    </Link>
                    <h1>
                        <div />
                    </h1>
                    {/*<h2>*/}
                    {/*    Cesitli hizmetler veriyoruz...*/}
                    {/*</h2>*/}


                </Banner>
            </Hero>

                <Footer/>

    </>



        );




};

export default Services;
