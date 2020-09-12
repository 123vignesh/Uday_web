import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";
import axios from "axios";
import Common from './Common';
import SimpleImageSlider from "react-simple-image-slider";
export default class Gallery extends Component { 
  
  constructor(props){
    super(props);

    this.state={
      
      data:[]
      
    }
  }

componentDidMount=()=>{
  this.getBlogPost();
  
}

  getBlogPost=()=>{
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
  
  var images = [];
  var rows=[];
  var caro=[];
console.log(this.state.data);
  for(var i=0;i<this.state.data.length;i++){
    if(this.state.data[i].page==="Gallery"){
    images.push(<div className="final">
    <div className="single" >
      <img id="paaru" src= {`data:${this.state.data[i].contentType};base64,${this.state.data[i].image}`}   />
      <div style={{width:"500px"}}><h3>{this.state.data[i].desc}</h3></div>
     </div>
     </div>
      );
    }
  }


    for(var j=0;j<this.state.data.length;j++){
      
      
          
      for(var k=j+1;k<this.state.data.length;k++){
        if(this.state.data[j].page==="gallery" && this.state.data[j].desc===this.state.data[k].desc){
          rows.push({url:  `data:${this.state.data[j].contentType};base64,${this.state.data[j].image}`}
          );
          rows.push({url:  `data:${this.state.data[k].contentType};base64,${this.state.data[k].image}`}
          );
          
          caro.push(<div className="final">
          <div className="single">
             <SimpleImageSlider
                       width={500}
                      height={300}
                      images={rows}
                      className="paaru"
                     id="kaaru"     />
    <div style={{width:"500px"}}><h3>{this.state.data[j].desc}</h3></div>
          
          </div>
          </div>);
        }
      }
    
    }
    
    
return (
           
  <>   
  
  <Common name="Gallery"/>           
<div className="past">
              {images}
              {caro}

</div>

</>
)
    }
}
