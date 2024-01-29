import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/cartSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section className="bg-blue-500 text-white uppercase items-center">
          <header>
            <h4>bomboş</h4>
          </header>
        </section>
      ) : (
        <section className="bg-blue-500 flex flex-1 justify-center">
          <header></header>
          <div className="flex flex-wrap ">
            {cartItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default CourseList;
