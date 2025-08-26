import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
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
          { question: 'What services does CodeCones offer?', answer: 'CodeCones offers a range of services including cloud migration, DevOps adoption, AI integration, and staff augmentation.' },
          { question: 'Which industries or types of businesses do you serve?', answer: 'We serve a variety of industries, including healthcare, finance, retail, and technology.' },
          { question: 'What is your approach to AI and innovation?', answer: 'We embrace cutting-edge AI solutions to drive innovation and streamline business processes.' },
          { question: 'How does CodeCones support cloud transitions and DevOps adoption?', answer: 'We provide end-to-end support for seamless cloud transitions and implement DevOps best practices to improve efficiency.' },
          { question: 'What is staff augmentation and how can it benefit my project?', answer: 'Staff augmentation involves providing skilled professionals to complement your team, enhancing project efficiency and flexibility.' },
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
