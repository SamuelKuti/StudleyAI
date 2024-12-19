import { FC, useState } from 'react';
import { LoginDialog } from './LoginDialog';
import { SignupDialog } from './SignupDialog';

export const FinalCTA: FC = () => {
  const [activeDialog, setActiveDialog] = useState<'login' | 'signup' | null>(null);

  const openLoginDialog = () => setActiveDialog('login');
  const openSignupDialog = () => setActiveDialog('signup');
  const closeDialog = () => setActiveDialog(null);

  return (
    <section className="mx-10 my-[60px] md:mx-32">
      <div className="bg-peachBg rounded-3xl p-8 md:p-16">
        <div className="container mx-auto flex flex-col items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h2 className="md:text-4xl text-2xl text-center font-bold mb-2">
              Learn better with Studley AI
            </h2>
            <p className="text-gray-600 text-center">
              Join 10,000+ others crushing their exams. Try Studley for free
            </p>
          </div>
          <button onClick={openSignupDialog} className="bg-primary text-white px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all md:w-[200px] w-1/2 md:w-auto">
            Start learning faster
          </button>
        </div>
      </div>
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
