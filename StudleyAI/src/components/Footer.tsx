import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer className="bg-black text-white px-5 md:px-20 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-5">
          <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto gap-5">
            <img 
              src="../../public/assets/logo_white.png"
              alt="Studley Logo" 
              className="w-[150px]"
            />
            <button className="bg-primary text-white font-semibold px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
              Try for free
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-800 max-w-[180px] mx-auto mb-5" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold mb-4">Pages</h4>
            <Link to="/blog" className="block text-gray-400 hover:text-white mb-2">Blog</Link>
            <Link to="/affiliate" className="block text-gray-400 hover:text-white mb-2">Affiliate</Link>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <Link to="/terms" className="block text-gray-400 hover:text-white mb-2">Terms</Link>
            <Link to="/privacy" className="block text-gray-400 hover:text-white mb-2">Privacy</Link>
          </div>
        </div>

        <div className="h-px bg-gray-800 mb-5" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© Studley AI 2024</p>
          <div className="flex gap-4 mt-4 md:mt-0">
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
    </footer>
  );
};