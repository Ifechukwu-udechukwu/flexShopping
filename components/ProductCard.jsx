'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <Link href={`/product/${product.id}`} className='group block w-full'>
            <div className='bg-[#F5F5F5] h-32 sm:h-40 w-full rounded-lg flex items-center justify-center overflow-hidden'>
                <Image width={500} height={500} className='max-h-24 sm:max-h-32 w-auto group-hover:scale-110 transition duration-300' src={product.images[0]} alt="" />
            </div>
            <div className='flex justify-between gap-2 sm:gap-3 text-xs sm:text-sm text-slate-800 pt-2'>
                <div className='flex-1 min-w-0'>
                    <p className='truncate text-xs sm:text-sm font-medium'>{product.name}</p>
                    <div className='flex mt-1'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon key={index} size={12} className='text-transparent' fill={rating >= index + 1 ? "#00C950" : "#D1D5DB"} />
                        ))}
                    </div>
                </div>
                <p className='text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap'>{currency}{product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard