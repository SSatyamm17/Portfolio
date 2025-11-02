import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Becholars of Science in Data Science',
      institution: 'Lovely Professional University',
      duration: '2022 - 2025',
      location: 'Phagwara, Punjab, India',
      gpa: '9.0/10.0',
      coursework: [
        'Machine Learning',
        'Statistical Methods',
        'Deep Learning',
        'Data Mining',
        'Big Data Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Database Systems',
        'Algorithms & Data Structures',
      ],
      achievements: [
        'Dean\'s List (All Semesters)',
        'Data Science Club Member',
        'Research Excellence Award',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Education
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Academic foundation in data science, statistics, and computer science with a strong
          focus on practical applications.
        </p>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-blue-500/20 border border-blue-400 text-blue-400 rounded-full">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center justify-start md:justify-end gap-2 text-gray-400 mb-2">
                    <Calendar size={18} />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-blue-600 font-semibold mt-2">CGPA: {edu.gpa}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>📚</span> Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className={`tech-badge ${idx % 2 === 0 ? 'tech-teal' : 'tech-blue'}`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award size={20} className="text-blue-400" /> Academic Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">✓</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
