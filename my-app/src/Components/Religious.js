import React, { Component } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import pintro from "../images/image.jpg"
import "../App.css";
import {Link,Redirect} from "react-router-dom";


export default class Religious extends Component {  
    render() {
        return (
            <div>
                <Navbar/>
                <div className="App">
                <div class="responsive">
  <div class="gallery">
    <a target="_blank" href="../images/image.jpg">
      <img src={pintro} alt="Forest" width="600" height="400"/>
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="../images/image.jpg">
      <img src={pintro} alt="Northern Lights" width="600" height="400"/>
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="../images/image.jpg">
      <img src={pintro} alt="Mountains" width="600" height="400"/>
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>
<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="../images/image.jpg">
      <img src={pintro} alt="Mountains" width="600" height="400"/>
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

  
                </div>
                <Footer/>
            </div>
           
        )
    }
}
