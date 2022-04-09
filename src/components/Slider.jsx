import React from "react";
import pattern from "../images/pattern-bg.svg";
import prevIcon from "../images/icon-prev.svg";
import nextIcon from "../images/icon-next.svg";

const Slider = ({ data, handlePrev, handleNext }) => {
  return (
    <div className="relative flex items-center justify-center w-full mx-auto h-96 lg:order-2 lg:w-96">
      <img
        src={pattern}
        alt="pattern"
        className="absolute inset-0 w-full h-full "
      />
      <div className="relative mx-auto shadow-2xl w-80 h-80">
        <img
          alt="user"
          src={require(`../images/image-${data.image}.jpg`)}
          className="relative z-20 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 z-50 flex items-center gap-8 px-6 py-4 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full left-1/2">
          <img
            alt="prev"
            src={prevIcon}
            onClick={handlePrev}
            className="transition transform cursor-pointer hover:scale-110"
          />
          <img
            alt="next"
            src={nextIcon}
            onClick={handleNext}
            className="transition transform cursor-pointer hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
