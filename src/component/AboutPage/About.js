import React, { Component } from 'react';
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/Firstsec'
import SectionThree from './SectionThree/Education'
import SectionThreea from './SectionThreea/EducationImage'
import SectionFour from './SectionFour/SectionFour'
import Enquiry from '../Enquiry/Enquiry'


export default class Home extends Component {
render()
{
return(
<div>
<SectionOne/>
<SectionTwo/>
<SectionThree/>
<SectionThreea/>
<SectionFour/>
<Enquiry/>
</div>
)
}
}