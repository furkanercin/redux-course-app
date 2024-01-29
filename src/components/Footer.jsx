import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/cartSlice";

function Footer() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <footer className="flex flex-col items-center bg-blue-900 text-white">
      <hr />
      <div>
        <h4>
          Toplam Tutar <span>{total} TL</span>
        </h4>
      </div>
      <button
        className="mt-4 mb-4 pb-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300"
        onClick={() => dispatch(clearCart())}
      >
        Kartları Temizle
      </button>
    </footer>
  );
}

export default Footer;
