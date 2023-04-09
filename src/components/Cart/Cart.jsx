import React, { useEffect, useState } from "react";

const Cart = ({ totalTime, cart }) => {
  const [time, setTime]= useState(0);
  useEffect(() => {
    const getReadTime = localStorage.getItem("watchTime");
    setTime(getReadTime);
  }, [totalTime]);
  return (
    <div>
    <div className="bg-orange-200 p-5 rounded-lg">
      <p>Spent time on read : {time}</p>
    </div>
    <div className="bg-orange-200 p-5 rounded-lg mt-2">
      <p>Bookmarked Blogs : {cart.length}</p>
    </div>
    <div>
       <ul>
        {
          cart.map(item=>(<li className="bg-blue-200 p-2 m-2 rounded-lg">{item.blogTitle}</li>))
        }
       </ul>
    </div>
    </div>

  );
};

export default Cart;
