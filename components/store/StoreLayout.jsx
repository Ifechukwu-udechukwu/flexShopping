'use client'
import { useEffect, useState } from "react"
import Loading from "../Loading"
import Link from "next/link"
import { ArrowRightIcon, Menu, X } from "lucide-react"
import SellerNavbar from "./StoreNavbar"
import SellerSidebar from "./StoreSidebar"
import { dummyStoreData } from "@/assets/assets"
import { useAuth } from "@clerk/nextjs"
import axios from "axios"

const StoreLayout = ({ children }) => {

    const {getToken} = useAuth()



    const [isSeller, setIsSeller] = useState(false)
    const [loading, setLoading] = useState(true)
    const [storeInfo, setStoreInfo] = useState(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const fetchIsSeller = async () => {
        try {
            const token = await getToken()
            const {data} = await axios.get("/api/store/is-seller", {headers: {Authorization: `Bearer ${token}`}})
            setIsSeller(data.isSeller)
            setStoreInfo(data.storeInfo)
        } catch (error) {
            console.log("API Error:", error.response?.data || error.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchIsSeller()
    }, [])

    return loading ? (
        <Loading />
    ) : isSeller ? (
        <div className="flex flex-col h-screen">
            <SellerNavbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex flex-1 items-start h-full overflow-y-scroll no-scrollbar">
                {/* Mobile Sidebar Overlay */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)}></div>
                        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="text-lg font-semibold">Menu</h2>
                                <button onClick={() => setIsSidebarOpen(false)} className="p-2">
                                    <X size={20} />
                                </button>
                            </div>
                            <SellerSidebar storeInfo={storeInfo} isMobile={true} onLinkClick={() => setIsSidebarOpen(false)} />
                        </div>
                    </div>
                )}
                
                {/* Desktop Sidebar */}
                <div className="hidden lg:block">
                    <SellerSidebar storeInfo={storeInfo} />
                </div>
                
                <div className="flex-1 h-full p-3 sm:p-5 lg:pl-12 lg:pt-12 overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-2xl sm:text-4xl font-semibold text-slate-400">You are not authorized to access this page</h1>
            <Link href="/" className="bg-slate-700 text-white flex items-center gap-2 mt-8 p-2 px-6 max-sm:text-sm rounded-full">
                Go to home <ArrowRightIcon size={18} />
            </Link>
        </div>
    )
}

export default StoreLayout