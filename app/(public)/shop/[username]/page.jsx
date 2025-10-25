'use client'
import ProductCard from "@/components/ProductCard"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { MailIcon, MapPinIcon } from "lucide-react"
import Loading from "@/components/Loading"
import Image from "next/image"
import axios from "axios"
import toast from "react-hot-toast"

export default function StoreShop() {

    const { username } = useParams()
    const [products, setProducts] = useState([])
    const [storeInfo, setStoreInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchStoreData = async () => {
        try {
            const {data} = await axios.get(`/api/store/data?username=${username}`);
            setStoreInfo(data.store)
            setProducts(data.store.Product)
        } catch (error) {
            toast.error(error?.response?.data?.error || error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchStoreData()
    }, [])

    return !loading ? (
        <div className="min-h-[70vh] mx-3 sm:mx-6">

            {/* Store Info Banner */}
            {storeInfo && (
                <div className="max-w-7xl mx-auto bg-slate-50 rounded-xl p-4 sm:p-6 md:p-10 mt-4 sm:mt-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6 shadow-xs">
                    <Image
                        src={storeInfo.logo}
                        alt={storeInfo.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-38 md:h-38 object-cover border-2 border-slate-100 rounded-md"
                        width={200}
                        height={200}
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800">{storeInfo.name}</h1>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg">{storeInfo.description}</p>
                        <div className="text-xs text-slate-500 mt-4 space-y-1"></div>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-500">
                            <div className="flex items-center">
                                <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mr-2" />
                                <span className="truncate">{storeInfo.address}</span>
                            </div>
                            <div className="flex items-center">
                                <MailIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mr-2" />
                                <span className="truncate">{storeInfo.email}</span>
                            </div>
                           
                        </div>
                    </div>
                </div>
            )}

            {/* Products */}
            <div className="max-w-7xl mx-auto mb-20 sm:mb-40">
                <h1 className="text-xl sm:text-2xl mt-8 sm:mt-12">Shop <span className="text-slate-800 font-medium">Products</span></h1>
                <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-12 mx-auto">
                    {products.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    ) : <Loading />
}