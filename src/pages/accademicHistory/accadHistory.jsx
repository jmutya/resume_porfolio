import React from "react";

const education = [
  {
    institution: "University of Mindanao",
    period: "2018 - 2025",
    course: "BS - Information Technology",
  },
  {
    institution: "Philippine College of Technology",
    period: "2016 - 2018",
    course: "TVL - ICT",
  },
];

const AccadHistory = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Academic History
        </h1>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {edu.institution}
                </h2>
                <span className="text-sm text-gray-600">{edu.period}</span>
              </div>
              <p className="text-gray-700 text-sm">{edu.course}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccadHistory;
