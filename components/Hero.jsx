'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon, Router } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-3 sm:mx-6'>
            <div className='flex max-xl:flex-col gap-6 sm:gap-8 max-w-7xl mx-auto my-6 sm:my-10'>
                <div className='relative flex-1 flex flex-col bg-green-200 rounded-2xl sm:rounded-3xl xl:min-h-100 group overflow-hidden'>
                    <div className='p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 z-10'>
                        <div className='inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-green-300 text-green-600 pr-2 sm:pr-3 md:pr-4 p-1 rounded-full text-[10px] sm:text-xs md:text-sm'>
                            <span className='bg-green-600 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-white text-[10px] sm:text-xs'>NEWS</span> 
                            <span className="hidden xs:inline text-[10px] sm:text-xs">Free Shipping Above #20,000</span>
                            <span className="xs:hidden text-[10px]">Free Shipping #20k+</span>
                            <ChevronRightIcon className='group-hover:ml-2 transition-all' size={12} />
                        </div>
                        <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] my-2 sm:my-3 md:my-4 font-medium text-slate-800 max-w-[280px] xs:max-w-xs sm:max-w-md'>
                            Products you'll love. Prices you'll trust.
                        </h2>
                        <div className='text-slate-800 text-xs sm:text-sm font-medium mt-3 sm:mt-4 md:mt-6 lg:mt-8'>
                            <p>Starts from</p>
                            <p className='text-xl xs:text-2xl sm:text-3xl'>{currency}3000</p>
                        </div>
                        <a href="/shop" className='hidden sm:block'>
                            <button className='bg-slate-800 text-white text-xs sm:text-sm py-2 px-5 sm:py-3 sm:px-8 md:py-4 md:px-10 lg:py-5 lg:px-12 mt-3 sm:mt-6 md:mt-8 lg:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition w-full sm:w-auto'>
                                LEARN MORE
                            </button>
                        </a>
                    </div>
                    <div className='relative w-full sm:absolute sm:bottom-0 sm:right-0 md:right-10 flex justify-center sm:justify-end'>
                        <Image className='w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm h-auto max-h-56 xs:max-h-64 sm:max-h-none object-contain' src={assets.hero_model_img} alt="" />
                    </div>
                    <a href="/shop" className='sm:hidden px-4 pb-4 mt-3 z-10'>
                        <button className='bg-slate-800 text-white text-xs py-2.5 px-6 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition w-full'>
                            LEARN MORE
                        </button>
                    </a>
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-4 sm:gap-5 w-full xl:max-w-sm text-xs sm:text-sm text-slate-600'>
                    <div className='flex-1 flex items-center justify-between w-full bg-orange-200 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 px-4 sm:px-6 md:px-8 group'>
                        <div className="flex-1">
                            <p className='text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-[120px] xs:max-w-[140px] sm:max-w-40'>Best products</p>
                            <a href="/shop">
                                <p className='flex items-center gap-1 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={14} /> </p>
                            </a>
                        </div>
                        <Image className='w-16 xs:w-20 sm:w-28 md:w-35 h-auto' src={assets.hero_product_img1} alt="" />
                    </div>
                    <div className='flex-1 flex items-center justify-between w-full bg-blue-200 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 px-4 sm:px-6 md:px-8 group'>
                        <div className="flex-1">
                            <p className='text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-[120px] xs:max-w-[140px] sm:max-w-40'>20% discounts</p>
                            <a href="#best">
                                <p className='flex items-center gap-1 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={14} /> </p>
                            </a>
                        </div>
                        <Image className='w-16 xs:w-20 sm:w-28 md:w-35 h-auto' src={assets.hero_product_img2} alt="" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero