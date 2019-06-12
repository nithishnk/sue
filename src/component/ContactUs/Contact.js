import React, { Component } from 'react';
import SectionOne from './header'
import SectionTwo from './Form'
import SectionThree from './map'
export default class Home extends Component {
render()
{
return(
<div>
<SectionOne/>
<SectionTwo/>
<SectionThree/>
</div>
)
}
}