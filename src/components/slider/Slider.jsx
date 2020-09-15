import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./Slider.scss";
import SliderImage from "../../img/Slider/SliderImage";

export default class MySlider extends Component {
  render() {
    return (
      <div className="Slider_container">
        <Slider dots className="Slider" autoplay={true} autoplaySpeed={3000}>
          {SliderImage.map((el, i) => (
            <div key={i} className="slider_items">
              <img src={el} alt="el" />
            </div>
          ))}
        </Slider>
      </div>
    );
















































































  }
}
