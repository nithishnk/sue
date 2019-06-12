import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import s from '../../images/logo.png';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './HomeFooter.css'
export default class HomeFooter extends Component {
    render() {
        return (
            <div>
            <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('../../images/sofa.jpg')}
              bgImageAlt="Men"
              strength={200}
            >
        <div className="parallax_main_footer">
            <div className="container">
                <div className="footer-Home-width">
            <img
        src={s}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt=" logo"
      />
            <h1 className="pt-5">LET’S HEAR YOU!</h1>
<h4 className="footer_text_Home">Ready to take it a step further? Let’s start talking about your project or idea and find out how we can help you.</h4>
<ButtonToolbar>
                          <Button href="#">Request a free quote</Button>
                          </ButtonToolbar>
                          <i class="fab fa-facebook-f"></i>
                          <i class="fab fa-twitter"></i>
                          <i class="fab fa-google-plus-g"></i>
                          <i class="fab fa-pinterest-p"></i>
            </div>

            <div className="row mx-0">
<div className="col-md-6">
    <ul >

        <li className="Text_footer_home_Contant-header">HEAD OFFICE</li>
        <li className="Text_footer_home_Contant">Home & Decor</li>
        <li className="Text_footer_home_Contant">22 N 12th St New York, NY</li>
        <li className="Text_footer_home_Contant">contact@yoursite.com</li>
    </ul>
    </div>
    <div className="col-md-6">
    <ul>

        <li className="Text_footer_home_Contant-header_sub">REPRESENTATIVE OFFICE</li>
        <li className="Text_footer_home_Contant_sub">Home & Decor</li>
        <li className="Text_footer_home_Contant_sub">Bolder Folsom Ave, Suite 600, San Francisco</li>
        <li className="Text_footer_home_Contant_sub">contact@yoursite.com</li>
    </ul>
    </div>


            </div>
            <hr/>

            <div className="row mx-0">
<div className="col-md-6">
            <ul >


<li className="Text_footer_home_Contant-S">© 2015 deTheme. Quality WordPress Theme by Elite Author</li>
</ul>
</div>
<div className="col-md-6">
            <ul>

            <li className="Text_footer_home_Contant_sub-S">Hand-crafted in Java island</li>
           </ul>
           </div>
              </div>
            </div>
              </div>
              <div style={{ height: '20px' }} />
            </Parallax>
            
                    </div>
        )
    }
}
