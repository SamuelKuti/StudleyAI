import { FC } from 'react';
import { HowItWorksItem } from '../types';

const items: HowItWorksItem[] = [
  {
    icon: '../../public/assets/Zap.png',
    title: 'Choose a method to create your study set',
    image: '../../public/assets/method_image.png',
  },
  {
    icon: '../../public/assets/quizz.png',
    title: 'Get addictive AI generated quizzes',
    image: '../../public/assets/quiz_image.png',
  },
  {
    icon: '../../public/assets/AI.png',
    title: 'Wrong answers explained by AI',
    image: '../../public/assets/AI_image.png',
  },
  {
    icon: '../../public/assets/flashcards.png',
    title: 'Instant flash cards and much more...',
    image: '../../public/assets/flashcards_image.png',
  },
];

export const HowItWorks: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src={item.icon} alt="" className="w-6 h-6" />
                <span className="font-medium">{item.title}</span>
              </div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};