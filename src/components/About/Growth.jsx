import React from 'react';
import growthImg from '@/assets/Growth.webp'
import Image from 'next/image';

const Growth = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-10 min-h-screen max-w-screen-lg mx-auto'>
            <h2 className='text-center text-3xl font-bold'>How we evolved over the years</h2>
            <Image src={growthImg} alt="growth"></Image>
        </div>
    );
};

export default Growth;