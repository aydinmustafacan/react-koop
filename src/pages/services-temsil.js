import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Header from "../components/Header/Header";
import {GiStickFrame} from "react-icons/gi";
import Footer from "../components/Footer/Footer";
import logo from "../images/Picture13.png";






const Services = () => {




    return (
        <>
            <Header/>
            <Navbar/>
            {/*<Hero hero="servicesHero">*/}

            {/*    <Banner title="Musteri Temsilciligi">*/}

            {/*        <img src={logo} alt="alternative txt" width="348"/>*/}
            {/*        <div/>*/}
            {/*        <h2>*/}

            {/*            Müşterilerimizin tedarikçi ve tedarikçi ürünleri ile alakalı konularında müşterilerimizi temsil ediyoruz.*/}

            {/*        </h2>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Düzenli proses ve ürün*/}
            {/*            takibi*/}




            {/*        </h3>*/}
            {/*        <h3>*/}
            {/*            <GiStickFrame/>*/}
            {/*            -Kalite problemlerinde durum tespiti,*/}
            {/*            acil faaliyet,kök neden analizi,düzeltici & önleyici faaliyet takibi ve raporlama*/}





            {/*        </h3>*/}

            {/*        <Link to="/services" className="btn-primary">*/}
            {/*            Diger Hizmetler*/}
            {/*        </Link>*/}
            {/*    </Banner>*/}
            {/*</Hero>*/}
            <Hero>
                <div className="services-center">
                    <article>
                        <h>
                            Musteri Temsilciligi
                        </h>
                        <h2>

                            Müşterilerimizin tedarikçi ve tedarikçi ürünleri ile alakalı konularında müşterilerimizi temsil ediyoruz.

                        </h2>
                        <h3>
                            <GiStickFrame/>
                            -Düzenli proses ve ürün
                            takibi




                        </h3>
                        <h3>
                            <GiStickFrame/>
                            -Kalite problemlerinde durum tespiti,
                            acil faaliyet,kök neden analizi,düzeltici & önleyici faaliyet takibi ve raporlama





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
