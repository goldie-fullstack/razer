import React, { Component } from 'react'
import classnames from 'classnames'

 export default class Banner extends Component {
  render() {

    const { content } = this.props

    return (
      <>
        <div className={classnames('section-banner', { 'spartial-audio' : content.addedClass})}>
          <div className="container">
            <p className={classnames('heading', { 'heading-green' : content.addedClass})}>{content.heading}</p>
            <p className={classnames('description', { 'description-md' : content.addedClass})}>{content.description}</p>

             {content.image && 
              <ul className="razer-support">
                {content.image.map((itemBanner, index) => (
                  <li key={index} className="support-item"><img src={itemBanner} className="support-image" alt="" /></li>
                ))}
              </ul>}

            <div className="holder-logo">
              <img src={content.imageThree} className="image-logo" alt="" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
