import React from "react";
import { BsBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <nav className="bg-blue-900 flex justify-center text-white items-center h-20">
      <div className="flex justify-between container  ">
        <h3 className="text-2xl ">Kurs Uygulaması</h3>
        <div className="">
          <div className="">
            <p className="">{quantity}</p>
          </div>

          <BsBasketFill className="text-xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
