import React from "react";

const experiences = [
  {
    role: "Full Stack Programmer / Administrator (OJT)",
    company: "Globe, INC. Data Center",
    year: "2025",
    description: [
      "Regional Surveillance Center Administrator - Network Operation Specialist",
      "Full Stack Developer for Data Analytics System",
      "Team Project Manager",
    ],
  },
  {
    role: "Full Stack Programmer - Capstone Research",
    company: "University of Mindanao",
    year: "2024",
    description: [
      "Developed web and mobile applications using Flutter",
      "Integrated Python Flask API for descriptive analytics",
    ],
  },
  {
    role: "Part-time Virtual Assistant",
    company: "VirPro Solution",
    year: "2022 - 2025",
    description: [
      "Audited car prices and communicated with clients abroad via Google Chat",
      "Handled video editing and PowerPoint presentations for clients",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-20 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-14 text-center">
          Experience
        </h1>

        <div className="space-y-10 relative">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h2>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {exp.year}
                </span>
              </div>
              <h3 className="text-md font-medium text-blue-600 mb-3">
                {exp.company}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
