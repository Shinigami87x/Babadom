import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div>
    <div className="m-auto max-w-6xl relative">
      <div className="bg-separator bg-no-repeat text-center my-8">
        <h2 className="bg-white relative top-4 w-48 m-auto text-2xl border-black border-2 rounded-full ">Promotion</h2>
        <p className="text-base m-auto mt-8 max-w-5xl">Celebrate With Us</p>
      </div>
    </div>
    <div className="flex flex-row space-x-4 mx-24 w-auto">
      <div
        className="bg-white w-96 h-24 text-right rounded-l-full border-black border-4 border-r-0 p-2 pt-3"
      >
        <p>{discount}</p>
        <h3>{largeText1}</h3>
        <p>{saleTime}</p>
      </div>
      <div className="bg-cover flex-auto max-w-4xl border-black border-t-4">
        <img className="rounded-b-lg drop-shadow-xl cursor-pointer" src={urlFor(image)} />
      </div>
      <div className="bg-white w-96 h-24 rounded-r-full border-black border-4 border-l-0 p-2 pt-3">
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default FooterBanner;
