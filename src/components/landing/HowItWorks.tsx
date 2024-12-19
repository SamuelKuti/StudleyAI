import { FC, useState } from 'react';
import { HowItWorksItem } from '../../types';
import { SignupDialog } from './SignupDialog';
import { LoginDialog } from './LoginDialog';

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
  const [activeDialog, setActiveDialog] = useState<'login' | 'signup' | null>(null);

  const openLoginDialog = () => setActiveDialog('login');
  const openSignupDialog = () => setActiveDialog('signup');
  const closeDialog = () => setActiveDialog(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-grayText text-center mb-6">How it works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="flex justify-center items-center gap-3 mb-4">
                <img src={item.icon} alt="" className="w-8 h-8" />
                <span className="font-medium text-grayText text-xl">{item.title}</span>
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
      <div className="flex justify-center mt-10">
          <a href="#" onClick={openSignupDialog} className="bg-primary text-white px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
            Get started for free
          </a>
      </div>
        {/* Dialogs */}
      <LoginDialog 
        isOpen={activeDialog === 'login'} 
        onClose={closeDialog} 
        title="Login to your account"
        onSwitchToSignup={openSignupDialog}
      />
      <SignupDialog 
        isOpen={activeDialog === 'signup'} 
        onClose={closeDialog} 
        title="Create a new account"
        onSwitchToLogin={openLoginDialog}
      />
    </section>
  );
};