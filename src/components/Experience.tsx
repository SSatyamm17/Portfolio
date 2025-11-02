import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Data Science Intern',
      company: 'Cipher Schools',
      duration: 'June 2025',
      location: 'Remote',
      description: [
        'Developed machine learning models for customer segmentation, improving marketing campaign effectiveness by 25%',
        'Analyzed large datasets (10M+ records) using Python and SQL to extract actionable business insights',
        'Created interactive dashboards in Tableau for stakeholder reporting and data-driven decision making',
        'Collaborated with cross-functional teams to deploy ML models into production environment',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'University Data Science Project',
      duration: 'January 2024 - May 2024',
      location: 'On Campus',
      description: [
        'Conducted research on deep learning applications in natural language processing',
        'Preprocessed and annotated datasets for sentiment analysis experiments',
        'Implemented and evaluated various neural network architectures (LSTM, BERT, Transformers)',
        'Co-authored research paper submitted to academic conference',
      ],
    },
    {
      role: 'Data Analyst Volunteer',
      company: 'Natarheen ashram',
      duration: 'September 2023 - December 2023',
      location: 'Remote',
      description: [
        'Analyzed donor data to identify trends and optimize fundraising strategies',
        'Created statistical reports and visualizations to communicate findings to stakeholders',
        'Cleaned and validated datasets ensuring data quality and accuracy',
        'Provided data-driven recommendations that increased donor retention by 15%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Experience
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Practical experience applying data science techniques to solve real-world problems
          across various domains.
        </p>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 bg-white rounded-xl shadow-xl p-8 border border-gray-200 hover:border-blue-500/50 card-hover relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-xl"></div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-500 font-medium mb-2">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar size={18} />
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
