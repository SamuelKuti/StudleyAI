import Logo from '../../../public/assets/logo_orange.png';
import ProfilePic from '../../../public/assets/kayhan.png';
import DashboardIcon from '../../../public/assets/dashboardicon.png';
import FlashcardsIcon from '../../../public/assets/flashcardsicon.png';
import QuizzesIcon from '../../../public/assets/quizzesicon.png';
import EinsteinIcon from '../../../public/assets/einstein.png';
import PlusIcon from '../../../public/assets/plusicon.png';
import StarsIcon from '../../../public/assets/starsicon.png';

export const Sidebar = () => {

  return (
    <div className="w-[280px] bg-[#FDE7DB] p-6 flex flex-col">
        <img 
        src={Logo}
        alt="Studley Logo" 
        className="w-32 mb-8"
        />

        <button className="w-full bg-primary text-white px-3 py-2 mb-8 rounded-none shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all flex items-center">
            <img src={PlusIcon} alt="Plus" className="w-4 h-4 mr-2" />
            <span>Create new study set</span>
        </button>

        <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center space-x-3 px-4 py-2 bg-[#FFAB93] rounded-lg">
            <img src={DashboardIcon} alt="Dashboard" className="w-5 h-5" />
            <span>Dashboard</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <img src={FlashcardsIcon} alt="Flashcards" className="w-5 h-5" />
            <span>Generate flashcards</span>
        </a>

        <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <img src={QuizzesIcon} alt="Quizzes" className="w-5 h-5" />
            <span>Generate quizzes</span>
        </a>

        <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <img src={EinsteinIcon} alt="Personal Tutor" className="w-5 h-5" />
            <span>Personal tutor</span>
        </a>
        </nav>

        <div className="mt-auto">
        <button className="w-full bg-primary text-white px-3 py-2 rounded-none shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all flex items-center">
            <img src={StarsIcon} alt="Stars" className="w-4 h-4 mr-2" />
            <span>Upgrade to premium</span>
        </button>
        
        <div className="flex items-center mt-6">
            <img 
            src={ProfilePic}
            alt="Profile" 
            className="w-10 h-10 rounded-full"
            />
            <span className="ml-3">Emran Hassan</span>
        </div>
        </div>
    </div>
  );
} 