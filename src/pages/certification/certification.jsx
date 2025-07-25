import React from "react";

const certifications = [
  {
    title: "Information Technology Specialist - Cyber Security",
    year: "2024",
  },
  {
    title: "CISCO Certified Support Technician - Cyber Security",
    year: "2024",
  },
  {
    title: "Information Technology Specialist - Network Security",
    year: "2024",
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Certifications
        </h1>

        <ul className="space-y-6">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-200 flex justify-between items-center"
            >
              <div className="text-gray-800 text-base sm:text-lg font-medium">
                {cert.title}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {cert.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certification;
