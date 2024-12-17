import { FC } from 'react';

const testimonials = [
  {
    image: '../../public/assets/jam_maddy.png',
    quote: '"Studley AI completely changed how we study! In minutes, we get personalized flashcards and summaries from my lecture slides. Our grades have never been better!"',
    author: 'Jamila and Maddy'
  },
  {
    image: '../../public/assets/yahia.png',
    quote: '"I love the interactive chat feature. Studley AI made it feel like I was having a conversation with my textbook, and it really helped me understand tricky concepts."',
    author: 'Yahia Aly'
  },
  {
    image: '../../public/assets/sam.png',
    quote: '"As someone who struggles with time management, Studley AI helps me cut through the noise. I upload my notes, and it instantly generates key points and quizzes. Studying is actually fun now!"',
    author: 'Samuel Kuti'
  }
];

export const Testimonials: FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-5">
        <div className="flex justify-center mb-10">
          <a href="#" className="bg-primary text-white font-semibold px-5 py-2.5 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
            Get started for free
          </a>
        </div>
        <h2 className="text-2xl font-bold mb-10">Trusted by 10,000+ students</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-5 text-left">
              <img 
                src={testimonial.image} 
                alt={testimonial.author} 
                className="w-15 h-15 rounded-full mb-4"
              />
              <p className="text-sm italic mb-3">{testimonial.quote}</p>
              <p className="font-bold text-sm">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};