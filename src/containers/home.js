import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import { Navigation } from 'swiper/dist/js/swiper.esm'

import Banner from '../components/banner'

import '../stylesheets/main.scss'

import ChromaLogo from '../assets/images/razer-nari-chroma-logo.png'
import RazerLogo from '../assets/images/razer-nari-logo.svg'
import ThxLogo from '../assets/images/razer-nari-thx-logo.png'
import GelIcon from '../assets/images/razer-nari-Cooling-Gel-Infused-Cushions-icon.svg'
import HeadBandIcon from '../assets/images/razer-nari-Auto-Adjusting-Headband-icon.svg'
import GameChatIcon from '../assets/images/razer-nari-Game-Chat-Balance-icon.svg'
import WirelessAudioIcon from '../assets/images/razer-nari-Wireless-Audio-icon.svg'
import EarcupIcon from '../assets/images/razer-nari-Swiveling-Earcups-icon.svg'
import WireModeIcon from '../assets/images/razer-nari-35-mm-Wired-Mode-icon.svg'

import ProductImg1 from '../assets/images/razer-nari-gallery-05-wireless-gaming-headset.jpg'
import ProductImg2 from '../assets/images/razer-nari-gallery-06-wireless-gaming-headset.jpg'
import ProductImg3 from '../assets/images/razer-nari-gallery-07-wireless-gaming-headset.jpg'
import ProductImg4 from '../assets/images/razer-nari-gallery-08-wireless-gaming-headset.jpg'

const complementItem = [
  {
    Image: GelIcon,
    Name: "Cooling Gel-Infused Cushions",
    Description: "Reduces heat build-up during intense gaming sessions",
  },
  {
    Image: HeadBandIcon,
    Name: "Auto-Adjusting Headband",
    Description: "Maximum adjustability to fit seamlessly onto any head size",
  },
  {
    Image: EarcupIcon,
    Name: "Swiveling Earcups",
    Description: "Adapting to the shape and position of your ears",
  },
  {
    Image: GameChatIcon,
    Name: "Game/Chat Balance",
    Description: "Fine-tune between game and chat volume for the perfect mix that lets you enjoy immersive sound without interrupting team communication.",
  },
  {
    Image: WirelessAudioIcon,
    Name: "2.4GHz Wireless Audio",
    Description: "Get lag-free, high-fidelity gaming audio with a wireless range of up to 12 meters smoothly without disconnection.",
  },
  {
    Image: WireModeIcon,
    Name: "Wired Mode",
    Description: "Get seamless cross-platform compatibility via a 3.5 mm audio jack in wired mode. Enjoy high quality stereo sound whether you’re playing on PC, consoles or mobile.",
  },
]

const productItem = [
  {
    ProductImage: ProductImg1
  },
  {
    ProductImage: ProductImg2
  },
  {
    ProductImage: ProductImg3
  },
  {
    ProductImage: ProductImg4
  },
  {
    ProductImage: ProductImg1
  },
  {
    ProductImage: ProductImg2
  },
]

const bannerContentOne = {
  heading: "SUPREME WIRELESS IMMERSION",
  description: "When it comes to gaming immersion, sound plays a critical role. It engages your sense of hearing to determine the atmosphere and mood, creating a lifelike experience that lets you truly embody your game character. Standing by this philosophy, we’ve built a headset with THX Spatial Audio to bring you 360° positional sound, giving you greater spatial awareness. We’ve also added ergonomic design features to make this one of the most comfortable daily drivers for gaming. This is the Razer Nari.",
  image: [ThxLogo, ChromaLogo],
  imageThree: RazerLogo,
}

const bannerContentTwo = {
  heading: "THX SPATIAL AUDIO",
  description: "THX Spatial Audio goes beyond traditional surround sound by simulating sound in a 360° sphere around you. With the Nari Ultimate, you can now react to any in-game movement, even if it’s coming from above or beneath you, giving you heightened senses during your game. Unleash your predatory instincts with sound as a weapon.",
  image: [ThxLogo],
  addedClass: true,
}

export default class Home extends Component { 
  render() {   
    const ProductSwiper = {
      modules: [Navigation],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 4,
      spaceBetween: 15,
    }

     return (
       <main className="homepage">
      
        <Banner content={bannerContentOne} />

        <div className="section-complement">
          <div className="container">
            <p className="heading">COMPLEMENTED BY COMFORT</p>
            <p className="description">The Razer Nari is designed so that its immersive technology is complemented by comfortable features, letting you escape into game worlds for hours without strain.</p>

            <div className="feature-wrapper">
              {complementItem.map((item, index) => (
                <div className="feature-item" key={index}>
                  <img className="feature-img" src={item.Image} alt=""/>
                  <p className="feature-name">{item.Name}</p>
                  <p className="feature-desc">{item.Description}</p>
              </div>
              ))}
            </div>
          </div>
        </div>
       
        <div className="section-products">
          <div className="container">
            <p className="heading">PRODUCT IMAGES</p>

            <Swiper {...ProductSwiper}>
              {productItem.map((product, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={product.ProductImage} className="product-img" alt=""/>

                  <div className="button-action">
                    <button className="btn-green">VIEW FULLSCREEN</button>
                  </div>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
       
        <Banner content={bannerContentTwo} />

        <div className="other-products">
          <div className="container">
            <p className="heading">Explore Other Products</p>
          </div>
        </div>
       </main>
     )
  }
}