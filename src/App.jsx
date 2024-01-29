import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotal } from "./control/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./components/Footer";
function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <CourseList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
