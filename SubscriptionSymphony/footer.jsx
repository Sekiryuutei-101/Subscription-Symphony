import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTwitch } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-[#E97263] py-16 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Company</h2>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Legal</h2>
                        <ul>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Help</h2>
                        <ul>
                            <li>Support</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <FaTwitter />
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitch />
                </div>
                <p className="text-white">© 2025 SubView, Inc.</p>
            </div>
        </div>
    );
}
