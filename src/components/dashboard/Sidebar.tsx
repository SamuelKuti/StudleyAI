import Logo from '/assets/logo_orange.png';
import ProfilePic from '/assets/kayhan.png';
import { ChevronLeftIcon, Plus, Sparkles } from 'lucide-react';
import logoSmall from '/assets/logo_small.png';
import { FC, useEffect, useState } from 'react';
import DashboardIcon from '/assets/dashboardicon.png';
import FlashcardsIcon from '/assets/flashcardsicon.png';
import QuizzesIcon from '/assets/quizzesicon.png';
import EinsteinIcon from '/assets/einstein.png';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const [sidebarWidth, setSidebarWidth] = useState(350);

  // Update the sidebar width when sidebarOpen changes
  useEffect(() => {
    if (sidebarOpen) {
      setSidebarWidth(350);
    } else {
      setSidebarWidth(30);
    }
  }, [sidebarOpen]);

  return (
    <div className="flex">
      <div
        className={`w-[${sidebarWidth}px] bg-[#FDE7DB] p-6 flex flex-col ${
          sidebarOpen ? 'items-start' : 'items-center'
        }`}
      >
        {/* Conditionally render the logo based on sidebar state */}
        {sidebarOpen ? (
          <img src={Logo} alt="Studley Logo" className="w-32 mb-8" />
        ) : (
          <img src={logoSmall} alt="Studley Logo" className="w-16 mb-8" />
        )}

        {/* Create new study set button */}
        <button className={`w-full bg-primary flex items-center text-white px-5 py-2.5 mb-8 rounded-none shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all ${
            sidebarOpen ? 'justify-start' : 'justify-center'
          }`}>
          <Plus className="w-5 h-5" />
          {sidebarOpen && <span className="ml-3">Create new study set</span>}
        </button>

        <nav className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-3 px-4 py-2 bg-[#FFAB93] rounded-lg">
            <img src={DashboardIcon} alt="Dashboard" className="w-5 h-5" />
            {sidebarOpen && <span>Dashboard</span>}
         </a>

          <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <img src={FlashcardsIcon} alt="Flashcards" className="w-5 h-5" />
            {sidebarOpen && <span>Generate flashcards</span>}
          </a>

          <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <img src={QuizzesIcon} alt="Quizzes" className="w-5 h-5" />
            {sidebarOpen && <span>Generate quizzes</span>}
          </a>

          <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <img src={EinsteinIcon} alt="Personal Tutor" className="w-5 h-5" />
            {sidebarOpen && <span>Personal tutor</span>}
          </a>
        </nav>

        {/* Upgrade to premium button */}
        <div className="mt-auto">
          <button className="w-full bg-primary text-white px-5 py-2.5 rounded-none shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
            <div className="flex items-center justify-start gap-1">
              <Sparkles className="w-5 h-5" />
              {sidebarOpen && 'Upgrade to premium'}
            </div>
          </button>

          {/* Profile info */}
          <div className={`flex items-center mt-6 ${sidebarOpen ? 'justify-start' : 'justify-center'}`}>
            <img src={ProfilePic} alt="Profile" className="w-10 h-10 rounded-full" />
            {sidebarOpen && <span className="ml-3">Emran Hassan</span>}
          </div>
        </div>
      </div>

      {/* Button to toggle sidebar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="w-[20px] h-screen text-primary flex items-center justify-center"
      >
        <div className={`${sidebarOpen ? '' : 'rotate-180'} transition-transform duration-300`}>
          <ChevronLeftIcon />
        </div>
      </button>
    </div>
  );
};
