import React, { Component } from 'react';
import './SectionFour.css'
import Logo1 from '../../../images/logo01.png'
export default class About extends Component {
render()
{
return(
<div className="pl-3 pr-3">
<div className="container-fluid" style={{backgroundColor:"#f3f3f3"}}>
<div className="container afterimage" data-aos="fade-right">
<h1 className="modifiedtext" >THE TALENT BEHIND THE REPUTATION</h1>
<h2 style={{fontFamily:"lora",fontStyle:"italic",color:"rgb(146, 146, 146)",paddingBottom:"20px",paddingTop:"20px"}}>Design your interior to be timeless, sustainable, efficient and beautiful.</h2>
<p className="fourthsectionpara"><strong>With Sue</strong> dedication and passion her warehouse now consists of 3000 sq ft of impressive furniture and decor to fill a house from needing a simple layer of WOW to a completely vacant property. </p>
<p className="fourthsectionpara">Once she is done with her property, they say that it does look like model homes.⠀
Sue is extremely focussed and does her best with each project. </p>
<p className="fourthsectionpara"> Her goal for each property is that she transforms it into getting it sold for TOP DOLLAR in record time! 
When Sue is not working she loves spending quiet time in her backyard oasis as well as hosting pool parties for family and friends.</p>
<p className="fourthsectionpara">Sue raises funds for Breast Cancer Research (Sue is an eight-year survivor) and volunteers in many ways.
Feel free to contact me for all of your staging needs.</p>
<h1 className="modifiedtext" style={{fontSize:"35px",paddingTop:"30px"}}>Instagram Photos</h1>
<div className="row pt-5 pb-5">
<div className="col-md-3 col-sm-12 alignment pt-1">
<img src={Logo1}/>
</div>
<div className="col-md-3 col-sm-12 alignment pt-1">
<img src={Logo1}/>
</div>
<div className="col-md-3 col-sm-12 alignment pt-1">
<img src={Logo1}/>
</div>
<div className="col-md-3 col-sm-12 alignment pt-1">
<img src={Logo1}/>
</div>
</div>
</div>
</div>
</div>
)
}
}