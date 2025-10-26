'use client';
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";

export default function ContactPage() {


    const onSubmit = async (event) => {
    event.preventDefault();
    const loading = toast.loading("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb4afefb-1c0c-4256-ae8c-91b723cabd2d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    toast.dismiss(loading)
    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };


  return (
    <div>
        <Navbar />
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold mb-6 text-green-600">Contact Us</h1>
      <p className="text-slate-700 mb-8">
        Have questions or feedback? We’d love to hear from you!  
        Fill out the form below or reach out through our support email.
      </p>

      <form onSubmit={onSubmit} className="space-y-4 flex flex-col items-center">
        <input
          type="text"
          placeholder="Your Name:"
          name="name"
          className="w-100 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email:"
          className="w-100 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          placeholder="Your Message:"
          name="message"
          rows="4"
          className="w-100 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form> 
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
