'use client'
import { PackageIcon, Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUser, useClerk, UserButton, Protect } from "@clerk/nextjs";

const Navbar = () => {

    const { user } = useUser();
    const { openSignIn } = useClerk();
    const router = useRouter();

    const [search, setSearch] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartCount = useSelector(state => state.cart.total);

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/shop?search=${search}`);
        setSearch('');
        setIsMobileMenuOpen(false);
    }

    return (
        <nav className="relative bg-white">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">

                    <Link href="/" className="relative text-2xl sm:text-4xl mr-10 font-semibold text-slate-700">
                        <span className="text-green-600">flex</span>Shopping<span className="text-green-600 text-3xl sm:text-5xl leading-0">.</span>
                        <Protect plan="plus">
                            <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
                                plus
                            </p>
                        </Protect>
                    </Link>

                    {/* Desktop Menu (lg and above) */}
                    <div className="hidden lg:flex items-center gap-6 lg:gap-10 text-slate-600">
                        <Link href="/" className="hover:text-green-600 hover:underline">Home</Link>
                        <Link href="/shop" className="hover:text-green-600 hover:underline">Shop</Link>
                        <Link href="/store" className="hover:text-green-600 hover:underline">Store</Link>
                        <Link href="/about" className="hover:text-green-600 hover:underline">About</Link>
                        <Link href="/contact" className="hover:text-green-600 hover:underline">Contact</Link>

                        {/* Search Bar on Desktop */}
                        <form onSubmit={handleSearch} className="flex items-center text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full">
                            <Search size={18} className="text-slate-600" />
                            <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
                            <ShoppingCart size={18} />
                            Cart
                            <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">{cartCount}</button>
                        </Link>

                        {
                            !user ? (
                                <button onClick={openSignIn} className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                                    Login
                                </button>
                            ) : (
                                <UserButton>
                                    <UserButton.MenuItems>
                                        <UserButton.Action labelIcon={<PackageIcon size={16} />} label="My Orders" onClick={() => router.push("/orders")} />
                                    </UserButton.MenuItems>
                                </UserButton>
                            )
                        }
                    </div>

                    {/* Mobile/Tablet Menu Button and User Actions (md and below) */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <Link href="/cart" className="relative">
                            <ShoppingCart size={20} className="text-slate-600" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 text-[8px] text-white bg-slate-600 size-4 rounded-full flex items-center justify-center">{cartCount}</span>
                            )}
                        </Link>

                        {user ? (
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action labelIcon={<PackageIcon size={16} />} label="My Orders" onClick={() => router.push("/orders")} />
                                </UserButton.MenuItems>
                            </UserButton>
                        ) : (
                            <button onClick={openSignIn} className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full">
                                Login
                            </button>
                        )}

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-600"
                        >
                            {isMobileMenuOpen ? <X size={20} className="hover:text-red-500" /> : <Menu size={20} className="hover:text-green-500" />}
                        </button>
                    </div>
                </div>

                {/* Side Menu Overlay (md and below) */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden">
                        {/* Slide-in Menu */}
                        <div className="fixed top-0 my-1 right-0 h-3/4 w-72 bg-white shadow-2xl z-50 border-l border-gray-300 rounded-bl-2xl">
                            <div className="flex flex-col h-full">
                                {/* Menu Header - matches navbar exactly */}
                                <div className="px-6">
                                    <div className="flex items-center justify-end py-4">
                                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-600 hover:text-red-500">
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>
                                <hr className="border-gray-300" />

                                {/* Menu Content */}
                                <div className="flex-1 overflow-y-auto p-6">
                                    {/* Search Bar */}
                                    <form onSubmit={handleSearch} className="mb-6">
                                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-3 rounded-full">
                                            <Search size={18} className="text-slate-600" />
                                            <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} />
                                        </div>
                                    </form>

                                    {/* Navigation Links */}
                                    <div className="space-y-2">
                                        <Link href="/" className="block py-3 px-4 text-slate-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                                        <Link href="/shop" className="block py-3 px-4 text-slate-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                                        <Link href="/store" className="block py-3 px-4 text-slate-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition" onClick={() => setIsMobileMenuOpen(false)}>Store</Link>
                                        <Link href="/about" className="block py-3 px-4 text-slate-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                                        <Link href="/contact" className="block py-3 px-4 text-slate-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <hr className="border-gray-300" />
        </nav>
    )
}

export default Navbar;