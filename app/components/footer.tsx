import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="relative bg-black text-white py-8 md:py-16 rounded-tl-[28px] rounded-tr-[28px] overflow-hidden">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
                    {/* Left Section */}
                    <div className="footer-left max-w-md">
                        <Image 
                            src="/assets/footerlogo.svg"
                            alt="Footer Logo" 
                            width={160} 
                            height={80}
                            className="w-40 md:w-48"
                        />
                        <p className="mt-4 text-sm md:text-base">
                            A software development firm delivering innovative, custom solutions—from scalable SaaS and cloud migrations to full-stack design and DevOps excellence.
                        </p>
                        <button className="mt-6 px-4 py-2 bg-[#FBAD18] text-[#1C1C1C] rounded-[500px] flex items-center text-sm md:text-base">
                            Company Deck
                            <span className="ml-2">
                                <Image 
                                    src="./assets/downloadbtn.svg"
                                    alt="check circle" 
                                    width={20} 
                                    height={20} 
                                />
                            </span>
                        </button>
                    </div>
                    
                    {/* Right Section */}
                    <div className="footer-right grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                        <div className="footer-services">
                            <h3 className="font-medium text-base md:text-lg">Services</h3>
                            <ul className="mt-2 space-y-2 text-sm text-[#A7A7A7]">
                                <li>Custom Software</li>
                                <li>Cloud Solution</li>
                                <li>DevOps</li>
                                <li>UX/UI Design</li>
                                <li>Staff Augmentation</li>
                            </ul>
                        </div>
                        <div className="footer-products">
                            <h3 className="font-medium text-base md:text-lg">Products</h3>
                            <ul className="mt-2 space-y-2 text-sm text-[#A7A7A7]">
                                <li>ResolveCX</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                                <li>Option 4</li>
                                <li>Option 5</li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3 className="font-medium text-base md:text-lg">Contact</h3>
                            <ul className="mt-2 space-y-2 text-sm text-[#A7A7A7]">
                                <li>WhatsApp</li>
                                <li>LinkedIn</li>
                                <li>Clutch</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Social and CTA Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">
                    {/* Social Media Links */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-[#A7A7A7]">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                    
                    {/* Call to Action Section */}
                    <div className="flex items-center gap-2">
                        <div className="text-right">
                            <p className="text-sm text-white">Let&apos;s work together</p>
                            <p className="font-medium text-lg md:text-xl text-[#FBAD18]">Call Codecones</p>
                        </div>
                        <button>
                            <Image 
                                src="/assets/phonebtn.svg"
                                alt="Phone icon"
                                width={40}
                                height={40}
                                className="md:w-12 md:h-12"
                            />
                        </button>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 my-6 md:my-8"></div>
                
                {/* Copyright Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                    <p className="text-sm text-[#A7A7A7]">codecones LLC © 2025</p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-[#A7A7A7]">
                        <span className="text-center">Codecones is a limited liability company based in</span>
                        <div className="flex items-center gap-2">
                            <Image 
                                src="/assets/flags.png"
                                alt="Flags"
                                width={48}
                                height={24}
                            />
                            
                            {/* Overlapping Person Avatars */}
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/people1.svg"
                                    alt="Person 1"
                                    width={28}
                                    height={28}
                                    className="rounded-full border-2 border-black w-7 h-7"
                                />
                                <Image 
                                    src="/assets/people2.svg"
                                    alt="Person 2"
                                    width={28}
                                    height={28}
                                    className="rounded-full border-2 border-black -ml-2 w-7 h-7"
                                />
                                <Image 
                                    src="/assets/people3.svg"
                                    alt="Person 3"
                                    width={28}
                                    height={28}
                                    className="rounded-full border-2 border-black -ml-2 w-7 h-7"
                                />
                                <Image 
                                    src="/assets/questionPerson.svg"
                                    alt="Person 4"
                                    width={28}
                                    height={28}
                                    className="rounded-full border-2 border-black -ml-2 w-7 h-7"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Logo */}
            <Image 
                src="/assets/endfooter logo.svg"
                alt="End Footer Logo"
                width={400}
                height={133}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[5%] pointer-events-none w-3/4 max-w-lg hidden md:block"
            />
        </div>
    );  
}

export default Footer;