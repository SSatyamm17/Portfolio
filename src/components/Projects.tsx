import { ExternalLink, Github } from 'lucide-react';

function getTechColor(tech: string) {
  const t = tech.toLowerCase();
  if (t.includes('python') || t.includes('django') || t.includes('flask')) return 'tech-blue';
  if (t.includes('tensorflow') || t.includes('keras') || t.includes('pytorch')) return 'tech-cyan';
  if (t.includes('sql') || t.includes('postgres') || t.includes('mysql')) return 'tech-teal';
  if (t.includes('aws') || t.includes('docker') || t.includes('spark')) return 'tech-green';
  if (t.includes('js') || t.includes('javascript') || t.includes('react') || t.includes('node')) return 'tech-yellow';
  return 'tech-blue';
}

const Projects = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction Model',
      description:
        'Built a machine learning model to predict customer churn with 92% accuracy using ensemble methods. Implemented feature engineering and hyperparameter tuning to optimize performance.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Sentiment Analysis Dashboard',
      description:
        'Developed an interactive dashboard for real-time sentiment analysis of social media data using NLP techniques. Processed over 100K tweets with 88% sentiment classification accuracy.',
      technologies: ['Python', 'NLTK', 'Streamlit', 'Twitter API', 'MongoDB'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Sales Forecasting System',
      description:
        'Created a time-series forecasting model for retail sales prediction using LSTM networks. Achieved 15% improvement in forecast accuracy compared to traditional methods.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Time Series Analysis', 'Flask'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'HR Attrition Analysis',
      description:
        'Develop a dashboard that basically tells about all the aspects of individuals staying and leavinng the company achieving 94% accuracy on test data. Used HR data from the real industry.',
      technologies: ['Python', 'Tableau', 'OpenCV', 'Transfer Learning'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Healthcare Data Analytics',
      description:
        'Analyzed patient health records to identify risk factors for chronic diseases. Created predictive models and interactive visualizations for clinical decision support.',
      technologies: ['R', 'ggplot2', 'Random Forest', 'Logistic Regression', 'Shiny'],
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Recommendation Engine',
      description:
        'Built a collaborative filtering recommendation system for e-commerce platform. Implemented matrix factorization and deep learning approaches to personalize user experience.',
      technologies: ['Python', 'Surprise', 'Neural Networks', 'Apache Spark', 'SQL'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of my data science projects demonstrating practical applications of machine learning,
          statistical analysis, and data visualization techniques.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card card-hover flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-xs text-gray-800 font-medium shadow">Project</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={`tech-badge ${getTechColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="font-medium">Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="font-medium">Live Demo</span>
                  </a>

                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs text-gray-500">{project.technologies.length} tools</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
