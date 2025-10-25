'use client'
import { useUser, UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import Link from "next/link"

const AdminNavbar = ({ onMenuClick }) => {

    const {user} = useUser()

    return (
        <div className="flex items-center justify-between px-4 sm:px-12 py-3 border-b border-slate-200 transition-all">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button 
                    onClick={onMenuClick}
                    className="lg:hidden p-2 text-slate-600 hover:text-slate-800"
                >
                    <Menu size={20} />
                </button>
                
                <Link href="/" className="relative text-2xl sm:text-4xl font-semibold text-slate-700">
                    <span className="text-green-600">flex</span>Shopping<span className="text-green-600 text-3xl sm:text-5xl leading-0">.</span>
                    <p className="absolute text-xs font-semibold -top-1 -right-13 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
                        Admin
                    </p>
                </Link>
            </div>
            
            <div className="flex items-center gap-3">
                <p className="hidden sm:block">Hi, {user?.firstName}</p>
                <UserButton />
            </div>
        </div>
    )
}

export default AdminNavbar