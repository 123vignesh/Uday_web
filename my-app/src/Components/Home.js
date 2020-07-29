import React, { Component } from 'react'
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faMicrophone,faChartBar,faStar,faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import pintro from "../images/image.jpg"
import  intro from "../images/intro.png.jpg"
export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <link src="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>

<div class="header1">
  <h1 class="page-heading"><br/><br/>

    <span class="page-heading-primary">Prof. Uday Chandrakant Patkar</span><br/>
    <span class="page-heading-secondary">H.O.D Department of Computer Engineering<br/><br/>Bharati Vidyapeeth's College of Engineering, Lavale, Pune.

<br/><br/>Expert Director, Saptashringi Urban Cooperative Credit Society, Kalewadi Pune.<br/><br/>Counselor, Student Development Council.
<br/><br/>Spokesperson, All Maharashtra Vani Samaj Prabodhan Institute, Pimpri Chinchwad

</span>
  </h1>
</div> 
<div className="box1">
    <div className="imgbox">
      <img src={pintro} alt="gall"/>

    </div>
    <div className="content2">
        <h1>About</h1>
        <h2>U. C. Patkar</h2>
        <p>A man of action, having penchant for undertaking reforms, scripting turnarounds and achieving superlative results by working in mission mode. An Professor for guiding students, an Motivational Speaker for guiding and boosting up someone’s confidence, he is well respected for his impeccable integrity, passion and commitment towards society through Social Activities, Religious Activities. I have had to play a very delicate role to strike a balance between development and environment.</p>
    </div>

</div><br/>

<div className="bat1">
<h1 className="ret"  style={{paddingTop:"600px"}}>Few things I am Great at</h1>
          <div className="bat">
          <div style={{marginRight:"180px",fontSize:"55px",marginLeft:"80px"}}>
                 <FontAwesomeIcon icon={faGraduationCap} />
                 <h2>Teaching</h2>
                 
             </div>
             <div style={{marginRight:"160px"}}>
             <FontAwesomeIcon icon={faMicrophone} style={{fontSize:"50px"}}/>
             <h2>Motivational Speaker</h2>
             </div>

             <div style={{marginRight:"170px",marginLeft:"350"}}>
             <FontAwesomeIcon icon={faChartBar} style={{fontSize:"50px"}}/>
             <h2>Policy Consulation</h2>
             </div>

             <div style={{marginRight:"170px"}}>
             <FontAwesomeIcon icon={faStar} style={{fontSize:"50px"}}/>
             <h2>Kirtan</h2>
             </div>
             
</div>


          </div>
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

             


<Footer/>
                
            </div>
        )
    }
}
