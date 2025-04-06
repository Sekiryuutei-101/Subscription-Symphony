import React from 'react';
import { IoCheckmark } from "react-icons/io5";

export default function Pricing() {
    return (
        <div className="bg-[#E97263] min-h-screen flex items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Plan */}
                <div className="bg-[#D95D4F] w-xl p-8 rounded-lg shadow-lg text-white">
                    <h2 className="text-lg font-semibold">Basic</h2>
                    <p className="text-4xl font-black my-4 text-black" >$4.99/mo</p>
                    <ul className="mb-6">
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> 5 Platforms</li>
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> Pro Analytics</li>
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> Monthly Reports</li>
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> Email Support</li>
                    </ul>
                    <button className="bg-black text-[#C9CBA3] py-3 px-6 rounded-full flex items-center justify-center w-full">Sign Up</button>
                </div>
                {/* Unlimited Plan */}
                <div className="bg-[#D95D4F] p-8 rounded-lg shadow-lg text-white">
                    <h2 className="text-lg font-semibold">Unlimited</h2>
                    <p className="text-4xl font-black my-4 text-black">$12.99/mo</p>
                    <ul className="mb-6">
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> Unlimited Platforms</li>
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> Advanced Analytics</li>
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> Weekly Reports</li>
                        <li className="text-white flex items-center gap-1"><IoCheckmark className="inline" /> 24/7 Support</li>
                    </ul>
                    <button className="bg-black text-[#C9CBA3] py-3 px-6 rounded-full flex items-center justify-center w-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
}
