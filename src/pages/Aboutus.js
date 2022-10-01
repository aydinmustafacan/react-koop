import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import logo from "../images/Picture6.png";
import logo2 from "../images/Picture7.png";
import SubHeaderAboutUs from "../components/Header2/SubHeaderAboutUs";
const Aboutus = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <SubHeaderAboutUs/>
        {/*<Hero hero={"loginHero"}>*/}
        {/*<Banner title="  Hakkimizda">*/}

        {/*    <h3>*/}
        {/*        Kurucularının Otomotiv,Çelik ve Sorting sektörlerindeki 30 yıllık OEM,birinci seviye (TIER 1) ve ikinci seviye*/}
        {/*        (TIER 2) tedarikçi kalite tecrübesi ile müşteri odaklı yaklaşımlardan taviz vermeden farklı sektörlerdeki müşteri ihtiyaçlarına çözüm ortağı olabilmek adına %100 yerli sermaye ile kurulmuş kalite kontrol firmasıdır*/}
        {/*    </h3>*/}
        {/*    <img src={logo} alt="alternative txt" width="348"/>*/}
        {/*    <div/>*/}
        {/*  <Link to="/" className="btn-primary">*/}
        {/*    Ana Sayfa*/}
        {/*  </Link>*/}
        {/*</Banner>*/}
        {/*    </Hero>*/}
        <Hero>
            <div className="section-divs">
            <div className="services-center">
                <article>
                    {/*<h>*/}
                    {/*    Hakkımızda*/}
                    {/*</h>*/}
                    <h3>
                        Kurucularının Otomotiv,Çelik ve Sorting sektörlerindeki 30 yıllık OEM,birinci seviye (TIER 1) ve ikinci seviye
                        (TIER 2) tedarikçi kalite tecrübesi ile müşteri odaklı yaklaşımlardan taviz vermeden farklı sektörlerdeki müşteri ihtiyaçlarına çözüm ortağı olabilmek adına %100 yerli sermaye ile kurulmuş kalite kontrol firmasıdır
                    </h3>
                    <div/>
                    <Link to="/" className="btn-primary">
                        Ana Sayfa
                    </Link>
                </article>
                <article className="article-left">
                    <img src={logo} alt="alternative txt" width="348"/>
                </article>

            </div>
            </div>



        </Hero>

        <Hero>

            <div className="section-divs">
                <div className="services-center">
                    <article >
                        <img src={logo2} alt="alternative txt" width="348"/>
                    </article>
                    <article>
                        {/*<h>*/}
                        {/*    Hakkımızda*/}
                        {/*</h>*/}
                        <h3>
                            Kurucularının Otomotiv,Çelik ve Sorting sektörlerindeki 30 yıllık OEM,birinci seviye (TIER 1) ve ikinci seviye
                            (TIER 2) tedarikçi kalite tecrübesi ile müşteri odaklı yaklaşımlardan taviz vermeden farklı sektörlerdeki müşteri ihtiyaçlarına çözüm ortağı olabilmek adına %100 yerli sermaye ile kurulmuş kalite kontrol firmasıdır
                        </h3>
                        <div/>
                        <Link to="/" className="btn-primary">
                            Ana Sayfa
                        </Link>
                    </article>


                </div>
            </div>
        </Hero>
      <Footer/>
    </>
  );
};

export default Aboutus;