import React from 'react';
import Img1 from "./assets/myImage.png";
import Img2 from "./assets/3.png";
import Img3 from "./assets/myImage2.png"
export default function ManageSubs() {
    return (
        <div className="bg-[#E97263] min-h-screen w-full py-16 px-8 flex flex-col items-center justify-center">
            <div className="max-w-6xl mx-auto w-full text-center">
                <h1 className="text-5xl font-bold mb-6 text-black">Manage your Subscriptions</h1>
                
                <p className="text-center text-white max-w-3xl mx-auto mb-16">
                    Effortlessly keep track of all your subscriptions in one place. No more guessing
                    where your money is going or dealing with unexpected charges. With SubView,
                    you gain full control over your recurring expenses, ensuring you never miss a
                    renewal or overspend. Stay informed, stay empowered, and manage your
                    subscriptions like a pro—seamlessly and stress-free.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#E97263] p-6 rounded-lg border-2 border-[#E97263] shadow-lg">
                        <div className="mb-4 h-36 overflow-hidden rounded-lg">
                            <img 
                                src={Img1}
                                alt="Roller skate" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Abundance of Subscriptions</h3>
                        <p className="text-white text-sm">Every subscription under one roof</p>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-[#E97263] p-6 rounded-lg border-2 border-[#E97263] shadow-lg">
                        <div className="mb-4 h-36 overflow-hidden rounded-lg">
                            <img 
                                src={Img2} 
                                alt="Person sitting" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Track your Spendings</h3>
                        <p className="text-white text-sm">Never let savings leak again</p>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="bg-[#E97263] p-6 rounded-lg border-2 border-[#E97263] shadow-lg">
                        <div className="mb-4 h-36 overflow-hidden rounded-lg">
                            <img 
                                src={Img3} 
                                alt="Abstract pattern" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Automate Expense Analytics</h3>
                        <p className="text-white text-sm">Stay effortlessly on top of expenses</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 