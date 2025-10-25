'use client'
import { ArrowRight, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductDescription = ({ product }) => {

    const [selectedTab, setSelectedTab] = useState('Description')

    return (
        <div className="my-12 sm:my-18 text-sm text-slate-600">

            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-4 sm:mb-6 max-w-2xl">
                {['Description', 'Reviews'].map((tab, index) => (
                    <button className={`${tab === selectedTab ? 'border-b-[1.5px] font-semibold' : 'text-slate-400'} px-3 py-2 font-medium text-sm sm:text-base`} key={index} onClick={() => setSelectedTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Description */}
            {selectedTab === "Description" && (
                <p className="max-w-xl text-sm sm:text-base">{product.description}</p>
            )}

            {/* Reviews */}
            {selectedTab === "Reviews" && (
                <div className="flex flex-col gap-3 mt-8 sm:mt-14">
                    {product.rating.map((item,index) => (
                        <div key={index} className="flex gap-3 sm:gap-5 mb-6 sm:mb-10">
                            <Image src={item.user.image} alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0" width={100} height={100} />
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center" >
                                    {Array(5).fill('').map((_, index) => (
                                        <StarIcon key={index} size={16} className='text-transparent mt-0.5' fill={item.rating >= index + 1 ? "#00C950" : "#D1D5DB"} />
                                    ))}
                                </div>
                                <p className="text-xs sm:text-sm max-w-lg my-2 sm:my-4 break-words">{item.review}</p>
                                <p className="font-medium text-slate-800 text-sm sm:text-base">{item.user.name}</p>
                                <p className="mt-2 sm:mt-3 font-light text-xs sm:text-sm">{new Date(item.createdAt).toDateString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Store Page */}
            <div className="flex gap-3 mt-8 sm:mt-14">
                <Image src={product.store.logo} alt="" className="w-8 h-8 sm:w-11 sm:h-11 rounded-full ring ring-slate-400 flex-shrink-0" width={100} height={100} />
                <div className="min-w-0">
                    <p className="font-medium text-slate-600 text-sm sm:text-base">Product by {product.store.name}</p>
                    <Link href={`/shop/${product.store.username}`} className="flex items-center gap-1.5 text-green-500 text-xs sm:text-sm"> view store <ArrowRight size={12} className="sm:hidden" /><ArrowRight size={14} className="hidden sm:block" /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription