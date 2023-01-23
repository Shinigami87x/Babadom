import React from "react";
import Image from "next/image";
import onim from "../images/onim.svg";

const Footer = () => {
  return (
    <div className="m-auto text-center mt-8">
      <p className="">2023 Babadom All rights reserved</p>
      <p className="">Designed by</p>
      <Image src={onim} alt="onim-logo" className="block mx-auto pb-8" height={50} />
    </div>
  );
};

export default Footer;
