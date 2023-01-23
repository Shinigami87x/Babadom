import React, { useState } from "react";
import Product from "./../../components/Product";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
    <div className="m-auto w-3/4">
      <div className="flex flex-row ml-20">
        <div className="flex flex-col w-1/3 mb-8">
          <div className="relative flex flex-row ml-4">
            <img
              src={urlFor(image && image[index])}
              className="w-min rounded-md drop-shadow-xl"
              alt="selected_product"
            />
          </div>

          <div className="flex flex-row space-x-3 mt-3 ml-4 rounded-md">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                alt="product_image"
                className={
                  i === index
                    ? "w-1/5 border-white border-2 rounded-md drop-shadow-md"
                    : "w-1/5 rounded-md drop-shadow-md"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="w-1/3 ml-10 mt-12">
          <h1 className="text-xl font-bold">{name}</h1>
          <div>
            <div className="flex flex-row text-red-600">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className="font-bold mt-3">Details: </h4>
          <p>{details}</p>
          <p className="text-red-600 font-bold text-2xl mt-3">{price} €</p>
          <div>
            <h3 className="mt-3">Quantity:</h3>
            <p className="flex flex-row mt-0.5">
              <span
                className="text-base pt-2 px-2 cursor-pointer border-2 rounded-full border-black"
                onClick={decQty}
              >
                <AiOutlineMinus />
              </span>
              <span
                className="text-base px-2 py-1 pt-2 cursor-pointer">
                {qty}
              </span>
              <span
                className="text-base pt-2 px-2 cursor-pointer border-2 rounded-full border-black"
                onClick={incQty}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <button
              className="w-full pt-3 pb-2 mr-3 rounded-md border-0 text-lg mt-2.5 bg-white text-red-600 cursor-pointer scale-100 ease-in duration-500 hover:scale-110"
              type="button"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              className="w-full pt-3 pb-2 rounded-md border-0 text-lg mt-2.5 bg-red-600 text-white cursor-pointer scale-100 ease-in duration-500 hover:scale-110"
              type="button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="m-auto max-w-6xl relative">
          <div className="bg-separator bg-no-repeat text-center my-8">
            <h2 className="bg-white relative top-4 w-72 m-auto text-2xl border-black border-2 rounded-full ">
              You may also like
            </h2>
            <p className="text-base m-auto mt-8 max-w-5xl">
              Hemp cloths of many variations
            </p>
          </div>
        </div>

        <div className="w-5/6 m-auto">
          <div className="flex flex-row space-x-3">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
