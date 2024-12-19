import Logo from '/assets/logo_orange.png';
import ProfilePic from '/assets/kayhan.png';

export const Sidebar = () => {

  return (
    <div className="w-[280px] bg-[#FFF5F3] p-6 flex flex-col">
        <img 
        src={Logo}
        alt="Studley Logo" 
        className="w-32 mb-8"
        />

        <button className="w-full bg-primary text-white px-5 py-2.5 mb-8 rounded-none shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
        + Create new study set
        </button>

        <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center space-x-3 px-4 py-2 bg-[#FFAB93] rounded-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Dashboard</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span>Generate flashcards</span>
        </a>

        <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Generate quizzes</span>
        </a>

        <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Chat with PDF</span>
        </a>

        <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-[#FFAB93] rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Chat with Youtube</span>
        </a>
        </nav>

        <div className="mt-auto">
        <button className="w-full bg-primary text-white px-5 py-2.5 rounded-none shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
            Upgrade to premium
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
};
