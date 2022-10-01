import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";

const Contact = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Banner title="Konumlarimiz">
                <h3>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    ​
                    This is a great space to write long text about your company and yo
                </h3>
            </Banner>
            <Footer/>
        </>
    );
};

export default Contact;