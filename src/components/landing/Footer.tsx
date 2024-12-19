import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { LoginDialog } from './LoginDialog';
import { SignupDialog } from './SignupDialog';

export const Footer: FC = () => {
  const [activeDialog, setActiveDialog] = useState<'login' | 'signup' | null>(null);

  const openLoginDialog = () => setActiveDialog('login');
  const openSignupDialog = () => setActiveDialog('signup');
  const closeDialog = () => setActiveDialog(null);

  return (
    <footer className="bg-black text-white px-5 md:px-40 py-10">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-start mb-5">
          <div className="flex justify-between items-start mb-5">
            <div className="flex flex-col items-center justify-between w-full md:w-auto gap-5">
              <img 
                src="../../public/assets/logo_white.png"
                alt="Studley Logo" 
                className="w-[150px]"
              />
              <button
                onClick={openSignupDialog}
                className="bg-light text-black shadow-grayButton px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all w-full md:w-auto"
              >
                Try for free
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="mb-4">Pages</h4>
              <Link to="/blog" className="block text-gray-400 hover:text-white mb-2 underline-hover">Blog</Link>
              <Link to="/affiliate" className="block text-gray-400 hover:text-white mb-2 underline-hover">Affiliate</Link>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <Link to="/terms" className="block text-gray-400 hover:text-white mb-2 underline-hover">Terms</Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white mb-2 underline-hover">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-800 mb-5" />

        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">© Studley AI 2024</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="transform hover:scale-110 transition-transform">
              <img src="../../public/assets/tiktok.png" alt="TikTok" className="w-6 h-6" />
            </a>
            <a href="#" className="transform hover:scale-110 transition-transform">
              <img src="../../public/assets/whop.png" alt="Whop" className="w-6 h-6" />
            </a>
            <a href="#" className="transform hover:scale-110 transition-transform">
              <img src="../../public/assets/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
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
    </footer>
  );
};
