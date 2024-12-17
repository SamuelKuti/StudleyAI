
const universities = [
  { name: 'Princeton', logo: '../../public/assets/princeton.png' },
  { name: 'Berkeley', logo: '../../public/assets/berkeley.png' },
  { name: 'Stanford', logo: '../../public/assets/stanford.png' },
  { name: 'MIT', logo: '../../public/assets/MIT.png' },
  { name: 'Northwestern', logo: '../../public/assets/northwestern.png' },
];

export const Universities = () => {
  return (
    <div className="universities-container">
      <div className="universities">
        {/* Original set of logos */}
        {universities.map((uni, index) => (
          <img
            key={`uni-${index}`}
            src={uni.logo}
            alt={`${uni.name} logo`}
            width={100}
            height={100}
          />
        ))}
        {/* Duplicate set of logos for seamless scrolling */}
        {universities.map((uni, index) => (
          <img
            key={`uni-dup-${index}`}
            src={uni.logo}
            alt="University logo"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};