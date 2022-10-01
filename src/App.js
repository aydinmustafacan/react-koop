import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Quality from "./pages/services-qualitycontrol";
import csl from "./pages/services-csl";
import denetim from "./pages/services-denetim";
import processManagement from "./pages/services-processmanagement";
import temsil from "./pages/services-temsil";
import iyilestirme from "./pages/services-processiyilestirme";
import konum from "./pages/location";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home1 from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Vizyon from "./pages/visyon";
import DiagnosticCardiologySolutionsPage from "./pages/Services/DiagnosticCardiologySolutionsPage";
import DiagnosticRadiologySolutionsPage from "./pages/Services/DiagnosticRadiologySolutionsPage";
import DiagnosticPathologySolutionsPage from "./pages/Services/DigitalPathologySolutionsPage";
import Header from "./components/Header/Header";
import Reference from "./pages/reference";
import Grid from "./pages/Grid";


class App extends Component {








  render() {


    return (

        <div>
            <>

          {/*<div className="container mt-3">*/}
            <Switch>
              <Route exact path="/location" component={konum} />
              <Route exact path="/" component={Home1} />
                <Route exact path="/vizyon" component={Vizyon} />
              <Route exact path="/quality" component={Quality}/>
              <Route exact path="/denetim" component={denetim}/>
              <Route exact path="/prosessmanagement" component={processManagement}/>
              <Route exact path="/csl" component={csl}/>
              <Route exact path="/temsilcilik" component={temsil}/>
              <Route exact path="/prosessiyilestirme" component={iyilestirme}/>
              <Route exact path="/Services/" component={Services} />
              <Route exact path="/Aboutus/" component={Aboutus} />
              <Route exact path="/Contact/" component={Contact} />
              <Route exact path="/ref" component={Reference}/>
              <Route exact path="/diagnostic-cardiology-solutions/" component={DiagnosticCardiologySolutionsPage} />
              <Route exact path="/diagnostic-radiology-solutions/" component={DiagnosticRadiologySolutionsPage} />
              <Route exact path="/digital-pathology-solutions/" component={DiagnosticPathologySolutionsPage} />


            </Switch>
          {/*</div>*/}
          </>

        </div>

    );
  }
}



export default App;
