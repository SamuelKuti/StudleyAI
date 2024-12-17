import { useState } from 'react';
import Logo from '../../public/assets/logo_orange.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="md:relative fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto w-4/5 flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Studley Logo" className="w-24" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden relative z-50 w-8 h-6 ${isMenuOpen ? 'fixed top-5 right-5' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-full h-0.5 bg-black absolute left-0 transition-all ${
              isMenuOpen ? 'rotate-45 top-3' : 'top-0'
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-black absolute left-0 top-1/2 -translate-y-1/2 transition-all ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-black absolute left-0 transition-all ${
              isMenuOpen ? '-rotate-45 bottom-2.5' : 'bottom-0'
            }`}
          />
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-[70px] left-0 w-full h-1/4 bg-white flex flex-col items-center justify-center gap-5 transition-transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-[calc(100%+50px)]'
          } md:static md:flex md:flex-row md:h-auto md:translate-y-0 md:gap-10`}
        >
          <a
            href="#"
            className="underline-hover font-medium text-lg md:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Affiliate
          </a>
          <a
            href="#"
            className="underline-hover font-medium text-lg md:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>

          {/* Mobile Dashboard Button */}
          {isMenuOpen && (
            <div className="block md:hidden mt-5">
              <a
                href="#"
                className="bg-primary text-white font-semibold px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </a>
            </div>
          )}
        </nav>

        {/* Desktop Dashboard Button */}
        <div className="hidden md:block ml-auto">
          <a
            href="#"
            className="bg-primary text-white font-semibold px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            Dashboard
          </a>
        </div>
      </div>
    </header>
  );
};
