import { FC, useState } from 'react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    "question": "What is Studley AI?",
    "answer": "Studley AI is a studying platform that uses AI technology to convert your course materials into high-quality study materials in just seconds. You can study with flashcards, take practice quizzes, and even chat with an AI tutor."
  },
  {
    "question": "How does Studley AI's AI work?",
    "answer": "Studley AI's proprietary AI technology leverages neuroscience research, Bloom's Taxonomy and active recall to offer a highly engaging, interactive studying experience that your brain will love."
  },
  {
    "question": "Why was Studley AI founded?",
    "answer": "There is a massive mismatch between how we study and how the brain naturally learns. Reading textbooks and watching hour-long lecture videos isn't effective. Making study materials from scratch is tedious. Studley AI gets you studying in seconds & is engaging, fast, and scientifically effective."
  },
  {
    "question": "Will my teachers be okay with me using Studley AI?",
    "answer": "Yes, Studley AI prides itself on their ethics-first approach to Generative AI in education. Studley AI is universally classified by educators as an effective study method that maintains academic integrity."
  },
  {
    "question": "How do we keep your data secure?",
    "answer": "Studley AI follows industry-standard data security protocols. Your information is stored securely in our encrypted database, and payment processing is done by our partner Stripe which is used by about 40% of global companies."
  },
  {
    "question": "Can Studley AI be used to replace human tutoring?",
    "answer": "Studley AI helps students study effectively by themselves, without the need of a tutor. However, you may consider tutoring as a supplementary resource if needed. Our customers haven't required it."
  },
  {
    "question": "Is there an incentive for promoting Studley AI to other students?",
    "answer": "Yes! Send us an email at studleyai@gmail.com and we'll send you details on our affiliate program. We offer high commissions to our affiliates."
  },
  {
    "question": "I have some unanswered questions. Who can I talk to?",
    "answer": "You can email us at studleyai@gmail.com and we would be happy to answer any questions you may have."
  }
];

export const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-5 px-10 max-w-3xl">
        <h2 className="text-3xl text-grayText text-center mb-12">FAQ's</h2>
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