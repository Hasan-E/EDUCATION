import React from "react";
import {Carousel} from "react-bootstrap"
const Slider = () => {
  return (
    <div>
      <Carousel fade autoPlay={true} interval={5000}>
        <Carousel.Item>
          <img
            className="w-100 "
            style={{ height: "500px", objectFit: "cover" }}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
