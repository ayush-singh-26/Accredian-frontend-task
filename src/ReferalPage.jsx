import React, { useState } from "react";
import ReferEarnForm from "./ReferEarnForm";

function ReferalPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Navbar */}
            <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
                <div className="text-blue-600 font-bold text-lg">Refer&Earn</div>
                <ul className="flex space-x-6">
                    <li><a href="/refer" className="text-blue-600 border-b-2 border-blue-600 pb-1">Refer</a></li>
                    <li><a href="/benefits" className="text-gray-700 hover:text-blue-600">Benefits</a></li>
                    <li><a href="/faqs" className="text-gray-700 hover:text-blue-600">FAQs</a></li>
                    <li><a href="/support" className="text-gray-700 hover:text-blue-600">Support</a></li>
                </ul>
                <div className="space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Try For Free</button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center mt-12 px-6 max-w-6xl">
                {/* Left Content */}
                <div className="w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900">Let’s Learn & Earn</h1>
                    <p className="text-lg text-gray-600 mt-2">Get a chance to win up to <span className="text-blue-600 font-semibold">Rs. 15,000</span></p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Refer & Earn
                    </button>

                    {isOpen && <ReferEarnForm isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
                {/* Right Image */}
                <div className="w-1/2">
                    <img src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvksDg7T0LYUOHyxT~iVlCN70n51xvwbxWkUQMlpKqm5DcBwCoLfRGDRHQHnYLQIky0ps7bFzaGRXS~Li1735L9Sjqnnit4qZx7c09Or5D38idEJGw1L1zP~Do9ILaZflh1LQS9Rie5HJfzsYEx920jw9TOeFDpwL-SX3S~6p5nBnZsw1KjP4O7WLauroSwctv54uSC1fGN~~RIgmlvUU76B4QEck5wnapZapc~gazWRH9rLG45Phhqx07U-yN2AGIrVt7nmgqJABgWgtYkO4WDypUXdWG3gMP8P5JO4cBnKvvWMBCZkD9QaEgzZeGwYqV561xLHLNMPwbKVJs-6cQ__" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ReferalPage;
