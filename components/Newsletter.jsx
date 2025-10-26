'use client';
import React from 'react'
import Title from './Title'
import toast from 'react-hot-toast';

const Newsletter = () => {

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
            toast.success("Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
        }
    };

    return (
        <div className='flex flex-col items-center mx-4 my-36'>
            <form onSubmit={onSubmit}>
                <Title title="Join Newsletter" description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week." visibleButton={false} />
                <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
                    <input name='email' required className='flex-1 pl-5 outline-none' type="text" placeholder='Enter your email address' />
                    <button className='font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-103 active:scale-95 transition'>Get Updates</button>
                </div>
            </form>
        </div>
        
    )
}

export default Newsletter