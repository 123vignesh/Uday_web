import React, { Component } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";

import "../App.css";
import {Link,Redirect} from "react-router-dom";
import axios from "axios";

export default class Gallery extends Component { 
  
  constructor(props){
    super(props);

    this.state={
      data:[],
      url:""
    }
  }

componentDidMount=()=>{
  this.getBlogPost();
}

  getBlogPost=()=>{
    axios.get("http://localhost:2000/images")
    .then((response)=>{
      
      const data=(response.data);
      const url=(response.data[0].image);
      this.setState({data:data,url:url});
      console.log("images has been recieved");
      console.log(this.state.data);
     console.log(this.state.data.length);
      
      })
    .catch(()=>{
      alert("Error retrieving data!!");
    })
  }


   
render() {
  
  var rows = [];
for (var i = 0; i < (this.state.data.length); i++) {
    
    rows.push(<img key={this.state.data.id} src={this.state.data[i].image} style={{width:"20%",marginLeft:"20px",float:"left"}}/>);
}
  

      
     
        return (
            <div>
                <Navbar/>
                <div className="App">
                <div>
                  

		{rows}
   	
  

     
    
                </div>
                

                </div>
                <Footer/>
            </div>
           
        )
    }
}
