import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Painting from "../pages/Painting/Painting";
import About from "../pages/About/About";
import Navigation from "../components/Navigation/Navigation";
import Graphics from "../pages/Graphics/Graphics";
import DigitalPaintings from "../pages/DigitalPaintings/DigitalPaintings";
import Contacts from "../pages/Contacts/Contacts";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";


const Routing:FunctionComponent = () => {
    return (
        <Router>
            <Navigation/>
             <Layout>
                 <Switch>
                     <Route exact path='/' component={ Home } />
                     <Route path='/about' component={ About } />
                     <Route path='/painting' component={ Painting } />
                     <Route path='/graphics' component={ Graphics } />
                     <Route path='/digital-painting' component={ DigitalPaintings } />
                     <Route path='/contacts' component={ Contacts } />
                 </Switch>
             </Layout>
            <Footer/>
        </Router>
    );
};

export default Routing;
