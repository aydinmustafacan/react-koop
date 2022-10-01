/*
 *
 */
import HomePage from "../pages/Home.js";
import AboutUsPage from "../pages/Aboutus.js";
import ContactPage from "../pages/Contact.js";

import DigitalPathologySolutionsPage from "../pages/Services/DigitalPathologySolutionsPage";
import DiagnosticCardiologySolutionsPage from "../pages/Services/DiagnosticCardiologySolutionsPage";
import DiagnosticRadiologySolutionsPage from "../pages/Services/DiagnosticRadiologySolutionsPage";




/*
 *
 */
export const mainPageLinks = [
    {endpoint: "/", page: HomePage, name:"HOME"},
    {endpoint: "/aboutus", page: AboutUsPage, name:"ABOUT US"},
    {endpoint: "/contact", page: ContactPage, name: "CONTACT"},

];


export const serviceDropDownMenuPageLinks = [
    {endpoint: "/digital-pathology-solutions", page: DigitalPathologySolutionsPage, name: "DIGITAL PATHOLOGY SOLUTIONS"},
    {endpoint: "/diagnostic-cardiology-solutions", page: DiagnosticCardiologySolutionsPage, name: "DIAGNOSTIC CARDIOLOGY SOLUTIONS"},
    {endpoint: "/diagnostic-radiology-solutions", page: DiagnosticRadiologySolutionsPage, name: "DIAGNOSTIC RADIOLOGY SOLUTIONS"}
];


