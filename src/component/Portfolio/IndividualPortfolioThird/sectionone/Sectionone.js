import React, { Component } from 'react'
import '../sectionone/sectionone.css'
import project1 from '../../../../images/project1.jpg'
import project2 from '../../../../images/project2.jpg'
import project3 from '../../../../images/project3.jpg'
export default class Sectionone extends Component {
  render() {
    return (
      <div className="bg-clr">
      <div className="container pt-5" >
      <div className="row">

      <h2 className="pb-5 pl-4">OTHER PROJECTS</h2>
      </div>
      </div>
      <div className="container">
      <div className="row">
      
      <div className="col-md-4 p-0">
      
      <div class="content">
<a href="#" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={project1}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a>
</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-4 p-0">
      <div class="content">
<a href="#" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={project2}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="spans pfont">View details</span>
</a>
</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-4 p-0 pb-5">
      <div class="content">
<a href="#" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={project3}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a>
</div>
</div>
</a>
</div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
