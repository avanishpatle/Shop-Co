
// 

import React, { useState, useEffect } from "react";
import {
    ArrowRight,
    User,
    Briefcase,
    ChevronDown
} from "lucide-react";
import Logo from "./Logo";

const LandingHero = ({ onSelectCustomer, onSelectMerchant, onExploreMore }) => {
    const [scrolled, setScrolled] = useState(false);
    const [showSelector, setShowSelector] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 px-8 py-8 ${scrolled ? "bg-black/90 backdrop-blur-2xl py-5 border-b border-white/5" : ""}`}>
                <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                    <Logo variant="light" size="sm" />

                    <div className="hidden lg:flex items-center gap-16">
                        {["Collections", "Our Vision", "Blog", "Sourcing"].map((item) => (
                            <a key={item} href="#" className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all">
                                {item}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setShowSelector(true)}
                        className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all"
                    >
                        Login / Register
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-[slowZoom_30s_infinite_alternate]"
                        alt="Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                </div>

                <div className="relative z-10 text-center space-y-12 px-6">

                    <div>
                        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] text-white">
                            SMART <br />
                            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C5A059] to-white">
                                COMMERCE.
                            </span>
                        </h1>
                    </div>

                    <div className="max-w-xl mx-auto space-y-10">
                        <p className="text-lg md:text-xl font-medium text-white/60 leading-relaxed">
                            Discover a seamless shopping experience powered by intelligent technology.
                            Shop confidently. Sell efficiently. Grow your business with ease.
                        </p>

                        <button
                            onClick={() => setShowSelector(true)}
                            className="group relative px-16 py-8 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all hover:border-[#C5A059]"
                        >
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.5em] text-white group-hover:text-black flex items-center gap-4">
                                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>


            </section>

            {/* Role Selection Modal */}
            {showSelector && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        onClick={() => setShowSelector(false)}
                    />

                    <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Customer */}
                        <div
                            onClick={onSelectCustomer}
                            className="group relative aspect-[3/4] bg-white rounded-[3rem] overflow-hidden cursor-pointer transition-all hover:-translate-y-4 hover:shadow-[0_40px_100px_rgba(197,160,89,0.3)]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                alt="Customer"
                            />
                            <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end text-white">
                                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                                    <User className="w-5 h-5" />
                                </div>
                                <h3 className="text-4xl font-black tracking-tighter mb-4">Customer</h3>
                                <p className="text-sm text-white/70 mb-8 leading-relaxed">
                                    Browse products, add to cart, and enjoy a smooth and secure checkout experience.
                                </p>
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest group-hover:text-[#C5A059]">
                                    Start Shopping <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Merchant */}
                        <div
                            onClick={onSelectMerchant}
                            className="group relative aspect-[3/4] bg-white rounded-[3rem] overflow-hidden cursor-pointer transition-all hover:-translate-y-4 hover:shadow-[0_40px_100px_rgba(197,160,89,0.3)]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                alt="Merchant"
                            />
                            <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end text-white">
                                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <h3 className="text-4xl font-black tracking-tighter mb-4">Merchant</h3>
                                <p className="text-sm text-white/70 mb-8 leading-relaxed">
                                    Manage your products, track orders, monitor sales performance and grow your online business.
                                </p>
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest group-hover:text-[#C5A059]">
                                    Access Dashboard <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowSelector(false)}
                            className="absolute -top-12 right-0 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>

        </div>
    );
};

export default LandingHero;
