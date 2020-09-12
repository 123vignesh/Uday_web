/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
export default class Common extends Component {
    render(){
    return (
    <>
    <div className="common">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        </div>
    </>
        );
    };
}

