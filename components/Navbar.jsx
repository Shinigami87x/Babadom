import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoB from "../images/babadom-B.svg";
import logo from "../images/babadom-logo.svg";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <nav className="">
      <div className="bg-separator bg-no-repeat bg-[center_bottom_4rem] flex flex-row relative top-8 z-20 mx-8 ">
        <div>
          <Link href="/" passHref>
            <button type="button">
              <Image src={logoB} alt="babadom-B-logo" height={127} />
            </button>
          </Link>
        </div>
        <div className="flex flex-row mx-auto relative right-14">
          <div>
            <Link href="/about" passHref>
              <button className="" type="button">
                <h2 className="relative top-16 bg-white rounded-l-full border-black border-4 py-1 px-3 mt-5 -mr-2 text-lg">
                  About Hemp Fabric
                </h2>
              </button>
            </Link>
          </div>
          <div className="relative flex flex-col">
            <Link href="/" passHref>
              <button type="button">
                <Image src={logo} alt="babadom-B-logo" height={300} />
              </button>
            </Link>
          </div>
          <div>
            <Link href="/contact" passHref>
              <button className="" type="button">
                <h2 className="relative top-16 bg-white rounded-r-full border-black border-4 py-1 pl-2 pr-3 mt-5 -ml-1 text-lg">
                  Contact
                </h2>
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <button
            type="button"
            onClick={() => setShowCart(true)}
            className="bg-white rounded-b-full border-black border-4 p-2"
          >
            <AiOutlineShopping />
            <span>{totalQuantities}</span>
          </button>

          {showCart && <Cart />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
