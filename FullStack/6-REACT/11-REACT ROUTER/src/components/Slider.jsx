import React from "react";
import {Carousel} from "react-bootstrap"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
const Slider = () => {
  return (
    <div>
      <Carousel fade autoPlay={true} interval={5000}>
        <Carousel.Item>
          <img
          src={img1}
            className="w-100 "
            style={{ height: "500px", objectFit: "cover" }}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          src={img2}
            className="w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          src={img3}
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
