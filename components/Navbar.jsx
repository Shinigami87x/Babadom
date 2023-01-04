import React from "react";
import Image from "next/image";
import logoB from "../images/babadom-B.svg";
import logo from "../images/babadom-logo.svg";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex flex-row relative top-8">
      <div className="relative ml-8">
        <Image src={logoB} alt="babadom-B-logo" height={127} />
      </div>
      <div className="flex flex-row mx-auto relative right-12">
        <div>
          <h2 className="relative top-16 bg-white rounded-l-full border-black border-4 py-1 px-3 mt-5 -mr-2 text-lg">
            About Hemp Fabric
          </h2>
        </div>
        <div>
          <Image src={logo} alt="babadom-B-logo" height={300} />
        </div>
        <div>
          <h2 className="relative top-16 bg-white rounded-r-full border-black border-4 py-1 pl-2 pr-3 mt-5 -ml-1 text-lg">
            Contact
          </h2>
        </div>
      </div>
      <div className="">
        <button
          type="button"
          onClick=""
          className="bg-white rounded-b-full border-black border-4 p-2 mr-8"
        >
          <AiOutlineShopping />
          <span>1</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
