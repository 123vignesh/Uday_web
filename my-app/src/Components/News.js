import React, { Component } from 'react';
import Footer from "./Footer";
import pintro from "../images/image.jpg"
// import "../App.css";
import {Link,Redirect} from "react-router-dom";
import Common from './Common';
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
export default class News extends Component { 
  
  constructor(props){
    super(props);

    this.state={
      data:[]
    }
  }
  componentDidMount=()=>{
    this.getNewPost();
  }
  getNewPost=()=>{
    axios.get("http://localhost:4000/image")
    .then((response)=>{
      console.log("images has been recieved");
      console.log(response.data);
      const data=(response.data);
      console.log(response.data.page);
this.setState({data:data});
     
      
      })
    .catch(()=>{
      alert("Error retrieving data!!");
    })
  }
    render() {

      var rows = [];
     
 
      var images = [];
      var rows=[];
      var caro=[];
    console.log(this.state.data);
      for(var i=0;i<this.state.data.length;i++){
        if(this.state.data[i].page==="News"){
        images.push(<div className="single" style={{width:"500px"}}>
          <img  src= {`data:${this.state.data[i].contentType};base64,${this.state.data[i].image}`}  style={{width:"500px",height:"300px"}} />
          <div style={{width:"500px"}}><h3>{this.state.data[i].desc}</h3></div>
         </div>
          );
        }
      }
    
    
        for(var j=0;j<this.state.data.length;j++){
          
          
              
          for(var k=j+1;k<this.state.data.length;k++){
            if(this.state.data[j].page==="news" && this.state.data[j].desc===this.state.data[k].desc){
              rows.push({url:  `data:${this.state.data[j].contentType};base64,${this.state.data[j].image}`}
              );
              rows.push({url:  `data:${this.state.data[k].contentType};base64,${this.state.data[k].image}`}
              );
              
              caro.push(<div className="single">
                 <SimpleImageSlider
                           width={500}
                          height={300}
                          images={rows}
             
                          style={{width:"500px",height:"300px"}}      />
        <div style={{width:"500px"}}><h3>{this.state.data[j].desc}</h3></div>
              
              </div>);
            }
          }
        
        }
        return (
          <>
          <Common name="News"/>
          
          <div className="final">
              {images}


</div>
{caro}
                    
                 
            
           </>
        )
    }
}
