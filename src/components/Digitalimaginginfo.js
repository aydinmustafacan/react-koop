import React, { Component } from "react";
import { BiOutline } from "react-icons/bi";
import { FcBiotech ,FcBiomass} from "react-icons/fc";
import { GiMedicines} from "react-icons/gi";

import Title from "./Title";
import {FaRegComments} from "react-icons/fa";
import {mainPageLinks} from "../Controller/Links";
import {IoPersonOutline} from "react-icons/io5";
import {RiStethoscopeLine} from "react-icons/ri";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

import HomeStyles from "../pages/HomePage.module.css";
import {LinkButton} from "./Buttons";
import { Link } from "react-router-dom";
export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaRegComments/>,
                title: "Collaborations",
                info:
                    "Digital Pathology related",
                link: "/collabrations"
            },
            {
                icon: <IoPersonOutline/>,
                title: "Customers",
                info:
                    "Diagnostic Radiology related",
                link: "/customers"
            },
            {
                icon: <RiStethoscopeLine/>,
                title: "AI Diagnostics",
                info:
                    "Lorem ipsum ",
                link: "aidiagnostics"
            },
        ]
    };
    render() {
        return (
            <>
                <section className="services2">
                    <br/>
                    <div className="services-center">
                        {this.state.services.map(item => {
                            return (
                                <article key={`item-${item.title}`} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>

                                    <Link to={item.link} className="btn-sec">
                                        see more!
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </section>

            </>
        );
    }
}

