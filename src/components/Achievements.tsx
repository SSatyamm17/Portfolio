import { Trophy, Award, BookOpen, Medal } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      name: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      date: '2025',
      icon: <Award size={24} />,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: 'Genrative AI with Large Language Models',
      issuer: 'Oracle',
      date: '2025',
      icon: <Award size={24} />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      name: 'Microsoft Certified: Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: '2024',
      icon: <Award size={24} />,
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI (Coursera)',
      date: '2024',
      icon: <BookOpen size={24} />,
      color: 'bg-teal-100 text-teal-600',
    },
  ];

  const achievements = [
    {
      title: 'State level cricket tournment - School',
      description: 'Played U-19 and U-17 state level cricket tournments representing Punjab state in various state level competitions.',
      icon: <Trophy size={24} />,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Best Student Paper Award',
      description: 'Received recognition for research on predictive modeling in healthcare analytics',
      icon: <Medal size={24} />,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'State level Badminton Tournament - School',
      description: 'Played U-14 and U-17 state level badminton tournaments representing School in various competitions.',
      icon: <Trophy size={24} />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Dean\'s List Recognition',
      description: 'Consistently maintained GPA above 9 throughout all academic semesters',
      icon: <Award size={24} />,
      color: 'bg-cyan-100 text-cyan-600',
    },
  ];

  const publications = [
    {
      title: 'Predictive Modeling for Early Disease Detection Using Machine Learning',
      authors: 'Satyam Pal',
      venue: 'International Conference on Data Science (ICDS 2024)',
      year: '2024',
      type: 'Conference Paper',
    },
    {
      title: 'Levaraging AI and Ml techniques for early sign detection of dipression, anxiety and sleep disorders',
      authors: 'Satyam Pal, Aman, Bharat',
      venue: 'Journal of Machine Learning Research (Under Review)',
      year: '2024',
      type: 'Journal Article',
    },
  ];

  return (
  <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Achievements & Recognition
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Certifications, awards, and publications demonstrating expertise and contributions
          to the field of data science.
        </p>

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-blue-400" size={28} />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 hover:border-blue-500/50 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${cert.color} border`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {cert.name}
                      </h4>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-600 mb-1">{cert.issuer}</p>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <Trophy className="text-blue-400" size={28} />
              Awards & Honors
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 hover:border-blue-500/50 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.color} border`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="text-blue-400" size={28} />
              Publications & Research
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 hover:border-blue-500/50 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200">
                      {pub.type}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {pub.title}
                      </h4>
                      <p className="text-gray-600 mb-2">{pub.authors}</p>
                      <p className="text-gray-600 italic">
                        {pub.venue} ({pub.year})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
