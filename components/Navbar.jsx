import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <p>
        <Link href="/">Babadom Store</Link>
      </p>
      <button type="button" onClick="">
        <AiOutlineShopping />
        <span>1</span>
      </button>
    </div>
  );
};

export default Navbar;
