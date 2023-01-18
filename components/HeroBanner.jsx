import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    
      <div className="flex flex-row space-x-4 mx-24 w-auto">
        <div className="bg-white w-96 h-24 text-right rounded-l-full border-black border-4 border-r-0 p-2">
          <p>{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
        </div>
        <div className="bg-cover flex-auto max-w-4xl border-black border-t-4">
          <img className="rounded-b-lg drop-shadow-xl" src={urlFor(heroBanner.image)} alt="hemp-product" />
        </div>
        <div className="absolute right-72 mt-6">
          <Link href={`/product/${heroBanner.product}`} passHref>
             <button
          type="button"
          onClick=""
          className="bg-white rounded-l-full border-black border-r-4 p-2 pl-4 mr-6"
        >
          More About Me
        </button>
          </Link>
        </div>
        <div className="bg-white w-96 h-24 rounded-r-full border-black border-4 border-l-0 p-2">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    
  );
};

export default HeroBanner;
