
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ id, name, image, price, originalPrice, rating, link }) => {
    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return (
        <Link to={link || `/product/${id}`} className="group block">
            <div className="flex flex-col gap-3 cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[1/1.1] w-full bg-[#F0EEED] rounded-[20px] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute right-3 top-3 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-black hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); /* Add to wishlist */ }}>
                            <Heart size={16} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-black hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); /* Add to cart */ }}>
                            <ShoppingCart size={16} />
                        </button>
                    </div>

                    {/* Discount Badge */}
                    {discount > 0 && (
                        <span className="absolute top-3 left-3 bg-[#FF3333] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                            -{discount}%
                        </span>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                    <h3 className="font-['Satoshi'] font-bold text-lg leading-tight truncate text-black group-hover:text-black/70 transition-colors">
                        {name}
                    </h3>

                    <div className="flex items-center gap-2">
                        <div className="flex text-[#FFC633]">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    fill={i < Math.floor(rating) ? "currentColor" : "none"}
                                    className={i < Math.floor(rating) ? "" : "text-gray-300"}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-black/60 font-['Satoshi']">{rating}/5</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-black font-['Satoshi']">₹{price}</span>
                        {originalPrice && (
                            <span className="text-xl font-bold text-black/40 line-through font-['Satoshi']">
                                ₹{originalPrice}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
