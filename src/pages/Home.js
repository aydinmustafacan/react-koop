import React,{Component} from "react";

import Services from "../components/Services";
import Digitalimaginginfo from "../components/Digitalimaginginfo";



import Footer from "../components/Footer/Footer";
import {LinkButton} from "../components/Buttons";
import {mainPageLinks, serviceDropDownMenuPageLinks} from "../Controller/Links";

import HomeStyles from "./HomePage.module.css";
import images from "./ImagesForCarousel";

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {FaRegComments} from 'react-icons/fa'
import {IoPersonOutline} from 'react-icons/io5'
import {RiStethoscopeLine} from 'react-icons/ri'
import {BiOutline} from "react-icons/bi";
import {FcBiomass, FcBiotech} from "react-icons/fc";
import {GiAbstract001} from "react-icons/gi";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";


const SCROLL_UP_PAGE_LINK = "/";

class home extends Component{
    render(){
        return (
            <>
                <Header/>

                <CarouselView/>
                <ContactDivider/>
                <Services/>
                <Footer/>
            </>
        );
    }
};

const CarouselView = () => {
    const state = {
        services: [
            {
                icon: <BiOutline />,
                title: "Kalite Kontrol Hizmetleri",
                info:
                    "Müşterilerimizin tedarik ettiği veya ürettiği ürünlerde uygunsuzluk tespit edilmesi durumunda QPOWER devreye girer.\n"
            },
            {
                icon: <FcBiotech />,
                title: "PROSES YÖNETİMİ HİZMETLERİMİZ\n",
                info:
                    "Süreçlerini daha etkin ve verimli \n" +
                    "yönetmek isteyen müşterilerimize \n" +
                    "destek oluyoruz.\n"
            },
            {
                icon: <FcBiomass />,
                title: "PROSES İYİLEŞTİRME HİZMETLERİMİZ\n",
                info:
                    "Proseste bir yada birden fazla kalite araç ve teknikleri kullanılarak hatasızlaştırma hedeflenmektedir.\n "
            },
            {
                icon: <GiAbstract001 />,
                title: "Diagnostic Neurology Solutions",
                info:
                    "Lorem ipsum"
            }
        ]
    };
    const solutions = [{
        keyID: 1,
        // icon: <GiAbstract001/>,
        header: "Vizyonumuz ve Misyonumuz",
        // content: "Vizyon hakkinda\n" ,
        link: "/vizyon",
        backgroundColor: "#A9A9A9"
    },
        {
        keyID: 2,
            // icon: <FcBiomass />,
        header: "Hedeflerimiz",
        // content: "Hedefler hakkinda",
        link: "/Aboutus",
        backgroundColor: "#0DB26BE6"
    },
        {
        keyID: 3,
            // icon: <FcBiotech />,
        header: "Referanslarimiz",
        // content: "Referans",
        link: "/ref",
        backgroundColor: "#A9A9A9E6"
    }
    ];

    return (



        //--------------------------------------
        <div className={HomeStyles.carouselContainer}>
            <ImageCarousel rotationTime={6000}/>
            <div className={HomeStyles.solutionsCarouselContainer}>
                {solutions.map(solution => SolutionInfoBox(solution))}
            </div>
        </div>

        // <ImageCarousel rotationTime={6000}/>



    );
}

class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: images,
            totalImages: images.length,
            currentImageIndex: 0,
            slideImageIndex: 0,
            activeSlideCSS: HomeStyles.slide,
            buttonsDisabled: false,
            shouldUpdate: true,
            rotationTime: this.props.rotationTime || 6000,
            timer: null
        }
    }

    componentDidMount() {
        this.setState({timer: setInterval(this.nextImage, this.state.rotationTime)});
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    autoplay = () => {
        clearInterval(this.state.timer);
        this.setState({timer: setInterval(this.nextImage, this.state.rotationTime)});
    }

    nextImage = () => {
        this.setState({shouldUpdate: true, buttonsDisabled: true, slideImageIndex: this.state.currentImageIndex});
        this.state.currentImageIndex < this.state.totalImages - 1
            ? this.setState({currentImageIndex: this.state.currentImageIndex + 1})
            : this.setState({currentImageIndex: 0});
        this.setState({activeSlideCSS: HomeStyles.slideLeft});
        this.autoplay();
    }

    nextImageAnimationHelper = () => {
        this.setState({shouldUpdate: false, buttonsDisabled: false})
    }

    previousImage = () => {
        this.setState({shouldUpdate: true, buttonsDisabled: true})
        this.state.currentImageIndex > 0
            ? this.setState({slideImageIndex: this.state.currentImageIndex - 1})
            : this.setState({slideImageIndex: this.state.totalImages - 1});
        this.setState({activeSlideCSS: HomeStyles.slideRight});
        this.autoplay();
    }

    previousImageAnimationHelper = () => {
        this.setState({
            shouldUpdate: false,
            buttonsDisabled: false,
            currentImageIndex: this.state.slideImageIndex
        })
    }

    render() {
        let slideImage = this.state.images[this.state.slideImageIndex];
        let currentImage = this.state.images[this.state.currentImageIndex];
        let animationFuncHelper;

        if (this.state.activeSlideCSS === HomeStyles.slideRight) {
            animationFuncHelper = this.previousImageAnimationHelper;
        } else if (this.state.activeSlideCSS === HomeStyles.slideLeft) {
            animationFuncHelper = this.nextImageAnimationHelper;
        } else {
            animationFuncHelper = null;
        }

        return (
            <>
                <Navbar/>
                <button className={HomeStyles.backArrow} disabled={this.state.buttonsDisabled}
                        onClick={this.previousImage}><IoIosArrowBack className={HomeStyles.arrowSVG}/></button>
                <button className={HomeStyles.nextArrow} disabled={this.state.buttonsDisabled}
                        onClick={this.nextImage}><IoIosArrowForward className={HomeStyles.arrowSVG}/></button>
                {this.state.shouldUpdate ? <img className={this.state.activeSlideCSS}
                                                onAnimationEnd={animationFuncHelper}
                                                src={slideImage.image}
                                                alt={slideImage.alt}/> : null}
                <img src={currentImage.image} alt={currentImage.alt}/>
            </>
        );
    }
}

const SolutionInfoBox = (solution) =>
    <div key={solution.keyID} className={HomeStyles.solutionsInfoContainer}
         style={{"backgroundColor": solution.backgroundColor}}>
        <h2>
            {solution.icon}
        </h2>
        <h3>{solution.header}</h3>
        <p>{solution.content}</p>
        <LinkButton scrollUpPageLink={SCROLL_UP_PAGE_LINK} link={solution.link} text={"Daha fazlasi..."}/>
    </div>


const ContactDivider = () =>
    <div className={HomeStyles.headerContainer}>
        <div className={HomeStyles.header}>

        </div>
    </div>

const DigitalImagingSolutionsView = () => {
    const solutions = [{
        keyID: 1,
        icon: FaRegComments,
        header: "Is ortaklarimiz",
        content: "I'm a paragraph. .",
        link: mainPageLinks[0].endpoint,
    }, {
        keyID: 2,
        icon: IoPersonOutline,
        header: "Vizyonumuz",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: mainPageLinks[1].endpoint,

    }, {
        keyID: 3,
        icon: RiStethoscopeLine,
        header: "Hedeflerimiz",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: mainPageLinks[1].endpoint,
    }];

    return (
        <div className={HomeStyles.digitalImagingSolutionsViewContainer}>
            <h2>Digital Imaging Informatics Solutions</h2>
            <div className={HomeStyles.digitalImagingSolutionsContainer}>
                {solutions.map(solution => DigitalImagingSolutionsBox(solution))}
            </div>
        </div>
    );
}

const DigitalImagingSolutionsBox = (solution) =>
    <div key={solution.keyID} className={HomeStyles.digitalImagingSolutionsBoxContainer}>
        <div className={HomeStyles.digitalImagingSolutionsIconSVGBackground}>
            <solution.icon className={HomeStyles.digitalImagingSolutionsIconSVG}/>
        </div>
        <h3>{solution.header}</h3>
        <p>{solution.content}</p>
        <LinkButton scrollUpPageLink={SCROLL_UP_PAGE_LINK} link={solution.link} text={"Daha Fazlasi"}/>
    </div>

const SignUpNewsLetterView = () => {
    const signUpNewsFormHandler = () => {
        document.forms["signUpNewsLetterForm"].reset();
    }

    return (
        <div className={HomeStyles.signUpNewsLetterViewContainer}>
            <h2>Sign up for our newsletter</h2>
            <p>Enter your email below to stay updated with the latest news and solutions from A to Z Informatics
                Lab.</p>
            <div className={HomeStyles.signUpNewsLetterFormContainer}>
                <form id="signUpNewsLetterForm">
                    <input type="text" placeholder="Enter your email here.*"
                           className={HomeStyles.signUpNewsLetterInput}/>
                </form>
                <button type="button" form="signUpNewsLetterForm" onClick={signUpNewsFormHandler}>Subscribe Now</button>
            </div>
        </div>
    );
}



export default home;
