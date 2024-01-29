import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/cartSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex  justify-center bg-blue-500 items-center  ">
      <div className="max-w-sm mx-4 my-4 bg-blue-300 rounded-lg overflow-hidden shadow-md h-96 ">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-center mb-4 ">
            <h4 className="text-lg font-semibold">{title}</h4>
            <h4 className="text-lg">{price}TL</h4>
          </div>
          <div className="flex items-center">
            <button
              className="border border-blue-900 rounded-full px-2 py-1 mr-2"
              onClick={() => {
                dispatch(increase(id));
              }}
            >
              <BsChevronUp />
            </button>
            <p className="">{quantity}</p>
            <button
              className="border border-blue-900 rounded-full px-2 py-1 ml-2"
              onClick={() => {
                dispatch(decrease(id));
              }}
            >
              <BsChevronDown />
            </button>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 mt-7 rounded-md w-full hover:bg-red-600 duration-300 "
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
