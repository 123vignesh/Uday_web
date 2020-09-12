import React, { Component } from 'react';
import Footer from "./Footer";
import pintro from "../images/image.jpg"
// import "../App.css";
import Common from './Common';
import {Link,Redirect} from "react-router-dom";

export default class About extends Component {  
    render() {
        return (
          <> 
          <div style={{backgroundColor:"#EAFAF9"}}>
          <Common name="About"/>
         
          <div className="container mt-4">
            <div className="row">
              <div className="col-lg-6">
                    <p>Name: Uday Chandrakant Patkar</p>
                    <p>Date of Birth:&nbsp;July 12, 1981</p>
              </div>
            </div>
          </div>

          <div className="container paata">
            <div className="row">
              <div className="col-lg-6" style={{marginBottom:"50px"}}>
                    <h3>Education</h3>
                   
                  <p>Primary and Secondary Education Jaihind High School, Devpur Dhule</p>
                  <p>Diploma in Industrial Electronics: S. S. V P. S, College, Devpur Dhule</p>
                  <p>B. E. Computer Engineering: S. S. B. T E. College, Bhambhori, Jalgaon</p>
                  <p>Post Graduate Diploma in Business Management B. M. R., College, Wakad, Pune</p>
                  <p>M.Tech. Income Tax., Bharati University Opinion Engineering College, Katraj</p>
                  <p>Ph.D. started at Rajasthan Tilak University of Maharashtra</p>
                  <p>Passed 5 exams in Sanskrit language.</p>
                  <p>Passed 5 exams of Philosophy University in Thane,</p>
                  <p>3 Passed the exam of smooth music.</p>
                  <p>3 Papers published internationally</p>
                  <p>2 year old Shrihari Kirtanotajik Sabha completes the annual course of Pune school and first-class</p>
                  <p>Well known as Narrator / Writer, Writer, Interpreter, Speaker, Nardian Artist</p>
                 
              </div>
            </div>
          </div>
        </div>
           </>
        )
    }
}
