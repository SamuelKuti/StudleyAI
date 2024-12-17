import { FC } from 'react';

const testimonials = [
  {
    image: '../../../public/assets/jam_maddy.png',
    quote: '"Studley AI completely changed how we study! In minutes, we get personalized flashcards and summaries from my lecture slides. Our grades have never been better!"',
    author: 'Jamila and Maddy'
  },
  {
    image: '../../../public/assets/yahia.png',
    quote: '"I love the interactive chat feature. Studley AI made it feel like I was having a conversation with my textbook, and it really helped me understand tricky concepts."',
    author: 'Yahia Aly'
  },
  {
    image: '../../../public/assets/sam.png',
    quote: '"As someone who struggles with time management, Studley AI helps me cut through the noise. I upload my notes, and it instantly generates key points and quizzes. Studying is actually fun now!"',
    author: 'Samuel Kuti'
  }
];

export const Testimonials: FC = () => {
  return (
    <section className="bg-white text-center">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl text-grayText mb-10">Trusted by 10,000+ students</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 text-left">
              <p className="text-sm italic mt-3 mb-3">{testimonial.quote}</p>
              <div className="flex items-center gap-2">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-8 h-8 rounded-full mb-4"
                />
                <p className="font-bold text-sm mb-3">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};