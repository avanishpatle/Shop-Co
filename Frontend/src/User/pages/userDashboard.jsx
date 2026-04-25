// import React, { useState, useEffect, useRef } from "react";
// import {
//     ArrowRight,
//     User,
//     Briefcase,
//     Sparkles,
//     Globe,
//     ShieldCheck,
//     Zap,
//     Star,
//     ShoppingBag,
//     ArrowUpRight
// } from "lucide-react";
// import Logo from "../../components/ui/Logo";
// import { useNavigate } from "react-router-dom";

// /* ---------------- COUNT UP COMPONENT ---------------- */

// const CountUp = ({ end, suffix = "" }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let start = 0;
//         const duration = 2000;
//         const increment = end / (duration / 16);

//         const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//                 setCount(end);
//                 clearInterval(timer);
//             } else {
//                 setCount(Math.floor(start));
//             }
//         }, 16);

//         return () => clearInterval(timer);
//     }, [end]);

//     return (
//         <span className="font-black text-4xl tracking-tighter">
//             {count.toLocaleString()}
//             {suffix}
//         </span>
//     );
// };

// /* ---------------- MAIN COMPONENT ---------------- */

// const UserDashboard = () => {
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//     const containerRef = useRef(null);
//     const navigate = useNavigate();

//     const handleMouseMove = (e) => {
//         if (!containerRef.current) return;

//         const rect = containerRef.current.getBoundingClientRect();
//         const x = (e.clientX - rect.left) / rect.width - 0.5;
//         const y = (e.clientY - rect.top) / rect.height - 0.5;

//         setMousePos({ x, y });
//     };

//     return (
//         <div
//             ref={containerRef}
//             onMouseMove={handleMouseMove}
//             className="bg-[#F2F0F1] text-black overflow-hidden selection:bg-black selection:text-white"
//         >


//             {/* MAIN */}
//             <main className="relative pt-10 md:pt-20 pb-20 flex flex-col md:flex-row items-center max-w-[1400px] mx-auto px-8 gap-12 h-full">
//                 {/* BACKGROUND DECOR */}
//                 <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
//                 <Star className="absolute top-48 right-[10%] w-12 h-12 text-black/10 animate-spin-slow pointer-events-none" />
//                 <Star className="absolute bottom-48 right-[45%] w-8 h-8 text-black/5 animate-bounce-slow pointer-events-none" />

//                 {/* LEFT SIDE */}
//                 <div className="w-full md:w-1/2 space-y-12 z-10">
//                     <div className="space-y-8">
//                         <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-black animate-in fade-in slide-in-from-left-8 duration-1000">
//                             FIND CLOTHES <br />
//                             THAT MATCHES <br />
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black animate-gradient-x">
//                                 YOUR STYLE.
//                             </span>
//                         </h1>

//                         <p className="text-gray-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
//                             Browse through our diverse range of meticulously crafted garments,
//                             designed to bring out your individuality and cater to your sense of style.
//                         </p>

//                         <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
//                             <button
//                                 onClick={() => navigate('/shop')}
//                                 className="group relative px-16 py-6 bg-black text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95"
//                             >
//                                 <span className="relative z-10 flex items-center gap-3">
//                                     Shop Now
//                                     <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                                 </span>
//                                 <div className="absolute inset-0 bg-gradient-to-r from-[#C5A059] to-[#E5C079] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//                             </button>
//                         </div>
//                     </div>

//                     {/* STATS */}
//                     <div className="flex flex-wrap gap-12 pt-10 border-t border-black/5 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
//                         <div className="space-y-1">
//                             <CountUp end={200} suffix="+" />
//                             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                                 International Brands
//                             </p>
//                         </div>

//                         <div className="w-px h-12 bg-gray-200 hidden sm:block" />

//                         <div className="space-y-1">
//                             <CountUp end={2000} suffix="+" />
//                             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                                 High-Quality Products
//                             </p>
//                         </div>

//                         <div className="w-px h-12 bg-gray-200 hidden sm:block" />

//                         <div className="space-y-1">
//                             <CountUp end={30000} suffix="+" />
//                             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                                 Happy Customers
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDE */}
//                 <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[700px] flex items-center justify-center">
//                     <div
//                         className="relative w-full h-full transition-transform duration-700 ease-out"
//                         style={{
//                             transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`
//                         }}
//                     >
//                         <div className="absolute inset-0 z-10 flex items-center justify-center">
//                             <img
//                                 src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200"
//                                 alt="Main Fashion"
//                                 className="w-[85%] h-auto rounded-[3rem] shadow-2xl"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default UserDashboard;




import React, { useState, useEffect, useRef } from "react";
import {
    ArrowRight,
    User,
    Briefcase,
    Sparkles,
    Globe,
    ShieldCheck,
    Zap,
    Star,
    ShoppingBag,
    ArrowUpRight,
    Plus
} from "lucide-react";
import Logo from "../../components/ui/Logo";
import NewCard from "./Homepage/NewCard";

/* ---------------- COUNT UP COMPONENT ---------------- */

const CountUp = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <span className="font-black text-5xl tracking-tighter">
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};

/* ---------------- MAIN COMPONENT ---------------- */

const UserDashboard = ({ onSelectCustomer, onSelectMerchant }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        setMousePos({ x, y });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full bg-[#F2F0F1] text-black overflow-hidden selection:bg-black selection:text-white"
        >

            {/* Main Content Area */}
            <main className="relative pt-1 md:pt-8 pb-12 flex flex-col md:flex-row items-center w-full px-6 md:px-16 gap-0">

                {/* Decorative Background */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />
                <Star className="absolute top-48 left-[5%] w-10 h-10 text-black/5 animate-spin-slow pointer-events-none" />

                {/* LEFT SIDE */}
                <div className="w-full md:w-[45%] space-y-16 z-10 py-1">
                    <div className="space-y-10">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-[#C5A059]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C5A059]">
                                Summer Edition 2025
                            </span>
                        </div>

                        <h1 className="text-7xl md:text-[6.5rem] font-black leading-[0.85] tracking-tighter text-black">
                            FIND CLOTHES <br />
                            THAT MATCHES <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-[#C5A059] to-black animate-gradient-x">
                                YOUR STYLE.
                            </span>
                        </h1>

                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={onSelectCustomer}
                                className="group relative px-20 py-8 bg-black text-white rounded-full font-black text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Shop Now
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C5A059] to-[#E5C079] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-nowrap gap-12 pt-12 border-t border-black/5">
                        <div className="space-y-2">
                            <CountUp end={200} suffix="+" />
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
                                International Brands
                            </p>
                        </div>

                        <div className="w-px h-16 bg-gray-200 hidden sm:block" />

                        <div className="space-y-2">
                            <CountUp end={2000} suffix="+" />
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
                                High-Quality Products
                            </p>
                        </div>

                        <div className="w-px h-16 bg-gray-200 hidden sm:block" />

                        <div className="space-y-2">
                            <CountUp end={30000} suffix="+" />
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center perspective-1000">
                    <div
                        className="relative w-full  max-w-[500px] aspect-[4/5] md:aspect-square transition-transform duration-100 ease-out"
                        style={{
                            transform: `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
                        }}
                    >
                        {/* Main Central Image */}
                        <div className="absolute inset-0 bg-[#F0EEED] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/50">
                            <img
                                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                                alt="Fashion Model"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Card 1 (Top Left) - Shoe */}
                        <div className="absolute -left-4 top-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 bg-white rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float-slow z-20">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
                                    alt="Nike Shoes"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>

                        {/* Floating Card 2 (Bottom Right) - Accessories */}
                        <div className="absolute -right-4 bottom-12 md:-right-8 w-28 h-28 md:w-40 md:h-40 bg-white rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float-reverse z-20">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop"
                                    alt="Sunglasses"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Decorative Tag */}
                        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-20 animate-in fade-in zoom-in delay-500 duration-700">
                            <div className="flex items-center gap-2">
                                <Star className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                                <span className="text-[10px] font-black uppercase tracking-widest">New Season</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* BRAND SCROLL */}
            <section className="bg-black py-10 mt-0 relative z-30 border-t border-white/10">
                <div className="flex overflow-hidden group">
                    <div className="flex gap-24 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap items-center px-12">
                        {[...["GUCCI", "PRADA", "CELINE", "VERSACE", "DIOR", "ZARA", "H&M", "CALVIN KLEIN", "LEVIS"], ...["GUCCI", "PRADA", "CELINE", "VERSACE", "DIOR", "ZARA", "H&M", "CALVIN KLEIN", "LEVIS"]].map((brand, i) => (
                            <span key={i} className="text-4xl md:text-5xl font-serif font-black text-white/20 hover:text-[#C5A059] hover:opacity-100 transition-all cursor-pointer duration-300">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animations */}
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes width-expand {
            from { width: 0; }
            to { width: 3rem; }
        }
        @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes float-reverse {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
        }
        .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-reverse {
            animation: float-reverse 5s ease-in-out infinite;
        }
        @keyframes animate-gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: animate-gradient-x 4s ease infinite;
        }
      `}</style>
        </div>
    );
};

export default UserDashboard;
