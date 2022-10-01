import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import {GiStickFrame} from "react-icons/gi";
import Footer from "../components/Footer/Footer";
import logo from "../images/Picture11.png";





const Services = () => {




    return (
        <>
            <Header/>
            <Navbar/>
            {/*<Hero hero="servicesHero">*/}

            {/*    <Banner title="Denetim">*/}

            {/*        /!*<Link to="/login" className="btn-primary">*!/*/}
            {/*        /!*    Login*!/*/}
            {/*        /!*</Link>*!/*/}
            {/*        <h1>*/}
            {/*            <div />*/}
            {/*        </h1>*/}
            {/*        <h2>*/}
            {/*            Tedarikçi denetimi*/}
            {/*        </h2>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>-*/}
            {/*            Müşteri özel isteğine göre PCPA,GM 1927 ve Renault Proses denetim sentezi Formatlarında*/}
            {/*        </h3>*/}
            {/*        <h2>*/}
            {/*            Proses denetimi*/}
            {/*        </h2>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>-*/}
            {/*            Müşteri özel isteğine göre PCPA,GM 1927 ve Renault Proses denetim sentezi Formatlarında*/}
            {/*        </h3>*/}

            {/*        <Link to="/services" className="btn-primary">*/}
            {/*            Diger Hizmetler*/}
            {/*        </Link>*/}
            {/*    </Banner>*/}
            {/*    <Banner>*/}
            {/*        <img src={logo} alt="alternative txt" width="348"/>*/}
            {/*    </Banner>*/}
            {/*</Hero>*/}
            <Hero>
                <div className="services-center">
                    <article>
                        <h>
                            Denetim
                        </h>
                        <h2>
                            Tedarikçi denetimi

                        </h2>
                        <h3>
                            <GiStickFrame/>-
                            Müşteri özel isteğine göre PCPA,GM 1927 ve Renault Proses denetim sentezi Formatlarında
                        </h3>
                        <h2>
                            Proses denetimi
                        </h2>
                        <h3>
                            <GiStickFrame/>-
                            Müşteri özel isteğine göre PCPA,GM 1927 ve Renault Proses denetim sentezi Formatlarında
                        </h3>
                        <Link to="/services" className="btn-primary">
                            Diger Hizmetler
                        </Link>
                    </article>
                    <article>
                        <img src={logo} alt="alternative txt" width="348"/>
                    </article>

                </div>
            </Hero>
            <Footer/>
        </>



    );




};

export default Services;
