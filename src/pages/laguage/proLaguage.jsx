import React from "react";

const languages = [
  { name: "PHP", icon: "🐘" },
  { name: "React", icon: "⚛️" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Node.js", icon: "🟢" },
];

const ProLanguage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-16 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Programming Languages
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl py-6 px-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <div className="text-3xl mb-2">{lang.icon}</div>
              <p className="text-lg font-semibold text-gray-700">{lang.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProLanguage;
