/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare,faPhoneAlt,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Common from './Common';
import axios from "axios";
export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            phone:"",
            subject:"",
            message:""
    };
}
   
    handleChangeMessage = event =>{
        this.setState({
            message:event.target.value
        });
    }
    handleChangeName = event =>{
        this.setState({
            name:event.target.value
        });
    }
    handleChangeEmail= event =>{
        this.setState({
            email:event.target.value
        });
    }
    handleChangeSubject= event =>{
        this.setState({
            subject:event.target.value
        });
    }
    handleChangePhone= event =>{
        this.setState({
            phone:event.target.value
        });
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state);
        var user = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            subject:this.state.subject,
            message:this.state.message
        }
        axios
      .post("http://localhost:2000/users",user)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    }
    render(){
        return( 
        <>
            <Common name="Contact"/>
{/* contact information start */}
            <div className="container mt-5 paata"  >
                <div className="row">
                    <div class="col-lg-4 col-md-4 col-12">
                    <div className="icon-box icon-box-green text-center">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:"40px", color: "#18d26e"}}/>
                            </div>
                            <div className="mt-3">
                            <p>A24, Kunal Nest Manik Colony,Pimpri Chinchwad Link Road, Chinchwad, Pune, 411033</p>
                            </div>
                        </div> 
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="icon-box icon-box-green text-center">
                            <div className="icon">
                            <FontAwesomeIcon icon={faPhoneAlt} style={{fontSize:"40px",color: "#18d26e"}}/>
                            </div>
                            <div className="mt-3">
                           <p><a style={{color:"black",textDecoration:"none"}} href="tel:+91 97669 38249">+91 97669 38249</a></p>
                           <p><a style={{color:"black",textDecoration:"none"}} href="tel:+9198505 34525">+9198505 34525</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="icon-box icon-box-green text-center">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelopeSquare} style={{fontSize:"40px",color: "#18d26e"}}/>
                            </div>
                            <div className="mt-3">
                            <p><a style={{color:"black",textDecoration:"none"}} href="mailto:patkarudayc@gmail.com">patkarudayc@gmail.com</a></p>
                            <p><a style={{color:"black",textDecoration:"none"}} href="mailto:support@udaypatkar.com">support@udaypatkar.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
{/* contact information end */}

{/* form start */}
            <div className="my-5">
                <h1 className="text-center" style={{color:"#16162D"}}>Contact Me</h1>
                <p className="text-center cont">Fields marked with an <span style={{color:"red"}}>*</span> are required</p>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-8 col-10 mx-auto">  

    <form style={{marginBottom:"200px"}} onSubmit={this.handleSubmit}>
                    <div class="form-group mb-4 cont" >
                        <label for="exampleFormControlInput1">Full Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" 
                        name="name"
                        value={this.state.name}
                        onChange = {this.handleChangeName}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlInput1">Phone<span style={{color:"red"}}>*</span></label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" 
                        name="phone"
                        value={this.state.phone}
                        onChange = {this.handleChangePhone}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlInput1">Email address<span style={{color:"red"}}>*</span></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" 
                        name="email"
                        value={this.state.email}
                        onChange = {this.handleChangeEmail}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlInput1">Subject<span style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" 
                        name="subject"
                        value={this.state.subject}
                        onChange = {this.handleChangeSubject}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlTextarea1">Any Suggestion</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                        style={{backgroundColor:"#F8F8F8",border: "2px solid #ccc"}}
                        name="message"
                        value={this.state.message}
                        onChange = {this.handleChangeMessage}
                        required></textarea>
                    </div>

                    <div class="col-12 text-center">
                        <button type="submit">Send Message</button>
                    </div>
    </form>

                    </div>
                </div>
            </div>
{/* form end */}
        </>
        )
    };
};