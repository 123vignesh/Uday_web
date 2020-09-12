import React, { Component } from 'react'
import styled from "styled-components";
export default class Footer extends Component {
    render() {
        return (
            <>
              <div className="Bapp" style={{backgroundColor:"#003366",position: "fixed",
   left: "0",
   bottom: "0",
   width: "100%",
   color: "white",
   textAlign: "center",height:"40px"}}>
                   <footer className="container">
                       <div className="columns">
                           <div className="column">
                               <p>@Prof.C.Uday Patkar website</p>
                           </div>
                       </div>
                   </footer>


              </div>

            </>
        )
    }
}
