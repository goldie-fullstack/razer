import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ThxLogo from '../assets/images/razer-nari-thx-logo.png'
import ChromaLogo from '../assets/images/razer-nari-chroma-logo.png'
import RazerLogo from '../assets/images/razer-nari-logo.svg'
import GelLogo from '../assets/images/razer-nari-Cooling-Gel-Infused-Cushions-icon.svg'

import '../stylesheets/main.scss'

export default class Home extends Component { 
  render() {   
    
     return (
       <main className="homepage">
        <div className="section-banner">
          <div className="container">
            <p className="heading">SUPREME WIRELESS IMMERSION</p>
            <p className="description">When it comes to gaming immersion, sound plays a critical role. It engages your sense of hearing to determine the atmosphere and mood, creating a lifelike experience that lets you truly embody your game character. Standing by this philosophy, we’ve built a headset with THX Spatial Audio to bring you 360° positional sound, giving you greater spatial awareness. We’ve also added ergonomic design features to make this one of the most comfortable daily drivers for gaming. This is the Razer Nari.</p>

            <ul className="razer-support">
              <li className="support-item"><img src={ThxLogo} className="support-image" alt="" /></li>
              <li className="support-item"><img src={ChromaLogo} className="support-image" alt="" /></li>
            </ul>

            <div className="holder-logo">
              <img src={RazerLogo} className="image-logo" alt="" />
            </div>
          </div>
        </div>

        <div className="section-complement">
          <div className="container">
            <p className="heading">COMPLEMENTED BY COMFORT</p>
            <p className="description">The Razer Nari is designed so that its immersive technology is complemented by comfortable features, letting you escape into game worlds for hours without strain.</p>

            <div className="feature-wrapper">
              <div className="feature-item">
                <img className="feature-img" src={GelLogo} alt=""/>
                <p className="feature-name">Cooling Gel-Infused Cushions</p>
                <p className="feature-desc">Reduces heat build-up during intense gaming sessions</p>
              </div>

              <div className="feature-item">
                <img className="feature-img" src={GelLogo} alt=""/>
                <p className="feature-name">Auto-Adjusting Headband</p>
                <p className="feature-desc">Maximum adjustability to fit seamlessly onto any head size</p>
              </div>

              <div className="feature-item">
                <img className="feature-img" src={GelLogo} alt=""/>
                <p className="feature-name">Swiveling Earcups</p>
                <p className="feature-desc">Adapting to the shape and position of your ears</p>
              </div>

              <div className="feature-item">
                <img className="feature-img" src={GelLogo} alt=""/>
                <p className="feature-name">Game/Chat Balance</p>
                <p className="feature-desc">Fine-tune between game and chat volume for the perfect mix that lets you enjoy immersive sound without interrupting team communication.</p>
              </div>

              <div className="feature-item">
                <img className="feature-img" src={GelLogo} alt=""/>
                <p className="feature-name">2.4GHz Wireless Audio</p>
                <p className="feature-desc">Get lag-free, high-fidelity gaming audio with a wireless range of up to 
12 meters smoothly without disconnection.</p>
              </div>

              <div className="feature-item">
                <img className="feature-img" src={GelLogo} alt=""/>
                <p className="feature-name">Wired Mode</p>
                <p className="feature-desc">Get seamless cross-platform 
compatibility via a 3.5 mm audio jack in wired mode. Enjoy high quality stereo sound whether you’re playing on PC, 
consoles or mobile.</p>
              </div>
            </div>
          </div>
        </div>
       </main>
     )
  }
}