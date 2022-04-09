import React, { useState } from "react";
import Quotation from "./Quotation";
import Slider from "./Slider";
import dataArr from "../data.json";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === dataArr.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex === 0) setCurrentIndex(dataArr.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="flex flex-col max-w-xs gap-10 mx-auto w-90w lg:flex-row lg:max-w-4xl lg:gap-0 lg:items-center">
      <Slider
        data={dataArr[currentIndex]}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <Quotation data={dataArr[currentIndex]} />
    </div>
  );
};

export default Card;
