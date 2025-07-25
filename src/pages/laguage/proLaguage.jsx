import React from "react";

const languages = [
  "PHP",
  "React",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "Node.js",
];

const ProLanguage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Programming Languages
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl py-4 px-6 shadow hover:shadow-md transition"
            >
              <p className="text-lg font-medium text-gray-800">{lang}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProLanguage;
