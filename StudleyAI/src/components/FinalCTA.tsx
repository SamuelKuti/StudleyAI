import { FC } from 'react';

export const FinalCTA: FC = () => {
  return (
    <section className="mx-[60px] my-[60px] md:mx-[60px]">
      <div className="bg-peachBg rounded-lg p-8 md:p-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Learn better with Studley AI
            </h2>
            <p className="text-gray-600">
              Join 10,000+ others crushing their exams. Try Studley for free
            </p>
          </div>
          <button className="bg-primary text-white font-semibold px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all w-full md:w-auto">
            Start learning faster
          </button>
        </div>
      </div>
    </section>
  );
};