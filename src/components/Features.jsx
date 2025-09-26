import React from "react";
import { BookOpen, Mic, Award, Monitor } from "lucide-react";

const features = [
  {
    icon: "Mic",
    title: "Speaking Practice",
    desc: "Improve fluency with AI-driven speaking sessions.",
    details: [
      "Personalized feedback on pronunciation",
      "Practice in real exam conditions",
      "Track progress over time",
    ],
  },
  {
    icon: "BookOpen",
    title: "Mock Tests",
    desc: "Full-length IELTS tests with instant results.",
    details: [
      "Timed tests with real IELTS format",
      "Detailed answer explanations",
      "Performance analytics dashboard",
    ],
  },
  {
    icon: "Award",
    title: "AI Band Score",
    desc: "Get real-time feedback on your performance.",
    details: [
      "Predict your band score accurately",
      "Receive tips to improve weak areas",
      "Track improvement over multiple attempts",
    ],
  },
  {
    icon: "Monitor",
    title: "Live Classes",
    desc: "Interactive sessions with certified trainers.",
    details: [
      "Small batch sessions for attention",
      "Recordings available for revision",
      "Q&A sessions after every class",
    ],
  },
];

const iconMap = { Mic, BookOpen, Award, Monitor };

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Features
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = iconMap[f.icon];
          return (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
            >
              <div className="mb-6 flex justify-center">
                <Icon size={56} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600 mb-4">{f.desc}</p>
              <ul className="text-gray-500 text-sm space-y-1">
                {f.details.map((d, idx) => (
                  <li
                    key={idx}
                    className="before:content-['•'] before:text-blue-600 before:mr-2"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
