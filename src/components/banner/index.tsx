import "./index.css";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

export default function Banner(props: any) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any, e) => {
    setIndex(selectedIndex);
  };
  console.log(props);
  return (
    <div className="banner-main">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="d-block w-100">
            Test
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

// https://cdn.sanity.io/images/lwzct5bl/production/771eb7f772019fc0e4623a3963f25b0729114603-760x300.jpg
