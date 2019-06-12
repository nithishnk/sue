import React, { Component } from 'react'
import '../sectionfirst/sectionfirst.css'
import banner from '../../../../images/banner.jpg'

export default class Sectionfirst extends Component {
  render() {
    return (

      <div className="bg-clr">
      <div>
      <img className="img-property" src={banner}></img>
      </div>
      <div className="container ">
      <div className="row ">
      <div className="col-md-6">
        <h2 className="mt-5"></h2>
        <span className="txt-property">Transformed it into a beautiful home with enormous natural lights.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5">After inspecting and analyzing the residence up for sale, the most obvious issues were taken care of before home staging. Our opulent furnishings make the home a welcoming and alluring place that makes a customer feel happy and vibrant. It involved a lot of change in colour and other architectural changes.</p>
        <h6 className="share">SHARE</h6>
        <div className="share">
        <i class="fab fa-facebook p-1"></i>
        <i class="fab fa-twitter-square p-1"></i>
        <i class="fab fa-google-plus p-1"></i>
        <i class="fab fa-linkedin p-1"></i>
        <i class="fab fa-pinterest-square p-1"></i>
        </div>
        </div> 
      </div>
      </div> 
        
      </div>
    )
  }
}
