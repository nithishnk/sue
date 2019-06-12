import React, { Component } from 'react'
import SectionOne from './sectionone/Sectionone'
import Enquiry from '../../Enquiry/Enquiry'
import Banner from '../vacant/BannerSection/Banner'
import Tabls from '../vacant/Tabl/Tabl'
import SectionTwo from '../vacant/SectionTwo/SectionTwo'
import SectionFour from '../vacant/SectionFour/SectionFour'
export default class IndividualPortfolio extends Component {
  render() {
    return (
	<div>
	<Banner/>
	{/*<Tabls/>*/}
	<SectionTwo/>
	<SectionOne/>
	<SectionFour/>
	<Enquiry/>

	</div>
	)
	}
	}
	