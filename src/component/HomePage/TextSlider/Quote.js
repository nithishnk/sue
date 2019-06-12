import React, { Component } from 'react'
import Quotes from '../../../images/quote.png'
import './quote.css'
export default class Quote extends Component {
  render() {
    return (
      <div className="quote-back">
        <div className="container text-center">
        <img className="quote-style" src={Quotes}></img>
        </div>
      </div>
    )
  }
}
