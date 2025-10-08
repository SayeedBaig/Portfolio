import React from 'react';

function Education() {
  const education = [
    {
      level: "10th Grade (SSLC)",
      institution: "Government Urdu High School Donabaghatta",
      board: "State Board KSEEB",
      year: "2021",
      percentage: "97%"
    },
    {
      level: "12th / PUC",
      institution: "Vesweswaraya Science and Commerce PU College Bhadravathi Shimogga ",
      board: "State Board KSEEB",
      year: "2023",
      percentage: "95%"
    },
    {
      level: "Bachelor of Engineering in Computer Science",
      institution: "RV Institute of Technology and Management, Bangalore",
      university: "Visvesvaraya Technological University (VTU)",
      year: "2025 - Present",
      details: [
        { semester: "1st Semester", sgpa: "8.4" },
        { semester: "2nd Semester", sgpa: "9.2" },
        { semester: "3rd Semester", sgpa: "9.57" },
        { semester: "4th Semester", sgpa: "9.1" },
      //   { semester: "5th Semester", sgpa: "9.1" } 
       ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.level}</h3>
            <p className="institution">{edu.institution}</p>
            {edu.university && <p className="university">{edu.university}</p>}
            <p><strong>Year:</strong> {edu.year}</p>
            {edu.percentage && <p><strong>Percentage:</strong> {edu.percentage}</p>}
            
            {/* Semester-wise details for current course */}
            {edu.details && (
              <div className="semester-details">
                <h4>Semester-wise Performance</h4>
                <ul>
                  {edu.details.map((sem, i) => (
                    <li key={i}>
                      <span>{sem.semester}</span> — <strong>SGPA:</strong> {sem.sgpa}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
