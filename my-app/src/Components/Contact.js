import React, { Component } from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../App.css";
import {Link,Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEnvelopeSquare,faLocationArrow,faPhone } from '@fortawesome/free-solid-svg-icons'



export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            phone:"",
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
    handleChangePhone= event =>{
        this.setState({
            phone:event.target.value
        });
    }

    handleSubmit = event =>{
        event.preventDefault();
    }
    
    render() {
        
         return (
            <div>
                <Navbar />
         <div className="fat">
             
             <div style={{marginRight:"100px",marginLeft:"7px"}}>
                 <FontAwesomeIcon icon={faLocationArrow} style={{fontSize:"50px"}}/>
                 <p>A24, Kunal Nest Manik Colony, Pimpri Chinchwad Link</p> <p>Road,Opposite Ambika Super Shopee Front, Near Darshan </p>
                 <p>Hall, Chinchwad, Pune, 411033</p>
                 
             </div>
             <div style={{marginRight:"160px",marginLeft:"380"}}>
             <FontAwesomeIcon icon={faEnvelopeSquare} style={{fontSize:"50px"}}/>
             <p>uday.patkar@bharatividyapeeth.edu</p>

             <p> patkarudayc@gmail.com</p>

            <p>support@udaypatkar.com</p>
             </div>

             <div style={{marginRight:"170px",marginLeft:"350"}}>
             <FontAwesomeIcon icon={faPhone} style={{fontSize:"50px"}}/>
             <p>+91 97669 38249</p>

             <p> +9198505 34525</p>
             </div>
             
            

         </div>



                <div className="App">
                    <h1 style={{marginTop:"100px"}}>Contact Information</h1>
                
                <form onSubmit={this.handleSubmit} style={{marginTop:"50px",marginBottom:"100px"}}>
                    
                    <input 
                    type="text"
                    placeholder="Name" 
                    value={this.state.name}
                    name="name"
                    onChange = {this.handleChangeName}
                    style={{width:"550px" ,height:"40px",padding:"5px"}}
                    required/>
                  
                    <div></div>
                    <input type="email"
                    placeholder="Email" 
                    value={this.state.email}
                    name="email"
                    style={{width:"550px" ,marginTop:"20px" ,height:"40px",padding:"5px"}}
                    onChange = {this.handleChangeEmail} required/>
                       <div></div>
                   
                    <input type="text" 
                    value={this.state.phone}
                    placeholder="Phone no"
                    name="phone"
                    style={{width:"550px" ,marginTop:"20px",height:"40px",padding:"5px"}}
                    onChange = {this.handleChangePhone} required/><br/>
                              
                   
                    <textarea type="text" 
                    value={this.state.message}
                    placeholder="Message"
                    name="message"
                    style={{width:"550px" ,marginTop:"20px",height:"90px",padding:"5px"}}
                    onChange = {this.handleChangeMessage} />  <br/>

              <button type="submit"  style={{width:"300px" ,marginTop:"20px",backgroundColor:"blue",color:"black",height:"60px"}}>Submit</button>
                </form>
                </div>
                <Footer/>
            </div>
        )
    }
}
