
import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo = ({ variant = 'dark', size = 'md', className = '' }) => {
    const isLight = variant === 'light';

    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-4xl'
    };

    return (
        <div className={`flex items-center gap-2 font-black tracking-tighter ${sizeClasses[size]} ${className}`}>
            <div className={`relative flex items-center justify-center ${size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'}`}>
                <Sparkles className={`absolute w-full h-full ${isLight ? 'text-[#C5A059]' : 'text-black'} animate-pulse`} strokeWidth={1.5} />
            </div>
            <span className={isLight ? 'text-white' : 'text-black'}>
                SHOP.CO
            </span>
        </div>
    );
};

export default Logo;
