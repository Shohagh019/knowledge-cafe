import React, { useState } from "react";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [cart, setCart] = useState([])

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("watchTime", sum);
      setTotalTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setTotalTime(time);
    }
  };
  const handleBookMark = (article) =>{
    const newCart = [...cart, article];
    setCart(newCart);
  }
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-2 gap-2 m-2">
      <div>
    <News handleBookMark={handleBookMark} handleReadTime={handleReadTime}></News>
      </div>     
      <div className="bg-slate-200 text-center p-10 m-5 rounded-lg" >
        <Cart cart = {cart} totalTime={totalTime}></Cart>
      </div>
      </div>

    </div>
  );
};

export default App;
