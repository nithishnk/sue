import React, { Component } from 'react'

export default class map extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{paddingTop:"20px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7582154102947!2d77.58397661430394!3d12.923255619435064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15618cc6444f:0x7a633a2e9a181d3!2sNvest+Campus!5e0!3m2!1sen!2sin!4v1558700280293!5m2!1sen!2sin" style={{width:"100%", height:"500px"}} ></iframe>
            </div>
            </div>
        )
    }
}
