import React, { Component } from 'react'
import './Firstsec.css'
import Image from '../../../images/background1.jpg'
export default class Firstsec extends Component {
    render() {
        return (
<div className="parent1">
            <div className="container-fluid a">
			<div className="imagess">
                <img src={Image} className="img-fluid"/>
				</div>
                    
<div className="container">
                    <div className="row ab">
                     
                            <div className="col-md-6 col-sm-12" data-aos="fade-right">
                                <p className="text1" >HI! GOOD TO SEE YOU</p>
                                <p className="text2">I LOVE when the sold price is a record-breaking price for the street…which happens OFTEN!” Sue Kempton.</p>
                            </div>

                            <div className="col-md-6 col-sm-12" data-aos="fade-left">
                                <p className="text3">Sue Kempton has over 20 years of experience in home staging. Sue is extremely focussed and does her best with each project. Her goal for each property is that she transforms it into getting it sold for TOP DOLLAR in record time! </p>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
           
        )
    }
}
