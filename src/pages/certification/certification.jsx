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
    year: "2024", // Updated to complete year
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Certifications
        </h1>

        <ul className="space-y-6">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <p className="text-md text-gray-800 font-semibold">
                  {cert.title}
                </p>
                <span className="text-sm text-gray-600">{cert.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certification;
