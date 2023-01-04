import React from "react";
import Image from "next/image";
import onim from "../images/onim.svg";

const Footer = () => {
  return (
    <div className="text-center mt-8">
      <p className="">2022 Babadom All rights reserved</p>
      <p className="">Designed by</p>
      <Image src={onim} alt="onim-logo" className="" height={50} />
      
    </div>
  );
};

export default Footer;
