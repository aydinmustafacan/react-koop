import React, { Component } from "react";
import { BiOutline } from "react-icons/bi";
import { FcBiotech ,FcBiomass, FcAbout, FcAdvance, FcAdvertising} from "react-icons/fc";
import { GiMedicines, GiStairsGoal} from "react-icons/gi";
import {GrVirtualMachine, GrWorkshop} from "react-icons/gr";
import Title from "./Title";
import HomeStyles from "../pages/HomePage.module.css";
import logo from "../images/ref1.png";
import logo1 from "../images/ref2.png";
import logo2 from "../images/ref3.png";
import logo3 from "../images/ref4.png";

export default class Services extends Component {

  state = {
    services: [
      // {
      //   icon: <GiStairsGoal />,
      //   title: "Hedeflerimiz",
      //   info:
      //     "Hedef"
      // },
      // {
      //    icon: <FcAbout />,
      //   title: "Hakkimizda",
      //   info:
      //     "Vizyon"
      // },
      // {
      //    icon: <GrWorkshop />,
      //   title: "Partnerlerimiz",
      //   info:
      //     "Lorem ipsum "
      // },
      // {
      //    icon: <GrVirtualMachine />,
      //   title: "Vizyonumuz",
      //   info:
      //     "Lorem ipsum"
      // },
      {
        icon:<img src={logo3} alt="alternative txt" width="200"/>,
        // title: "something",
        // info:"some other things"
      },
      {
        icon:<img src={logo2} alt="alternative txt" width="200"/>,
        // title: "something",
        // info:"some other things"
      },
      {
        icon:<img src={logo1} alt="alternative txt" width="200"/>,
        // title: "something",
        // info:"some other things"
      },
      {
        icon:<img src={logo} alt="alternative txt" width="200"/>,
        // title: "something",
        // info:"some other things"
      }
    ]
  };
  render() {
    return (
      <>

        {/*<div className={HomeStyles.signUpNewsLetterViewContainer}>*/}

        {/*  */}
        {/*</div>*/}
        <section className="services">


      <br/>

        {/*<Title title="Hizmetlerimiz" />*/}
          <Title title="Referanslarimiz" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>


      
      </>
    );
  }
}
