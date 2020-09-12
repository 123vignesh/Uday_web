import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import About from "./Components/About";
import News from "./Components/News";
import Religious from "./Components/Religious";
import Professionals from "./Components/Professionals";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar1 from './Components/Navbar1';
import Contact from './Components/Contact';
import Family from './Components/Family';
import Media from 'react-media';

function App() {
  return (
   
    <div >
    
      <Navbar1/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Contact" component={Contact}/>
         <Route path="/About" component={About}/>
         <Route path="/News" component={News}/>
         <Route path="/Gallery" component={Gallery}/>
         <Route path="/Religious" component={Religious}/>
         <Route path="/Professionals" component={Professionals}/>
         <Route path="/Family" component={Family}/>
      </Switch>
      <Footer/>
    </div>
    
   
  );
};

export default App;
