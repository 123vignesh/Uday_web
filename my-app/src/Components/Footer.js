import React, { Component } from 'react'
import styled from "styled-components";
export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                @Udhay_patkar
            </FooterContainer>
        )
    }
}
//FooterContainer
const FooterContainer = styled.footer`
background:grey;
height:4rem;
position:fixed;
left:0;
bottom:0;
width:100%;
padding-left:550px;
padding-top:5px;

`;