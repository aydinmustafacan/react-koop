import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import {GiStickFrame} from "react-icons/gi";
import Footer from "../components/Footer/Footer";
import logo from "../images/Picture12.png";
import Newnav from "../components/newnav";





const Services = () => {




    return (
        <>
            <Newnav/>
            {/*<Header/>*/}

            <Navbar/>
            {/*<Hero hero="servicesHero">*/}

            {/*    <Banner title="CSL">*/}

            {/*        /!*<Link to="/login" className="btn-primary">*!/*/}
            {/*        /!*    Login*!/*/}
            {/*        /!*</Link>*!/*/}
            {/*        <h1>*/}
            {/*            <div />*/}
            {/*        </h1>*/}

            {/*        <h2>*/}
            {/*            Kontrollü Sevkiyatların kontrolü ile alakalı*/}
            {/*            "Controlled Shipping level"*/}

            {/*        </h2>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            - CSL1 Üreticinin talebi ile gerçekleşen kontroller*/}

            {/*        </h3>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            - CSL2 Müşterinin talebi ile tedarikçi sahasında gerçekleşen kontroller*/}


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
                    <h2>
                        Kontrollü Sevkiyatların kontrolü ile alakalı
                        "Controlled Shipping level"

                    </h2>
                    <h3>
                        <GiStickFrame/>
                        - CSL1 Üreticinin talebi ile gerçekleşen kontroller

                    </h3>
                    <h3>
                        <GiStickFrame/>
                        - CSL2 Müşterinin talebi ile tedarikçi sahasında gerçekleşen kontroller
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
