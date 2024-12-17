import { FC, useState } from 'react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: "What is Studley AI?",
    answer: "Studley AI is a studying platform that uses AI technology to convert your course materials into high-quality study materials in just seconds. You can study with flashcards, take practice quizzes, and even chat with an AI tutor."
  },
  // Add other FAQ items from the original HTML
];

export const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ's</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{item.question}</span>
                <span className={`transform transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              <div className={`mt-2 transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};