import React, { Component } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';
import "../App.css";
import {Link,Redirect} from "react-router-dom";
import axios from "axios";

export default class Gallery extends Component { 
  
  constructor(props){
    super(props);

    this.state={
      data:[],
      contentType:"",
      bata:""
    }
  }

componentDidMount=()=>{
  this.getBlogPost();
}

  getBlogPost=()=>{
    axios.get("http://localhost:2000/images")
    .then((response)=>{
      
      const data=(response.data);
      this.setState({data:data,contentType:data[0].image.img.contentType,bata:data[0].image.img.data.data});
      console.log("images has been recieved");
      console.log(this.state.data.image.img.data.data);
      
     

    })
    .catch(()=>{
      alert("Error retrieving data!!");
    })
  }


   
render() {
      
      
        return (
            <div>
                <Navbar/>
                <div className="App">
                <div>
                  

			
<img src={"data:image/png;base64," +
            new String(Base64.encode(this.bata)) +
            "/"       }            />
     
    
                </div>
                

                </div>
                <Footer/>
            </div>
           
        )
    }
}
