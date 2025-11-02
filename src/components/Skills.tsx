import { Code, Database, BarChart3, GitBranch, MessageSquare, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      icon: <Code size={24} />,
      color: 'bg-blue-100 text-blue-600',
      skills: ['Python', 'R', 'SQL', 'JavaScript', 'Java', 'C++'],
    },
    {
      category: 'Machine Learning & AI',
      icon: <BarChart3 size={24} />,
      color: 'bg-cyan-100 text-cyan-600',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'NLP'],
    },
    {
      category: 'Data Analysis & Visualization',
      icon: <Database size={24} />,
      color: 'bg-teal-100 text-teal-600',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
    },
    {
      category: 'Tools & Technologies',
      icon: <GitBranch size={24} />,
      color: 'bg-green-100 text-green-600',
      skills: ['Git', 'Docker', 'Jupyter', 'AWS', 'Apache Spark', 'Hadoop'],
    },
  ];

  const softSkills = [
    { name: 'Communication', icon: <MessageSquare size={20} /> },
    { name: 'Team Collaboration', icon: <Users size={20} /> },
    { name: 'Critical Thinking', icon: <Code size={20} /> },
    { name: 'Problem Solving', icon: <BarChart3 size={20} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Expertise
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 hover:border-blue-500/50 card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-400 text-blue-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`tech-badge ${idx % 2 === 0 ? 'tech-blue' : 'tech-cyan'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg border border-gray-200 hover:border-blue-200 card-hover"
                >
                  <div className="text-blue-400 mb-2">{skill.icon}</div>
                  <p className="text-gray-700 font-medium text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
