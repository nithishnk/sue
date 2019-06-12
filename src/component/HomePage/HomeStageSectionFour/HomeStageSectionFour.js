import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import './HomeStageSectionFour.css'
export default class HomeStageSectionFour extends Component {
    render() {
        return (
            <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('../../../images/men.jpg')}
      bgImageAlt="Men"
      strength={200}
    >
<div className="parallax_main">
      <h1 className="parallax_text">SEE OTHER SERVICES</h1>
      </div>
      <div style={{ height: '200px' }} />
    </Parallax>
    
            </div>
        )
    }
}
