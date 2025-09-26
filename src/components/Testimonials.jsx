import React from "react";

const testimonials = [
  {
    name: "Rahul Verma",
    text: "The practice tests and speaking sessions helped me score 7.5! Highly recommend.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ananya Sharma",
    text: "Amazing platform! The AI feedback gave me confidence before the exam.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ali Khan",
    text: "Live classes were so interactive and useful. Cleared IELTS with 8.0 Band.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Priya Singh",
    text: "The mock tests helped me identify weak areas and improve quickly.",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Vikram Patel",
    text: "AI band score prediction was accurate and helped me track my progress.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Sanya Kapoor",
    text: "The speaking practice sessions boosted my confidence tremendously.",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Students Say
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8">
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl text-center p-6 flex-shrink-0 w-72 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-600"
              />
              <p className="text-gray-600 italic">"{t.text}"</p>
              <h4 className="mt-4 font-semibold text-blue-700">{t.name}</h4>
            </div>
          ))}
        </div>
        <br></br>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
