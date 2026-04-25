import React from "react";
import { Link } from "react-router-dom";
import t1 from "../../../components/Assets/tanish-assets/t1.png";
import t2 from "../../../components/Assets/tanish-assets/t2.png";
import t3 from "../../../components/Assets/tanish-assets/t3.png";
import t4 from "../../../components/Assets/tanish-assets/t4.png";

import ProductCard from "../../../components/ui/ProductCard";

const Topselling = () => {
  const products = [
    {
      id: "top-selling-1",
      name: "Vertical Striped Shirt",
      image: t1,
      price: 212,
      rating: 5.0
    },
    {
      id: "top-selling-2",
      name: "Courage Graphic T-shirt",
      image: t2,
      price: 145,
      rating: 4.0
    },
    {
      id: "top-selling-3",
      name: "Loose Fit Bermuda Shorts",
      image: t3,
      price: 80,
      rating: 3.0
    },
    {
      id: "top-selling-4",
      name: "Faded Skinny Jeans",
      image: t4,
      price: 210,
      rating: 4.5
    }
  ];

  return (
    <div>
      <section className="px-4.5 sm:px-8 md:px-[100px] py-16 flex flex-col items-center">
        <h2 className="font-['Integral_CF'] font-bold text-3xl sm:text-4xl md:text-[48px] leading-[100%] text-black text-center mb-10 md:mb-14">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <button className="mt-12 px-8 py-3 border border-black rounded-full font-['Satoshi'] text-base font-medium hover:bg-black hover:text-white transition">
          View All
        </button>
      </section>

    </div>
  )
}

export default Topselling