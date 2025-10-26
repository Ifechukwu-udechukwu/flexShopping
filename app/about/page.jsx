import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div>
        <Navbar />
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-4 text-green-600">About FlexShopping</h1>
      <p className="text-slate-700 leading-relaxed">
        FlexShopping is a modern e-commerce platform built for both shoppers and sellers. 
        It allows sellers to create their own stores, manage products easily, and even use AI 
        to automatically write product descriptions.  
        <br /><br />
        Our mission is to make online shopping faster, smarter, and more flexible for everyone.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition mt-35"
      >
         ← Back to Home
      </a>
    </div>
    </div>
  );
}
