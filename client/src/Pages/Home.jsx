import React, { useRef } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import "../Styles/HomePage.css";

function Home() {;
  return (
    <div className='homePage'>
      <div className='content'>
        <h1>Zippy</h1>
        <p>
          Zippy is your go-to online platform that empowers you to place orders conveniently from the comfort of your own space. With Zippy, you can easily explore the menus of nearby cafes, select your favorite items, and place your order. The best part? You can rest assured that your order will be ready on time, and we'll notify you as soon as your order is packed and ready to go. This way, you can plan your visit to the cafe at the perfect time.
        </p>
        <button className='order-button'>Order Now < BsFillArrowRightCircleFill className='icon'/></button>
      </div>
    </div>
  );
}

export default Home;
