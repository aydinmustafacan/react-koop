import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import {GiStickFrame} from "react-icons/gi";
import Footer from "../components/Footer/Footer";
import logo from "../images/Picture10.png";





const Services = () => {




    return (
        <>
            <Header/>
            <Navbar/>
            {/*<Hero hero="servicesHero">*/}

            {/*    <Banner title="Process Iyilestirme">*/}

            {/*        /!*<Link to="/login" className="btn-primary">*!/*/}
            {/*        /!*    Login*!/*/}
            {/*        /!*</Link>*!/*/}

            {/*        <h2>*/}
            {/*            PROSESTE BİR YADA BİRDEN FAZLA KALİTE ARAÇ VE TEKNİKLERİ KULLANILARAK HATASIZLAŞTIRMA HEDEFLENMEKTEDİR.*/}



            {/*        </h2>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Proses iyileştirme;*/}
            {/*            KAİZEN-PÇF-SPC-5S*/}
            {/*            Metodları ile gerçekleştirilir.*/}



            {/*        </h3>*/}

            {/*        <h1>*/}
            {/*            <div />*/}
            {/*        </h1>*/}
            {/*        <h1>*/}
            {/*            <div />*/}
            {/*        </h1>*/}

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
                            Process Iyilestirme
                        </h>
                        <h2>
                            PROSESTE BİR YADA BİRDEN FAZLA KALİTE ARAÇ VE TEKNİKLERİ KULLANILARAK HATASIZLAŞTIRMA HEDEFLENMEKTEDİR.



                        </h2>
                        <h3>
                            <GiStickFrame/>
                            -Proses iyileştirme;
                            KAİZEN-PÇF-SPC-5S
                            Metodları ile gerçekleştirilir.



                        </h3>

                        <h1>
                            <div />
                        </h1>
                        <h1>
                            <div />
                        </h1>

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
