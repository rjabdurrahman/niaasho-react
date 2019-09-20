import React, { Component } from 'react';
import './Slider.css';

export class Slider extends Component {
    render() {
        return (
            <div className="w3-content w3-display-container" style={{ maxWidth: '800px', position: 'relative' }}>
                <img className="mySlides" src={process.env.PUBLIC_URL + 'slider/img_nature_wide.jpg'} alt="Slide 1" style={{ width: '100%' }} />
                <img className="mySlides" src={process.env.PUBLIC_URL + 'slider/img_snow_wide.jpg'} alt="Slide 2" style={{ width: '100%' }} />
                <img className="mySlides" src={process.env.PUBLIC_URL + 'slider/img_mountains_wide.jpg'} alt="Slide 3" style={{ width: '100%' }} />
                <div className="w3-center w3-container w3-section w3-large w3-text-white" style={{ width: '100%', position: 'absolute', bottom: 0 }}>
                    <div className="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">❮</div>
                    <div className="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">❯</div>
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)" />
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)" />
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)" />
                </div>
            </div>
        )
    }
}

export default Slider
