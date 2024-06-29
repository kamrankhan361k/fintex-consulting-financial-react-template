import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductGallerySlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    dots: false,
    arrows: false,
    speed: 800,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const slider = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product-gallery-area mb-50 wow fadeInLeft">
      <Slider
        {...slider}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        className="product-big-slider mb-30"
      >
        <div className="product-img">
          <a
            href="assets/images/product/product-big-1.jpg"
            className="img-popup"
          >
            <img src="assets/images/product/product-big-1.jpg" alt="Product" />
          </a>
        </div>
        <div className="product-img">
          <a
            href="assets/images/product/product-big-2.jpg"
            className="img-popup"
          >
            <img src="assets/images/product/product-big-2.jpg" alt="Product" />
          </a>
        </div>
        <div className="product-img">
          <a
            href="assets/images/product/product-big-3.jpg"
            className="img-popup"
          >
            <img src="assets/images/product/product-big-3.jpg" alt="Product" />
          </a>
        </div>
        <div className="product-img">
          <a
            href="assets/images/product/product-big-4.jpg"
            className="img-popup"
          >
            <img src="assets/images/product/product-big-4.jpg" alt="Product" />
          </a>
        </div>
      </Slider>
      <Slider
        {...thumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        className="product-thumb-slider"
      >
        <div className="product-img">
          <img src="assets/images/product/product-thumb-1.jpg" alt="Product" />
        </div>
        <div className="product-img">
          <img src="assets/images/product/product-thumb-2.jpg" alt="Product" />
        </div>
        <div className="product-img">
          <img src="assets/images/product/product-thumb-3.jpg" alt="Product" />
        </div>
        <div className="product-img">
          <img src="assets/images/product/product-thumb-4.jpg" alt="Product" />
        </div>
      </Slider>
    </div>
  );
};
export default ProductGallerySlider;
