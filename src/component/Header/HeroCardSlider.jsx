import React from "react";
import Img1 from "../../assets/slider-1.png";
import Img2 from "../../assets/slider-2.png";
import Img3 from "../../assets/banner-3.png";

const HeroCardSlider = () => {
  return (
    <div className="mt-5">
        <div className="carousel w-full rounded-2xl overflow-hidden shadow-sm mt-4">
      {/* === Slide 1 === */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Img1} className="w-full object-cover h-[350px] md:h-[420px]" alt="Fresh Vegetables" />
        <div className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 space-y-4 md:space-y-6 max-w-[420px]">
          <h1 className="text-2xl md:text-4xl font-bold text-[#253D4E] leading-snug">
            Fresh Vegetables <br /> Big discount
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">
            Save up to <span className="text-green-500 font-semibold">50% off</span> on your first order
          </p>
          <div className="flex w-full bg-white rounded-full shadow-sm overflow-hidden max-w-sm">
            <input
              type="text"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 md:py-3 outline-none text-gray-700 text-sm"
            />
            <button className="bg-green-500 text-white px-6 md:px-8 font-medium hover:bg-green-600 transition text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute left-3 right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-white/70 text-gray-700 hover:bg-green-500 hover:text-white border-none">❮</a>
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-white/70 text-gray-700 hover:bg-green-500 hover:text-white border-none">❯</a>
        </div>
      </div>

      {/* === Slide 2 === */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Img2} className="w-full object-cover h-[350px] md:h-[420px]" alt="Fresh Fruits" />
        <div className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 space-y-4 md:space-y-6 max-w-[420px]">
          <h1 className="text-2xl md:text-4xl font-bold text-[#253D4E] leading-snug">
            Fresh Fruits <br /> Everyday Delivery
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">
            Get healthy & tasty fruits delivered to your doorstep!
          </p>
          <div className="flex w-full bg-white rounded-full shadow-sm overflow-hidden max-w-sm">
            <input
              type="text"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 md:py-3 outline-none text-gray-700 text-sm"
            />
            <button className="bg-green-500 text-white px-6 md:px-8 font-medium hover:bg-green-600 transition text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute left-3 right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-white/70 text-gray-700 hover:bg-green-500 hover:text-white border-none">❮</a>
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-white/70 text-gray-700 hover:bg-green-500 hover:text-white border-none">❯</a>
        </div>
      </div>

      {/* === Slide 3 === */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Img3} className="w-full object-cover h-[350px] md:h-[420px]" alt="Organic Grocery" />
        <div className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 space-y-4 md:space-y-6 max-w-[420px]">
          <h1 className="text-2xl md:text-4xl font-bold text-[#253D4E] leading-snug">
            100% Organic <br /> Grocery Items
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">
            Farm fresh and organic groceries at the best price.
          </p>
          <div className="flex w-full bg-white rounded-full shadow-sm overflow-hidden max-w-sm">
            <input
              type="text"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 md:py-3 outline-none text-gray-700 text-sm"
            />
            <button className="bg-green-500 text-white px-6 md:px-8 font-medium hover:bg-green-600 transition text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute left-3 right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-white/70 text-gray-700 hover:bg-green-500 hover:text-white border-none">❮</a>
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-white/70 text-gray-700 hover:bg-green-500 hover:text-white border-none">❯</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroCardSlider;
