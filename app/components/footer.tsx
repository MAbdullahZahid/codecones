import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
       <div className="bg-black text-white py-16 rounded-tl-[28px] rounded-tr-[28px]">
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
        
        </div>
    );
}

export default Footer;
