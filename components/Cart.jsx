import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems)
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="w-1/4 bg-white fixed right-0 top-0 z-50" ref={cartRef}>
      <div className="relative h-screen w-full bg-white float-right px-10 py-2.5 border-4 border-l-black">
        <button
          className="flex items-center text-lg font-medium cursor-pointer gap-0.5 border-0 bg-transparent"
          type="button"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft className="text-red-600" />
          <span className="ml-2.5">Your Cart</span>
          <span className="ml-2.5 text-red-600">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="m-10 text-center">
            <AiOutlineShopping className="mx-auto" size={100} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/" passHref>
              <button
                className="w-full max-w-sm px-2.5 py-3 rounded-2xl border-0 text-base mt-2.5  bg-red-600 text-white cursor-pointer scale-100 ease-in duration-500 hover:scale-110"
                type="button"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="mt-2.5">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="flex py-1" key={item._id}>
                <img
                  className="w-1/4 h-1/4 rounded"
                  src={urlFor(item?.image[0])}
                />
                <div className="w-full">
                  <div className="flex justify-between w-full ml-2 right-0 text-base">
                    <h5>{item.name}</h5>
                    <h4 className="mr-4">{item.price} €</h4>
                  </div>
                  <div className="relative flex flex-row justify-between w-full">
                    <div>
                      <p className="flex flex-row ml-2 mt-0.5">
                        <span
                          className="text-base pt-2 px-2 cursor-pointer border-2 rounded-full border-black"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span
                          className="text-base px-2 py-1 pt-2 cursor-pointer"
                          onClick=""
                        >
                          {item.quantity}
                        </span>
                        <span
                          className="text-base pt-2 px-2 cursor-pointer border-2 rounded-full border-black"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      className="text-base cursor-pointer bg-transparent"
                      type="button"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline className="text-red-600" size={40} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute w-full bottom-4 right-2 m-auto ">
            <div className="w-3/4 ml-14 mr-12 flex flex-row justify-between text-lg ">
              <h3>Subtotal:</h3>
              <h3>{totalPrice} €</h3>
            </div>
            <div className="w-4/5 m-auto">
              <button
                className="w-full ml-3 mr-12 pt-3 pb-2 rounded-md border-0 text-lg mt-2.5 bg-red-600 text-white cursor-pointer scale-100 ease-in duration-500 hover:scale-110"
                type="button"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
