import React, { useState } from 'react';
import Image from 'next/image';

const FrequentlyAskedQuestions = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { 
      question: 'What services does CodeCones offer?', 
      answer: (
        <div>
          <p>CodeCones provides a full spectrum of services including:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Custom Software Development (with AI-driven features like predictive analytics and automation)</li>
            <li>Cloud Solutions & AWS Migration</li>
            <li>DevOps Services</li>
            <li>Staff Augmentation (from individual experts to full Scrum teams)</li>
          </ul>
        </div>
      ) 
    },
    { 
      question: 'Which industries or types of businesses do you serve?', 
      answer: 'We work with clients across diverse sectors such as banking, healthcare, logistics, retail, education, and more—helping them solve complex operational and technological challenges through tailored software solutions.' 
    },
    { 
      question: 'What is your approach to AI and innovation?', 
      answer: 'Our team integrates AI into projects—implementing machine learning, predictive analytics, and automation to deliver smarter, data-driven applications. Innovation and staying current with new technologies are core to our delivery process.' 
    },
    { 
      question: 'How does CodeCones support cloud transitions and DevOps adoption?', 
      answer: 'We ensure seamless and secure AWS cloud migrations, optimize infrastructure for scalability, and embed DevOps best practices to enhance delivery speed, promote continuous integration/deployment, and empower long-term growth.' 
    },
    { 
      question: 'What is staff augmentation and how can it benefit my project?', 
      answer: 'Staff augmentation allows you to supplement your team with our skilled professionals—whether you need a specialist or an entire agile development team. This flexible hiring model helps you scale efficiently, bringing in the right talent at the right time.' 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-start">
        <span className="text-[#1C1C1C]">Frequently</span>
        <span className="text-[#828282]"> Asked Questions</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* FAQ Questions Column */}
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 border-b border-[#EAEAEA] pb-6 last:border-b-0">
              <div
                className="flex items-start justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg font-semibold text-[#1C1C1C] pr-4">{faq.question}</h2>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-[#1C1C1C] transition-transform ${open === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {open === index && (
                <div className="mt-4 text-[#666666] leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* CEO Card Column */}
        <div className="md:w-96 flex-shrink-0">
          <div className="bg-[#1C1C1C] rounded-3xl p-6 text-white h-[350px]">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-600 flex overflow-hidden mx-auto">
                  <Image 
                    src="/assets/questionPerson.svg" 
                    alt="Ahmed, CEO of CodeCones" 
                    width={80} 
                    height={80} 
                    className="object-cover"
                  />
                </div>
              </div>
              
              <p className="mb-6 text-start text-gray-200 leading-relaxed flex-1">
                Hi, I'm Ahmed, the CEO and Founder of Codecones. Don't hesitate to reach out to me anytime – I'm here to answer all your questions!
              </p>
              
              {/* Ask Question Button */}
              <button className="flex items-center justify-center bg-[#FBAD18] text-white py-3 px-6 rounded-full w-full font-medium hover:bg-amber-500 transition-colors">
                Ask Question
                <span className="ml-2">
                  <Image 
                    src="/assets/WhatsApp.svg" 
                    alt="WhatsApp Icon" 
                    width={20} 
                    height={20} 
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;