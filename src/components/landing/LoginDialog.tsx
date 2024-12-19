import { FC } from 'react';
import { X } from 'lucide-react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSwitchToSignup: () => void;
}

export const LoginDialog: FC<DialogProps> = ({ isOpen, onClose, onSwitchToSignup }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex justify-center items-center">
            <img src="../../public/assets/signin.png" alt="Sign in logo" className="w-10 h-10 border border-black rounded-full p-1 border-2" />
          </div>
          <h2 className="text-2xl text-grayText font-semibold text-center">Welcome Back</h2>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F15A2B] text-white rounded-full px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all font-medium"
            >
              Sign in
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex text-grayText items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            <img src="../../public/assets/google.svg" alt="Google logo" className="w-5 h-5" />
            Continue with Google
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" onClick={onSwitchToSignup} className="text-[#F15A2B] hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
