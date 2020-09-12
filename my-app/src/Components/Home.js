import React, { Component } from 'react'
import PollRoundedIcon from '@material-ui/icons/PollRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faMicrophone,faChartBar,faStar,faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import pintro from "../images/image.jpg"
import  intro from "../images/intro.png.jpg"
import Footer from "./Footer"
export default class Home extends Component {
    render(){
        return(
            <>
            <div className="Bapp Kapp">
            <link src="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>
            <div className="header">
             <div className="container py-5">
            <div className="row sha" >
                <div class="col-12 mt-5">
                <h1 >Prof. Uday Chandrakant Patkar</h1>
                <h2 className="sha" >H.O.D Department of Computer Engineering</h2>
                <br/> //but cut your and paste in notepad later y
                   <p> Bharati Vidyapeeth's College of Engineering, Lavale, Pune.</p>
                   <br/>
                   <p> Expert Director, Saptashringi Urban Cooperative Credit Society, Kalewadi Pune.</p>
                   <br/>
                   <p> Counselor, Student Development Council.</p>
                   <br/>
                   <p> Spokesperson, All Maharashtra Vani Samaj Prabodhan Institute, Pimpri Chinchwad</p>
                   <br/>
                   <div class="header-buttons">
                        <a href="/about" style={{textDecoration:"none"}}>ABOUT U. C. PATKAR</a>
                    </div>
                </div>
            </div>
            </div>        
            </div>
            </div>


            <div style={{backgroundColor:"#fdf5e2"}} className="mb-5">
        <div className="conatainer text-center py-3">
            <h1 style={{fontFamily:"muli",color:"Black"}}>A few things I’am great at</h1>
        </div>
        <div className="container py-3 text-center">
            <div className="row">
            <div class="col-lg-3 col-md-3 col-12 card-first">
          <div class="card text-center">
            <div class="card-body ani">
                <SchoolRoundedIcon style={{ fontSize: 60}}/>
                <h2>Teaching</h2>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-12 card-second">
          <div class="card text-center">
            <div class="card-body ani">  
                <SettingsVoiceIcon style={{ fontSize: 60}}/>
                <h2>Motivational Speaker</h2>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-12 card-third">
          <div class="card text-center">
            <div class="card-body ani">
                <PollRoundedIcon style={{ fontSize: 60}}/>
                <h2>Policy Consulation</h2> 
            </div>
          </div>
        </div>
      
        <div class="col-lg-3 col-md-3 col-12">
          <div class="card text-center">
            <div class="card-body ani">
            <StarRoundedIcon style={{ fontSize: 60}}/>
                <h2>Kirtan</h2>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>

        <div>
           <div className="box3" style={{marginTop:"250px",marginBottom:"100px"}}>
                 <div className="imgBx">
                     <img src={pintro} style={{marginRight:"250px",marginTop:"10px",height:"50vh",border:"1px solid black"}}className="maado"/>
                     </div> 

               <div className="content4" style={{marginLeft:"10px"}}>
                   <h2 className="headerpa">Prof.Uday Patkar</h2>
                   <p className="headerpa1">A man of action, having penchant for undertaking reforms, scripting turnarounds and achieving superlative results by working in mission mode. An Professor for guiding students, an Motivational Speaker for guiding and boosting up someone’s confidence, he is well respected for his impeccable integrity, passion and commitment towards society through Social Activities, Religious Activities. I have had to play a very delicate role to strike a balance between development and environment.</p>
               </div>

                     </div>  
    </div>
       
        
        
        
 </>
        )
    }
}