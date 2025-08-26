import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
  // Define the type of `open` state as number or null
  const [open, setOpen] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-start">
        <span className="text-[#1C1C1C]">Frequently</span>
        <span className="text-[#828282]"> Asked Questions</span>
      </h1>

      <div className="flex flex-col">
        {[ 
          { question: 'What services does CodeCones offer?', answer: (
            <div>
              <p>CodeCones provides a full spectrum of services including:</p>
              <ul>
                <li>Custom Software Development (with AI-driven features like predictive analytics and automation)</li>
                <li>Cloud Solutions & AWS Migration</li>
                <li>DevOps Services</li>
                <li>Staff Augmentation (from individual experts to full Scrum teams)</li>
              </ul>
            </div>
          ) },
          { question: 'Which industries or types of businesses do you serve?', answer: 'We work with clients across diverse sectors such as banking, healthcare, logistics, retail, education, and more—helping them solve complex operational and technological challenges through tailored software solutions.' },
          { question: 'What is your approach to AI and innovation?', answer: 'Our team integrates AI into projects—implementing machine learning, predictive analytics, and automation to deliver smarter, data-driven applications. Innovation and staying current with new technologies are core to our delivery process.' },
          { question: 'How does CodeCones support cloud transitions and DevOps adoption?', answer: 'We ensure seamless and secure AWS cloud migrations, optimize infrastructure for scalability, and embed DevOps best practices to enhance delivery speed, promote continuous integration/deployment, and empower long-term growth.' },
          { question: 'What is staff augmentation and how can it benefit my project?', answer: 'Staff augmentation allows you to supplement your team with our skilled professionals—whether you need a specialist or an entire agile development team. This flexible hiring model helps you scale efficiently, bringing in the right talent at the right time.' },
        ].map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-lg font-semibold text-[#1C1C1C]">{faq.question}</h2>
              <img
                src="./assets/downarrow.svg"
                alt="toggle"
                className={`w-4 h-4 ml-2 transition-transform ${open === index ? 'transform rotate-180' : ''}`}
              />
            </div>
            {open === index && (
              <div className="mt-2 text-[#333]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
