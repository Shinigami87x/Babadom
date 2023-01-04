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
    <div className="flex flex-row space-x-4 mx-24 w-auto">
      <div
        div
        className="bg-white w-96 h-24 text-right rounded-l-full {/*border-black border-4*/} p-2 pt-3"
      >
        <p>{discount}</p>
        <h3>{largeText1}</h3>
        <p>{saleTime}</p>
      </div>
      <div className="bg-cover flex-auto max-w-4xl {/*border-black border-t-4*/}">
        <img src={urlFor(image)} />
      </div>
      <div className="bg-white w-96 h-24 rounded-r-full {/*border-black border-4*/} p-2 pt-3">
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
