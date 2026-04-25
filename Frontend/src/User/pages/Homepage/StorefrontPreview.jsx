
import React, { useState, useRef } from "react";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Star,
    ShoppingBag,
    Eye,
    Clock,
    ShieldCheck,
    Heart,
    Sparkles,
    Plus,
    Info,
    MoveRight
} from "lucide-react";

/* ---------------- SLIDES DATA ---------------- */

const slides = [
    {
        id: 1,
        category: "Men",
        tagline: "Latest Collection 2024",
        title: "SHARP \n MODERN STYLE.",
        description: "Upgrade your style with our latest premium shirts and blazers. Perfect for office wear or a grand wedding function.",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200",
        price: "₹4,999",
        isNew: true,
        hotspots: [
            { x: 45, y: 30, label: "Premium Blazer", price: "₹2,999" }
        ]
    },
    {
        id: 2,
        category: "Women",
        tagline: "Super Hit Trending",
        title: "GRACEFUL \n ELEGANCE.",
        description: "Look your best with our beautiful designer dresses and ethnic wear. Designed for the modern Indian woman.",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200",
        price: "₹3,499",
        isNew: false,
        hotspots: [
            { x: 50, y: 40, label: "Silk Saree", price: "₹4,500" }
        ]
    },
    {
        id: 3,
        category: "Luxury Items",
        tagline: "Premium Quality Purses",
        title: "ELITE \n HANDBAGS.",
        description: "Carry your world in style. Our luxury leather purses are built to last and look premium. Perfect for parties.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200",
        price: "₹8,990",
        isNew: true,
        hotspots: [
            { x: 50, y: 50, label: "Calfskin Leather", price: "₹12,000" }
        ]
    },
    {
        id: 4,
        category: "Watches",
        tagline: "Timeless Masterpiece",
        title: "ROYAL \n WATCHES.",
        description: "Never be late again, but do it with class. Explore our range of luxury watches. Classic dials or smart features.",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200",
        price: "₹12,500",
        isNew: false,
        hotspots: [
            { x: 40, y: 45, label: "Sapphire Glass", price: "Premium" }
        ]
    },
    {
        id: 5,
        category: "Shoes",
        tagline: "Super Comfort Elite",
        title: "STYLISH \n FOOTWEAR.",
        description: "Step out in confidence. Our shoes are made for walking long distances without any pain. From formal office shoes to trending lifestyle sneakers.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200",
        price: "₹2,999",
        isNew: true,
        hotspots: [
            { x: 50, y: 80, label: "Cushioned Sole", price: "Extra Soft" }
        ]
    }
];

/* ---------------- COMPONENT ---------------- */

const StorefrontPreview = () => {
    const [activeIdx, setActiveIdx] = useState(4); // Default to Shoes as per image
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIdx((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    const current = slides[activeIdx];

    return (
        <div className="w-full py-20 bg-[#FAFAFA]" onMouseMove={handleMouseMove} ref={containerRef}>

            {/* CATEGORY NAV */}
            <div className="flex justify-center mb-12 flex-wrap gap-4 px-4">
                {slides.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => setActiveIdx(i)}
                        className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${activeIdx === i
                            ? "bg-black text-white shadow-xl scale-110"
                            : "bg-white text-gray-400 hover:text-black shadow-sm hover:shadow-md"
                            }`}
                    >
                        {s.category}
                    </button>
                ))}
            </div>

            {/* MAIN CARD */}
            <div className="relative w-[95%] max-w-[1400px] mx-auto bg-white rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[650px]">

                {/* --- LEFT SIDE: CONTENT --- */}
                <div className="w-full md:w-[45%] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">

                    {/* Background Watermark */}
                    <span className="absolute top-20 left-0 text-[12rem] font-black text-gray-50 opacity-40 select-none pointer-events-none leading-none -ml-10 z-0 truncate max-w-full">
                        {current.category}
                    </span>

                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl relative z-10 transition-all duration-500 ease-out">

                        {/* Title Section */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                {current.isNew && (
                                    <span className="bg-[#C5A059] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                        New Piece
                                    </span>
                                )}
                                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                                    {current.tagline}
                                </span>
                            </div>

                            <h1 className="text-6xl md:text-7xl font-black font-['Integral_CF'] text-black leading-[0.9] tracking-tighter uppercase whitespace-pre-line mt-4">
                                {current.title}
                            </h1>
                        </div>

                        {/* Description with left border */}
                        <div className="flex gap-6 mb-10 pl-2">
                            {/* Navigation Left Arrow */}
                            <button onClick={handlePrev} className="w-12 h-12 flex-shrink-0 bg-[#F0F0F0] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:scale-110 shadow-sm">
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <p className="border-l-4 border-[#C5A059]/30 pl-6 text-gray-500 font-medium text-lg leading-relaxed italic max-w-sm">
                                {current.description}
                            </p>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex flex-wrap items-end gap-8 border-t border-gray-100 pt-8">
                            <div>
                                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Starting MRP</p>
                                <p className="text-3xl font-black font-['Integral_CF'] text-black leading-none">
                                    {current.price} <span className="text-base font-bold text-gray-400 normal-case ml-1">onwards</span>
                                </p>
                            </div>

                            <button className="flex-1 bg-black text-white h-16 rounded-3xl flex items-center justify-center gap-3 px-8 hover:bg-[#C5A059] transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-[#C5A059]/30 group">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center leading-tight">
                                    Shop <br /> This Look
                                </span>
                                <div className="w-2 h-2 rounded-full bg-white group-hover:animate-ping" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: IMAGE --- */}
                <div className="w-full md:w-[55%] relative bg-gray-100 overflow-hidden">

                    {/* Image with Parallax & Grayscale */}
                    <div
                        className="w-full h-full transition-transform duration-1000 ease-out"
                        style={{
                            transform: `scale(1.1) translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
                        }}
                    >
                        <img
                            src={current.image}
                            alt={current.category}
                            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Gradient Overlay (Left to Right) for blending */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />

                    {/* Top Right Badge */}
                    <div className="absolute top-8 right-8 bg-white/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-lg flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-[#C5A059]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-black">Handmade Quality</span>
                    </div>

                    {/* Navigation Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black hover:border-black transition-all transform hover:scale-110 shadow-2xl z-20"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Hotspots */}
                    {current.hotspots.map((spot, i) => (
                        <div
                            key={i}
                            className="absolute top-1/2 left-1/2" // positioning relative override
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        >
                            <div className="relative group cursor-pointer">
                                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center bg-white/20 backdrop-blur-sm animate-pulse hover:animate-none hover:bg-white transition-all">
                                    <Plus className="w-4 h-4 text-white group-hover:text-black" />
                                </div>

                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white p-4 rounded-2xl shadow-2xl text-center min-w-[120px] transform scale-75 group-hover:scale-100">
                                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{spot.label}</p>
                                    <p className="font-black text-sm">{spot.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FEATURES FOOTER */}
            <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
                <Feature icon={<ShieldCheck />} title="Genuine Product" desc="100% Verified Brands" />
                <Feature icon={<Clock />} title="Express Shipping" desc="24hr Dispatch Priority" />
                <Feature icon={<ShoppingBag />} title="Easy Exchange" desc="7 Day Return Policy" />
                <Feature icon={<Info />} title="Premium Support" desc="24/7 Dedicated Team" />
            </div>
        </div>
    );
};

/* ---------------- HELPER COMPONENTS ---------------- */

const Feature = ({ icon, title, desc }) => (
    <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
        <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            {React.cloneElement(icon, { size: 20 })}
        </div>
        <div>
            <h4 className="font-bold text-sm uppercase tracking-wider">{title}</h4>
            <p className="text-gray-400 text-xs mt-1">{desc}</p>
        </div>
    </div>
);

export default StorefrontPreview;
