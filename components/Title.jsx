'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-xl sm:text-2xl font-semibold text-slate-800'>{title}</h2>
            <Link href={href} className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-xs sm:text-sm text-slate-600 mt-2'>
                <p className='max-w-lg text-center'>{description}</p>
                {visibleButton && <button className='text-green-500 flex items-center gap-1 text-xs sm:text-sm'>View more <ArrowRight size={12} className="sm:hidden" /><ArrowRight size={14} className="hidden sm:block" /></button>}
            </Link>
        </div>
    )
}

export default Title