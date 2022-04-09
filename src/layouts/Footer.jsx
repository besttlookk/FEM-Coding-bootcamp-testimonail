import React from "react";

const Footer = () => {
  return (
    <div class="text-center md:mt-16 text-primary-gray md:text-base mt-10 pb-8">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className="mx-1 font-bold text-primary-dark hover:underline underline-offset-1"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/besttlookk"
        target="_blank"
        rel="noreferrer"
        className="mx-1 font-bold text-primary-dark hover:underline underline-offset-1"
      >
        Prabhash Ranjan
      </a>
      .
    </div>
  );
};

export default Footer;
