import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
      <div className="relative bg-black text-white py-16 rounded-tl-[28px] rounded-tr-[28px] overflow-hidden">

            <div className="max-w-7xl mx-auto flex justify-between px-8">
                <div className="footer-left max-w-sm">
                    <Image 
                        src="/assets/footerlogo.svg"
                        alt="Footer Logo" 
                        width={200} 
                        height={200} 
                    />
                    <p className="mt-4 text-sm">
                        A software development firm delivering innovative, custom solutions—from scalable SaaS and cloud migrations to full-stack design and DevOps excellence.
                    </p>
                    <button className="mt-6 px-4 py-2 bg-[#FBAD18] text-[#1C1C1C] rounded-[500px] flex items-center">
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
                
                {/* Footer right section */}
                <div className="footer-right flex space-x-16">
                    <div className="footer-services">
                        <h3 className="font-medium">Services</h3>
                        <ul className="mt-2 space-y-2 text-sm text-[#A7A7A7]">
                            <li>Custom Software</li>
                            <li>Cloud Solution</li>
                            <li>DevOps</li>
                            <li>UX/UI Design</li>
                            <li>Staff Augmentation</li>
                        </ul>
                    </div>
                    <div className="footer-products">
                        <h3 className="font-medium">Products</h3>
                        <ul className="mt-2 space-y-2 text-sm text-[#A7A7A7]">
                            <li>ResolveCX</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                            <li>Option 5</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3 className="font-medium">Contact</h3>
                        <ul className="mt-2 space-y-2 text-sm text-[#A7A7A7]">
                            <li>WhatsApp</li>
                            <li>LinkedIn</li>
                            <li>Clutch</li>
                        </ul>
                    </div>
                </div>
            </div>
            
           
            {/* Footer bottom section with Social Media and Call to Action */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
                {/* Social Media Links */}
                <div className="flex space-x-8 text-sm text-[#A7A7A7]">
                    <a href="#" className="hover:text-white">LinkedIn</a>
                    <a href="#" className="hover:text-white">Facebook</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                </div>
                
                {/* Call to Action Section */}
                <div className="flex items-center space-x-1">
                    <span>
  <p className="text-sm text-white">Let&apos;s work together</p>
                     <p className="font-medium text-[20px] text-[#FBAD18]">Call Codecones</p>
                    </span>
                  
                    <button className="">
                       
                        <Image 
                            src="/assets/phonebtn.svg"
                            alt="Phone icon"
                            width={50}
                            height={50}
                            className="ml-2"
                        />
                    </button>
                </div>
            </div>
 <div className="border-t border-gray-700 my-8"></div>
       <div className="max-w-7xl mx-auto flex justify-between items-center px-8 mt-8">
    <p className="text-sm text-[#A7A7A7]">codecones LLC © 2025</p>
    
    <div className="flex items-center space-x-2 text-sm text-[#A7A7A7]">
        <span>Codecones is a limited liability company based in</span>
        <Image 
            src="/assets/flags.png"
            alt="Flags"
            width={48}
            height={24}
        />
        
        {/* Overlapping Person Avatars */}
        <div className="flex items-center ml-4">
            <Image 
                src="/assets/people1.svg"
                alt="Person 1"
                width={32}
                height={32}
                className="rounded-full border-2 border-black"
            />
            <Image 
                src="/assets/people2.svg"
                alt="Person 2"
                width={32}
                height={32}
                className="rounded-full border-2 border-black -ml-2"
            />
            <Image 
                src="/assets/people3.svg"
                alt="Person 3"
                width={32}
                height={32}
                className="rounded-full border-2 border-black -ml-2"
            />
            <Image 
                src="/assets/questionPerson.svg"
                alt="Person 4"
                width={32}
                height={32}
                className="rounded-full border-2 border-black -ml-2"
            />
        </div>
    </div>
</div>
<Image 
  src="/assets/endfooter logo.svg"
  alt="End Footer Logo"
  width={600}
  height={200}
  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[5%] pointer-events-none"
/>


        </div>
    );  
}

export default Footer;
