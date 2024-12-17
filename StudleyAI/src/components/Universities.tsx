const universities = [
  { name: 'Princeton', logo: '../../public/assets/princeton.png' },
  { name: 'Berkeley', logo: '../../public/assets/berkeley.png' },
  { name: 'Stanford', logo: '../../public/assets/stanford.png' },
  { name: 'MIT', logo: '../../public/assets/MIT.png' },
  { name: 'Northwestern', logo: '../../public/assets/northwestern.png' },
];

export const Universities = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <h2 className="text-xl text-center mt-8 text-grayText mb-10">
        Used by top students at leading universities
      </h2>

      <div className="flex animate-scroll mt-2 gap-10 w-max">
        {universities.map((uni, index) => (
          <img
            key={`uni-${index}`}
            src={uni.logo}
            alt={`${uni.name} logo`}
            className="object-contain h-[50px]"
          />
        ))}

        {universities.map((uni, index) => (
          <img
            key={`uni-duplicate-${index}`}
            src={uni.logo}
            alt={`${uni.name} logo`}
            className="object-contain h-[50px]"
          />
        ))}

      </div>
    </div>
  );
};
