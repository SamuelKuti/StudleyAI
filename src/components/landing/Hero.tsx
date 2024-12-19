import { FC, useState } from 'react';
import ShieldIcon from '/assets/shield.png';
import { LoginDialog } from './LoginDialog';
import { SignupDialog } from './SignupDialog';

export const Hero: FC = () => {
  const [activeDialog, setActiveDialog] = useState<'login' | 'signup' | null>(null); // Track the active dialog

  const openLoginDialog = () => setActiveDialog('login');
  const openSignupDialog = () => setActiveDialog('signup');
  const closeDialog = () => setActiveDialog(null);  // Close the dialog

  return (
    <section className="pb-5 md:pt-5 pt-20  flex flex-col items-center justify-center pb-15 bg-gradient-to-b from-white to-[#FFBDAB]">
      <div className="container flex flex-col items-center justify-center mx-auto px-5">
        <div>
          <p className="text-primary mb-0 inline-flex items-center gap-2">
            <img src={ShieldIcon} alt="Shield icon" className="w-5 h-5" />
            Ethical AI, maintaining academic integrity
          </p>
          <h1 className="text-4xl md:text-5xl font-medium mb-8">
            Crush Your Exams in Half the Study Time
          </h1>
          <div className="flex">
            <button onClick={openSignupDialog} className="bg-primary text-white px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
              Start Learning Faster - it's free
            </button>
            <div className="flex">
              <div className="flex mt-2 ml-4">
                    <img src="../../public/assets/jam_maddy.png" alt="Jamila and Maddy Avatar" className="w-8 h-8 border-radius-full -mr-2" />
                    <img src="../../public/assets/yahia.png" alt="Yahia Avatar" className="w-8 h-8 border-radius-full -mr-2" />
                    <img src="../../public/assets/sam.png" alt="Sam Avatar" className="w-8 h-8 border-radius-full -mr-2" />
                    <img src="../../public/assets/roman.png" alt="Roman Avatar" className="w-8 h-8 border-radius-full -mr-2" />
              </div>
              <p className="inline-block mt-3 align-middle ml-4 font-medium text-grayText">
                Loved by 10,000+
              </p>
            </div>
          </div>
        </div>
        <section className="mx-[130px] my-[60px] md:mx-[160px]">
          <div className="bg-peachBg rounded-3xl w-[470px] h-[300px] md:w-[900px] md:h-[450px] p-8 md:p-16">
          </div>
        </section>
      </div>
      <LoginDialog 
        isOpen={activeDialog === 'login'} 
        onClose={closeDialog} 
        title="Login to your account"
        onSwitchToSignup={openSignupDialog} // Handler for switching to signup
      />
      <SignupDialog 
        isOpen={activeDialog === 'signup'} 
        onClose={closeDialog} 
        title="Create a new account"
        onSwitchToLogin={openLoginDialog} // Handler for switching to login
      />
    </section>
  );
};