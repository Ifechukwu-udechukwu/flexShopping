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
                <div className='relative flex-1 flex flex-col bg-green-200 rounded-2xl sm:rounded-3xl xl:min-h-100 group'>
                    <div className='p-4 sm:p-8 lg:p-16'>
                        <div className='inline-flex items-center gap-2 sm:gap-3 bg-green-300 text-green-600 pr-3 sm:pr-4 p-1 rounded-full text-xs sm:text-sm'>
                            <span className='bg-green-600 px-2 sm:px-3 py-1 rounded-full text-white text-xs'>NEWS</span> 
                            <span className="hidden sm:inline">Free Shipping on Orders Above #20,000</span>
                            <span className="sm:hidden">Free Shipping Above #20,000</span>
                            <ChevronRightIcon className='group-hover:ml-2 transition-all' size={14} />
                        </div>
                        <h2 className='text-2xl sm:text-3xl lg:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md'>
                            Products you'll love. Prices you'll trust.
                        </h2>
                        <div className='text-slate-800 text-sm font-medium mt-4 sm:mt-8'>
                            <p>Starts from</p>
                            <p className='text-2xl sm:text-3xl'>{currency}4.90</p>
                        </div>
                        <a href="/shop">
                            <button className='bg-slate-800 text-white text-sm py-2.5 px-6 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition w-full sm:w-auto'>
                                LEARN MORE
                            </button>
                        </a>
                    </div>
                    <Image className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm max-h-48 sm:max-h-none' src={assets.hero_model_img} alt="" />
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-4 sm:gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
                    <div className='flex-1 flex items-center justify-between w-full bg-orange-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 px-6 sm:px-8 group'>
                        <div className="flex-1">
                            <p className='text-xl sm:text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40'>Best products</p>
                            <a href="/shop">
                                <p className='flex items-center gap-1 mt-2 sm:mt-4 text-sm sm:text-base'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={16} /> </p>
                            </a>
                        </div>
                        <Image className='w-20 sm:w-35 h-auto' src={assets.hero_product_img1} alt="" />
                    </div>
                    <div className='flex-1 flex items-center justify-between w-full bg-blue-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 px-6 sm:px-8 group'>
                        <div className="flex-1">
                            <p className='text-xl sm:text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40'>20% discounts</p>
                            <a href="#best">
                                <p className='flex items-center gap-1 mt-2 sm:mt-4 text-sm sm:text-base'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={16} /> </p>
                            </a>
                        </div>
                        <Image className='w-20 sm:w-35 h-auto' src={assets.hero_product_img2} alt="" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero