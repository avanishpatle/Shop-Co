import React from 'react';
import { Heart, Star, Plus, ArrowUpRight, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

const ProductCard = ({ name, price, image, tag, rating, isNew, variant = 'standard' }) => {
    const isFeatured = variant === 'featured';

    return (
        <div className={`group relative flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}>
            {/* Image Container */}
            <div className={`relative overflow-hidden bg-[#F5F5F5] cursor-none transition-all duration-700 ${isFeatured ? 'rounded-[5rem] aspect-[4/5]' : 'rounded-[3.5rem] aspect-[3/4]'} shadow-2xl group-hover:shadow-[#C5A059]/10`}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-8 left-8 flex flex-col gap-3 z-10">
                    {isNew && (
                        <div className="bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full shadow-2xl">
                            Fresh Acquisition
                        </div>
                    )}
                    {tag && (
                        <div className="glass-light text-black text-[9px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full border border-white/50 shadow-xl">
                            {tag}
                        </div>
                    )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-8 right-8 w-14 h-14 rounded-full glass-light flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 hover:bg-black hover:text-white z-10 shadow-xl">
                    <Heart className="w-6 h-6" />
                </button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100 pointer-events-none">
                    <div className="pointer-events-auto flex flex-col gap-4 items-center">
                        <button className="bg-white text-black px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 hover:bg-[#C5A059] hover:text-white transition-all shadow-2xl active:scale-90">
                            Explore Piece <ArrowUpRight className="w-4 h-4" />
                        </button>
                        <button className="bg-black/80 backdrop-blur-md text-white px-8 py-4 rounded-full font-black text-[9px] uppercase tracking-[0.3em] flex items-center gap-2 hover:bg-black transition-all shadow-2xl active:scale-90">
                            <Plus className="w-4 h-4" /> Add to Collection
                        </button>
                    </div>
                </div>

                {/* Featured Vignette */}
                {isFeatured && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}
            </div>

            {/* Details */}
            <div className={`px-6 space-y-4 ${isFeatured ? 'md:px-10' : ''}`}>
                <div className="flex justify-between items-start gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-[1px] bg-[#C5A059] group-hover:w-12 transition-all" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Archive Ref_0{Math.floor(Math.random() * 9) + 1}</span>
                        </div>
                        <h3 className={`${isFeatured ? 'text-5xl' : 'text-3xl'} font-serif italic tracking-tight text-gray-900 group-hover:text-[#C5A059] transition-colors leading-[0.9]`}>{name}</h3>
                        {rating && (
                            <div className="flex items-center gap-1.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-[#C5A059] fill-[#C5A059]' : 'text-gray-200'}`} />
                                ))}
                                <span className="text-[11px] font-black text-gray-400 ml-1 tracking-widest">{rating}/5.0</span>
                            </div>
                        )}
                    </div>
                    <div className="text-right">
                        <p className={`${isFeatured ? 'text-5xl' : 'text-3xl'} font-black tracking-tighter text-gray-900`}>{price}</p>
                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mt-1">VAT Included</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewCard = () => {
    const newArrivals = [
        {
            id: 1,
            name: "Noir Trench",
            price: "$895",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
            rating: 4.8,
            isNew: true,
            tag: "Winter 24",
            variant: "featured" // Make this featured
        },
        {
            id: 2,
            name: "Silk Weave",
            price: "$450",
            image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=1000",
            rating: 4.5,
        },
        {
            id: 3,
            name: "Urban Knit",
            price: "$280",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000",
            rating: 4.9,
            tag: "Best Seller"
        },
        {
            id: 4,
            name: "Modern Suit",
            price: "$1,200",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000",
            rating: 4.7,
            isNew: true
        },
        {
            id: 5,
            name: "Denim Essence",
            price: "$190",
            image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1000",
            rating: 4.6
        }
    ];

    const topSelling = [
        {
            id: 5,
            name: "Saffron Stripe",
            price: "$1,299",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000",
            rating: 5.0,
            tag: "Best Seller"
        },
        {
            id: 6,
            name: "Tokyo Graphic",
            price: "$799",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000",
            rating: 4.9,
            variant: "featured" // Central large item
        },
        {
            id: 7,
            name: "Linen Bermuda",
            price: "$999",
            image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000",
            rating: 4.2,
            tag: "Trending"
        },
        {
            id: 8,
            name: "Classic Denim",
            price: "$850",
            image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=1000",
            rating: 4.8,
            tag: "Classic"
        },
        {
            id: 9,
            name: "Summer Linen",
            price: "$650",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000",
            rating: 4.5
        }
    ];

    return (
        <div className="w-full max-w-[1700px] mx-auto px-4 md:px-12 py-32 space-y-64 bg-white overflow-hidden">
            <div className="mt-64 relative">
                {/* Massive Background Text */}
                <div className="absolute top-0 right-0 text-[15vw] font-black text-black/[0.02] select-none pointer-events-none -translate-y-1/2">
                    NEW_01
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 relative z-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Sparkles className="w-5 h-5 text-[#C5A059] animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-400">Curated Dispatch</span>
                        </div>
                        <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter text-black leading-[0.85] uppercase">
                            THE FRESH <br /> ARRIVALS.
                        </h2>
                    </div>
                    <div className="max-w-md text-right space-y-8">
                        <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
                            Explore the latest silhouettes added to our global archive. Meticulously verified and ready for curation.
                        </p>
                        <button className="inline-flex items-center gap-6 px-16 py-8 bg-black text-white rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#C5A059] transition-all active:scale-95 shadow-2xl">
                            View Entire Batch <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Staggered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
                    {newArrivals.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>

            {/* Cinematic Spotlight Divider */}
            <div className="mt-64 mb-64 relative h-[800px] rounded-[5rem] overflow-hidden group shadow-2xl">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Editorial Spotlight" />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-24">
                    <div className="w-px h-32 bg-[#C5A059] mb-12 animate-pulse" />
                    <h3 className="text-[12px] font-black uppercase tracking-[0.8em] text-[#C5A059] mb-8">Editorial Spotlight</h3>
                    <h2 className="text-7xl md:text-[8rem] font-serif italic text-white leading-none mb-12">Beyond the <br /> Silhouette.</h2>
                    <button className="px-20 py-8 glass-light text-black bg-white rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-gray-100 transition-all shadow-2xl">
                        Read The Feature
                    </button>
                </div>
            </div>

            {/* Top Selling Section - Editorial Layout */}
            <div className="mt-64 relative">
                {/* Massive Background Text */}
                <div className="absolute top-0 left-0 text-[15vw] font-black text-black/[0.02] select-none pointer-events-none -translate-y-1/2">
                    BEST_24
                </div>

                <div className="flex flex-col md:flex-row-reverse justify-between items-end gap-12 mb-24 relative z-10">
                    <div className="space-y-6 text-right">
                        <div className="flex items-center gap-4 justify-end">
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-400">Archive Favorites</span>
                            <div className="w-12 h-12 rounded-full glass-light flex items-center justify-center">
                                <ShoppingBag className="w-5 h-5 text-black" />
                            </div>
                        </div>
                        <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter text-black leading-[0.85] uppercase">
                            MOST <br /> VIBRANT.
                        </h2>
                    </div>
                    <div className="max-w-md text-left space-y-8">
                        <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
                            Pieces that have defined this season's aesthetic. High performance meets timeless craftsmanship.
                        </p>
                        <button className="inline-flex items-center gap-6 px-16 py-8 border-2 border-black text-black rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all active:scale-95">
                            Explore Popularity <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Staggered Grid reversed */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
                    {topSelling.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>

            {/* Editorial Collections */}
            <div className="mt-64">
                <div className="flex items-center gap-8 mb-24">
                    <h3 className="text-[14px] font-black uppercase tracking-[0.6em] text-gray-900">Themed Archives</h3>
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                    <div className="flex gap-4">
                        {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full border border-black/10" />)}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="aspect-[16/10] rounded-[5rem] bg-gray-100 overflow-hidden relative group cursor-pointer shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                        <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt="Footwear Elite" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-24 flex flex-col justify-end">
                            <h4 className="text-white text-7xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase">FOOTWEAR <br /> ELITE.</h4>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-[#C5A059]" />
                                <p className="text-[#C5A059] text-xs font-black uppercase tracking-[0.4em]">Autumn Winter 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-[16/10] rounded-[5rem] bg-gray-100 overflow-hidden relative group cursor-pointer shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                        <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt="Bespoke Tailoring" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-24 flex flex-col justify-end">
                            <h4 className="text-white text-7xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase">BESPOKE <br /> TAILORING.</h4>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-[#C5A059]" />
                                <p className="text-[#C5A059] text-xs font-black uppercase tracking-[0.4em]">Heritage Collection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCard;
