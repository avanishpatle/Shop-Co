import React from "react";
import { Link } from "react-router-dom";
import tshirt1 from "../../../components/Assets/tanish-assets/tshirt1.png";
import a2 from "../../../components/Assets/tanish-assets/a2.png";
import a3 from "../../../components/Assets/tanish-assets/a3.png";
import a4 from "../../../components/Assets/tanish-assets/a4.png";




import ProductCard from "../../../components/ui/ProductCard";

const Newarrival = () => {
  const products = [
    {
      id: "new-arrival-1",
      name: "T-shirt with Tape Details",
      image: tshirt1,
      price: 120,
      rating: 4.5
    },
    {
      id: "new-arrival-2",
      name: "Skinny Fit Jeans",
      image: a2,
      price: 240,
      originalPrice: 260,
      rating: 3.5
    },
    {
      id: "new-arrival-3",
      name: "Checkered Shirt",
      image: a3,
      price: 180,
      rating: 4.5
    },
    {
      id: "new-arrival-4",
      name: "Sleeve Striped T-shirt",
      image: a4,
      price: 130,
      originalPrice: 160,
      rating: 4.5
    }
  ];

  return (
    <div className="border-b border-gray-100">
      <section className="px-4.5 sm:px-8 md:px-[100px] py-16 flex flex-col items-center">
        <h2 className="font-['Integral_CF'] font-bold text-3xl sm:text-4xl md:text-[48px] leading-[100%] text-black text-center mb-10 md:mb-14">
          NEW ARRIVALS
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

export default Newarrival