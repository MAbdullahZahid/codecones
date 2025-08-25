// components/Modal.tsx
import React, { useState } from "react";
import Image from "next/image"; // To handle the image import
import img1 from '../../public/assets/Ellipse 4.svg'; // Image 1
import img2 from '../../public/assets/Ellipse 5.svg'; // Image 2

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceClick = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-[400px] md:w-[500px] lg:w-[600px] relative z-60 shadow-lg overflow-auto max-h-[80vh]">
        {/* Close Button */}
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-black text-xl font-bold"
        >
          X
        </button>

        {/* Profile Pictures & Title */}
        <div className="flex items-center mb-4">
          <div className="relative mr-4">
            {/* First Image */}
            <Image 
              src={img1} 
              alt="Expert 1" 
              width={40} 
              height={40} 
              className="rounded-full border-2 border-white"
            />
            {/* Second Image slightly overlapping the first */}
            <Image 
              src={img2} 
              alt="Expert 2" 
              width={40} 
              height={40} 
              className="rounded-full border-2 border-white absolute top-0 left-6"
            />
          </div>
          {/* Modal Title with Linear Gradient */}
          <h2 className="text-2xl font-bold ml-8"> {/* Added margin-left */}
            <span className="text-[#1C1C1C]">Book a call </span>
            <span className="text-[#828282]">
              with our experts
            </span>
          </h2>
        </div>

        {/* Subtext below the title */}
        <p className="text-gray-600 mb-4 ml-8"> {/* Same margin-left for alignment */}
          to discuss your goals and build a project
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* First Row: Email and Full Name */}
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border border-gray-300 rounded-md" 
            />
            <input 
              type="text" 
              placeholder="Full name" 
              className="w-full p-3 border border-gray-300 rounded-md" 
            />
          </div>

          {/* Second Row: Project Budget and How did you hear about us */}
          <div className="flex gap-4">
            <select className="w-full p-3 border border-gray-300 rounded-md">
              <option value="">Project Budget</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <select className="w-full p-3 border border-gray-300 rounded-md">
              <option value="">How did you hear about us?</option>
              <option value="google">Google</option>
              <option value="social-media">Social Media</option>
              <option value="referral">Referral</option>
            </select>
          </div>

          {/* Message */}
          <textarea 
            placeholder="Message" 
            className="w-full p-3 h-13 border border-gray-300 rounded-md" 
            rows={4}
          ></textarea>

          {/* Service Options (Clickable) */}
          <div className="flex gap-4 mb-4 flex-wrap">
            {["Custom Software", "Cloud Solution", "DevOps", "UX/UI Design", "Staff Augmentation"].map(service => (
              <button
                key={service}
                onClick={() => handleServiceClick(service)}
                type="button"
                className={`p-2 rounded-full ${selectedServices.includes(service) ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Send Button and Email */}
          <div className="flex justify-between items-center">
            <button type="submit" className="w-[70%] bg-yellow-500 text-white py-3 rounded-full">
              Send Message
            </button>
            <p className="w-[30%] text-right text-sm">
              Prefer email? <a href="mailto:hello@codecones.com" className="text-blue-600">hello@codecones.com</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
