import React, { Component } from 'react'
import HomeStageSectionOne from './HomeStageSectionOne/HomeStageSectionOne'
import HomePageSectionTwo from './HomeStageSectionTwo/HomeStageSectionTwo'
import HomePageSectionThree from './HomeStageSectionThree/HomeStageSectionThree'
import HomePageSectionFour from './HomeStageSectionFour/HomeStageSectionFour'
import Quote from './TextSlider/Quote'
import TextSlider from './TextSlider/TextSlider'
import HomePageSectionSubFive from './HomeStageSectionSubFive/HomeStageSectionSubFive'
import HomePageSectionFive from './HomeStageSectionFive/HomeStageSectionFive'
import HomePageSectionPhoto from './HomeStageSectionPhoto/HomeStageSectionPhoto'
export default class HomePage extends Component {
  render() {
    return (
      <div>
       <HomeStageSectionOne/>
       <HomePageSectionTwo/> 
       <HomePageSectionThree/> 
       <HomePageSectionFour/> 
       <HomePageSectionPhoto/>
       <HomePageSectionSubFive/>
       <HomePageSectionFive/>
       <Quote/>
       <TextSlider/> 
      </div>
    )
  }
}
