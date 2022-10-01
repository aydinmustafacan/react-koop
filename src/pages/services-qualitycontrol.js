import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Header from "../components/Header/Header";
import { GiMedicines, GiStickFrame} from "react-icons/gi";
import Footer from "../components/Footer/Footer";
import logo from "../images/Picture8.png";




const Services = () => {




    return (
        <>
            <Header/>
            <Navbar/>
            {/*<Hero hero="servicesHero">*/}

            {/*    <Banner title="Kalite Control">*/}

            {/*        /!*<Link to="/login" className="btn-primary">*!/*/}
            {/*        /!*    Login*!/*/}
            {/*        /!*</Link>*!/*/}
            {/*        /!*<h1>*!/*/}
            {/*        /!*    <div />*!/*/}
            {/*        /!*</h1>*!/*/}
            {/*        <h2>*/}
            {/*            Müşterilerimizin tedarik ettiği veya ürettiği ürünlerde uygunsuzluk tespit edilmesi durumunda QPOWER devreye girer.*/}

            {/*        </h2>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*             -Kontrol Edilmesi*/}
            {/*        </h3>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Ayıklanması*/}

            {/*        </h3>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Analiz edilmesi*/}

            {/*        </h3>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Tamir edilmesi*/}

            {/*        </h3>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Raporlanması*/}

            {/*        </h3>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Etiketlenmesi*/}

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
                            Kalite Control
                        </h>
                        <h2>
                            Müşterilerimizin tedarik ettiği veya ürettiği ürünlerde uygunsuzluk tespit edilmesi durumunda QPOWER devreye girer.

                        </h2>
                        <h3>
                            <GiStickFrame/>
                            -Kontrol Edilmesi
                        </h3>
                        <h3>
                            <GiStickFrame/>
                            -Ayıklanması

                        </h3>
                        <h3>
                            <GiStickFrame/>
                            -Analiz edilmesi

                        </h3>
                        <h3>
                            <GiStickFrame/>
                            -Tamir edilmesi

                        </h3>
                        <h3>
                            <GiStickFrame/>
                            -Raporlanması

                        </h3>
                        <h3>
                            <GiStickFrame/>
                            -Etiketlenmesi

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
