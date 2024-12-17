import { FC } from 'react';

export const About: FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-4xl text-center mb-5 text-gray-800">About</h1>
      <div className="text-center text-gray-500 mb-5">Last Updated: November 11, 2024</div>
      
      <div className="border-b border-gray-200 pb-4 mb-5">
        <p>
          At <strong>LockedIn AI</strong>, we are a group of three collage kids 
          (Emran Hassan, Abu Sayeed Roni, and Kayhan Talebzadeh) based in Halifax, 
          Chasing Dreams
        </p>
      </div>
    </div>
  );
};