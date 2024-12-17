import { FC } from 'react';
import Logo from '../../public/assets/logo_orange.png';
import ProfilePic from '../../public/assets/kayhan.png';
import { Sidebar } from '../components/dashboard/Sidebar';

export const Dashboard: FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 bg-white p-8">
        <h1 className="text-3xl mb-8">Welcome back, Emran 👋</h1>
        <button className="bg-[#EEF3FF] rounded-lg w-1/2 h-[200px] flex items-center justify-center hover:bg-[#E5EBFF] transition-colors">
          <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}; 