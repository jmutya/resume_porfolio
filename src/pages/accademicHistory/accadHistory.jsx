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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-2 sm:px-4 py-16 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Academic History
        </h1>

        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-6 before:w-1 before:bg-blue-200">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-12 sm:pl-16">
              <div className="absolute left-2 sm:left-4 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {edu.institution}
                  </h2>
                  <span className="text-sm text-gray-500">{edu.period}</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{edu.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccadHistory;
