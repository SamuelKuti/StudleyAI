import { useState } from 'react';
import Logo from '../../public/assets/logo_orange.png';
import LogoSmall from '../../public/assets/logo_small.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-5 bg-white border-b border-gray-200">
      <div className="container mx-auto w-4/5 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Studley Logo" className="w-30 hidden md:block" />
          <img src={LogoSmall} alt="Studley Logo Small" className="w-30 md:hidden" />
        </div>
        
        <button 
          className="md:hidden relative z-50 w-8 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-full h-0.5 bg-black absolute left-0 transition-all ${isMenuOpen ? 'rotate-45 top-3' : 'top-0'}`} />
          <span className={`block w-full h-0.5 bg-black absolute left-0 top-1/2 -translate-y-1/2 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-black absolute left-0 transition-all ${isMenuOpen ? '-rotate-45 bottom-2.5' : 'bottom-0'}`} />
        </button>

        <nav className={`md:flex items-center gap-5 ${isMenuOpen ? 'fixed top-0 left-0 w-full h-1/4 bg-white flex-col justify-center items-center' : 'hidden'}`}>
          <a href="#" className="underline-hover font-medium">Affiliate</a>
          <a href="#" className="underline-hover font-medium">Blog</a>
          <a href="#" className="bg-primary text-white font-semibold px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
            Dashboard
          </a>
        </nav>
      </div>
    </header>
  );
};