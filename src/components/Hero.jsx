import React from "react";
import { BookOpen, Mic, Award, Video } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 px-6 md:px-20 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center space-y-8 md:pr-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
          Master IELTS with Confidence
        </h1>
        <p className="text-lg text-gray-200 drop-shadow-sm max-w-xl">
          Join thousands of students boosting their band scores with expert
          coaching, AI-powered tools, and personalized study plans.
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-4 w-full max-w-lg">
          <div className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition text-base font-medium min-w-[180px] justify-center">
            <Mic size={22} /> Speaking Practice
          </div>
          <div className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition text-base font-medium min-w-[180px] justify-center">
            <BookOpen size={22} /> Mock Tests
          </div>
          <div className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition text-base font-medium min-w-[180px] justify-center">
            <Award size={22} /> AI Band Score
          </div>
          <div className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition text-base font-medium min-w-[180px] justify-center">
            <Video size={22} /> Live Classes
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-white text-blue-600 px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:bg-gray-100 transform hover:-translate-y-1 transition">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex-1 mt-12 md:mt-0 flex justify-center">
        <div className="relative w-[690px] h-[380px] shadow-2xl transform hover:scale-105 transition duration-500">
          <img
            src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/Shutterstock2187391599-1664708199.jpg&w=900&height=601"
            alt="IELTS Study"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
