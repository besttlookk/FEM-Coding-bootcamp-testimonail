import React from "react";

const Quotation = ({ data }) => {
  return (
    <figure className="z-40 p-5 bg-top bg-no-repeat bg-quote lg:relative lg:-right-20">
      <blockquote>
        <p className="max-w-xs mx-auto text-lg text-center text-gray-600 quote lg:text-2xl lg:relative lg:text-left lg:max-w-none">
          {data.quote}
        </p>
      </blockquote>
      <figcaption className="flex flex-col mt-5 text-center lg:text-left lg:flex-row lg:gap-2 lg:items-center">
        <cite className="text-lg font-bold">{data.author}</cite>
        <span className=" text-light">{data.post}</span>
      </figcaption>
    </figure>
  );
};

export default Quotation;
