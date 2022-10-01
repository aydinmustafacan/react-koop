import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import logo from "../images/location1.jpg";
import Hero from "../components/Hero";
import {GiStickFrame} from "react-icons/gi";
import Newnav from "../components/newnav";
import Navbar2 from "../components/Navbar2";
const Contact = () => {
  return (
    <>

      <Header/>
      {/*  <Newnav/>*/}
      {/*<Navbar/>*/}
      <Navbar/>

      {/*<Hero hero={"loginHero"}>*/}
      {/*  <Banner title="Iletisim">*/}
      {/*      <h2>*/}
      {/*          Adres:*/}
      {/*      </h2>*/}
      {/*    <h3>*/}
      {/*        Yeni Karaman mahallesi 4.Baş Sokak No:31/2 16170*/}
      {/*        OSMANGAZİ/BURSA/TÜRKİYE*/}
      {/*    </h3>*/}
      {/*      <h2>*/}
      {/*          Telefon:*/}
      {/*      </h2>*/}
      {/*      <h3>*/}
      {/*          +90(224)2452081*/}
      {/*      </h3>*/}
      {/*      /!*<h2>*!/*/}
      {/*      /!*    Email:*!/*/}
      {/*      /!*</h2>*!/*/}
      {/*      /!*<h3>*!/*/}
      {/*      /!*</h3>*!/*/}
      {/*  </Banner>*/}
      {/*  <Banner>*/}
      {/*      <img src={logo} alt="alternative txt" width="400"/>*/}
      {/*  </Banner>*/}
      {/*</Hero>*/}
        <Hero>
            <div className="services-center">
                <article>
                    <h>
                        Iletisim
                    </h>
                    <h2>
                        Adres:
                    </h2>
                    <h3>
                        Yeni Karaman mahallesi 4.Baş Sokak No:31/2 16170
                        OSMANGAZİ/BURSA/TÜRKİYE
                    </h3>
                    <h2>
                        Telefon:
                    </h2>
                    <h3>
                        +90(224)2452081
                    </h3>
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

export default Contact;