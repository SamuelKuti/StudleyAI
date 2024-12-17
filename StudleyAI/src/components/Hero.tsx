import { FC } from 'react';
import ShieldIcon from '../../public/assets/shield.png';

export const Hero: FC = () => {
  return (
    <section className="text-center py-5 pb-15 bg-gradient-to-b from-white to-[#ffe3d1]">
      <div className="container mx-auto px-5">
        <p className="text-primary font-bold mb-0 inline-flex items-center gap-2">
          <img src={ShieldIcon} alt="Shield icon" className="w-5 h-5" />
          Ethical AI, maintaining academic integrity
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Crush Your Exams in Half the Study Time
        </h1>
        <div className="mb-5">
          <button className="bg-primary text-white font-semibold px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
            Start Learning Faster - it's free
          </button>
        </div>
        <div className="inline-block mb-10">
          <div className="inline-block">
            {/* Add avatar images here */}
          </div>
          <p className="inline-block align-middle ml-4 font-medium">
            Loved by 10,000+
          </p>
        </div>
      </div>
    </section>
  );
};