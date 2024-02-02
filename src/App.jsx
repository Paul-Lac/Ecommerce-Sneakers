import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const images = [
    {
      id: 0,
      big: "../public/image-product-1.jpg",
      small: "../public/image-product-1-thumbnail.jpg",
    },
    {
      id: 1,
      big: "../public/image-product-2.jpg",
      small: "../public/image-product-2-thumbnail.jpg",
    },
    {
      id: 2,
      big: "../public/image-product-3.jpg",
      small: "../public/image-product-3-thumbnail.jpg",
    },
    {
      id: 3,
      big: "../public/image-product-4.jpg",
      small: "../public/image-product-4-thumbnail.jpg",
    },
  ];
  const [imageIndex, setImageIndex] = useState(0);

  const handleThumbnailClick = (id) => {
    setImageIndex(id);
    console.info(id);
  };

  return (
    <>
      <Navbar />
      <div className="product">
        <div className="picture-box">
          <img className="picture-big" src={images[imageIndex].big} />
          <div className="pictures-container">
            {images.map((element) => (
              <img
                key={element.id}
                className="picture-small"
                src={element.small}
                alt={`image ${element.id}`}
                onClick={() => handleThumbnailClick(element.id)}
              />
            ))}
          </div>
        </div>
        <div className="text-box">
          <div className="text-container">
            <h1>SNEAKER COMPANY</h1>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <span className="price">$125.00</span>
            <span className="promo">50%</span>
            <div className="crossed-price">$250.00</div>
            <div className="buttons-container">
              <div className="plus-minus">
                <img className="minus" src="../public/icon-minus.svg" />
                <span>0</span>
                <img className="plus" src="../public/icon-plus.svg" />
              </div>
              <button className="add-to-cart">
                <img src="../public/icon-cart-white.svg" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
