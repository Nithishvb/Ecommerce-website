import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  return (
    <div className="w-[1100px] py-10 mx-auto">
      <Slide arrows={false}>
        <div key={1}>
          <div>
            <Image
              src={require("../../assets/images/Frame 560.png")}
              alt="home_slider"
              width={1200}
              height={1500}
            />
          </div>
        </div>
        <div key={2}>
          <div>
            <Image
              src={require("../../assets/images/Frame 560.png")}
              alt="home_slider"
              width={1200}
              height={1500}
            />
          </div>
        </div>
        <div key={3}>
          <div>
            <Image
              src={require("../../assets/images/Frame 560.png")}
              alt="home_slider"
              width={1200}
              height={1500}
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ImageSlider;
