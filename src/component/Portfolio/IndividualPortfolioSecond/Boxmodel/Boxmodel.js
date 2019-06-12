import React, { Component } from 'react'
import {  Modal,  } from 'react-bootstrap';
import Sofa from '../../../../images/sofa.png'
import Hall from '../../../../images/hall.png'
import Bed from '../../../../images/bedroomimage.png'
import Lift from '../../../../images/lift.png'
import Cross from '../../../../images/cross.png'
import floor from '../../../../images/floor.png'
import './Boxmodel.css'

export default class Boxmodel extends Component {
    constructor(props, context,context1) {
      super(props, context,context1);
      this.handleShow = this.handleShow.bind(this);
    
      this.handleClose = this.handleClose.bind(this);
      this.state = {
        show: false,
        vis:false,
      };
    }
   
    
    handleClose() {
      this.setState({ show: false,vis:false, show1: false,show2:false,show3:false,show4:false });
    }
   handleShow() {
      this.setState({ show: true });
    }
    seondHandleShow=()=>{
      this.setState({ vis: true });
    }
   HandleShow1=()=>{
      this.setState({ show1: true });
    }
    HandleShow2=()=>{
      this.setState({ show2: true });
    }
    HandleShow3=()=>{
      this.setState({ show3: true });
    }
    HandleShow4=()=>{
      this.setState({ show4: true });
    }
  
    render() {
      return (
        <>
        <div className="bg-clr">
        <div class="container Container_Padding_Images ">
          <div className="row mx-0">
          <div class="col-md-6">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={Sofa}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.handleShow}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>
</div>

<div class="col-md-6 pT-Section">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={Hall}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>

					<p onClick={this.HandleShow1}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div>  </a>    
		
		</article>  
</div>
<div className="Sub_Enter">
<div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={Bed}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.seondHandleShow}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div>  </a>    
		
		</article>  
</div>
</div>
</div>
<div className="col-md-12 Enter_Section">
<div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={Lift }  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.HandleShow2}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>

</div>
<div class="col-md-6 Enter_Section ">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={floor}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.HandleShow3}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>
</div>
<div class="col-md-6 Enter_Section">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={Cross}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.HandleShow4}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>
</div>
</div>
</div>


        
  
          <Modal show={this.state.show} onHide={this.handleClose}>
          <img class="content-ima" src={Sofa}/>
          </Modal>
          <Modal show={this.state.show1} onHide={this.handleClose}>
          <img class="content-ima" src={Hall}/>
          </Modal>
          <Modal show={this.state.vis} onHide={this.handleClose}>
          <img class="content-ima" src={Bed}/>
          </Modal>
          <Modal show={this.state.show2} onHide={this.handleClose}>
          <img class="content-ima" src={Lift}/>
          </Modal>
          <Modal show={this.state.show3} onHide={this.handleClose}>
          <img class="content-ima" src={floor}/>
          </Modal>
          <Modal show={this.state.show4} onHide={this.handleClose}>
          <img class="content-ima" src={Cross}/>
          </Modal>

          </div>
        </>
      );
    }
  }
  
