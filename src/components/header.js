import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import classnames from 'classnames'

import ThxLogo from '../assets/images/wordmark.svg'

 export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <img src={ThxLogo} className="img-logo" alt="" /> 

          <ul className="menu-wrapper">
            <li className="menu-item"><Link to="/" className="menu-link">PRODUCTS</Link></li>
            <li className="menu-item"><Link to="/" className="menu-link">ABOUT</Link></li>
            <li className="menu-item"><Link to="/" className="menu-link">COMMUNITY</Link></li>
            <li className="menu-item"><Link to="/" className="menu-link">CONTACT US</Link></li>
            <li className="menu-item"><Link to="/" className="btn-green">BUY NOW</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}
