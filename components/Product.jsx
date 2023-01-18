import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="">
          <img
            className="border-black border-b-4 rounded-t-md drop-shadow-xl cursor-pointer"
            src={urlFor(image && image[0])}
            width={250}
            height={250}
          />
          <div className="relative flex flex-row bg-white rounded-b-md drop-shadow-xl">
            <span className="p-4">{name}</span>
            <span className="p-4 gap">{price} €</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
