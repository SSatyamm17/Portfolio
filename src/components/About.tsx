import { Brain, Target, Heart } from 'lucide-react';

const About = () => {
  return (
  <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              I'm a Data Science student at Lovely Professional University, with a deep passion for uncovering patterns
              in complex datasets and building intelligent systems. My journey in data science began with
              a curiosity about how data shapes our world, and has evolved into a commitment to leveraging
              analytics and machine learning to solve real-world problems.
            </p>
            <p className="mb-4">
              Through my academic coursework and personal projects, I've gained hands-on experience in
              statistical modeling, predictive analytics, deep learning, and data visualization. I enjoy
              the entire data pipeline - from data collection and cleaning to model deployment and
              interpretation.
            </p>
            <p>
              When I'm not working with data, you can find me contributing to open-source projects or 
              exploring the latest research papers in AI and ML.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/30 hover:border-blue-400/60 card-hover">
              <div className="inline-block p-4 bg-blue-500/20 border border-blue-400 rounded-full text-blue-400 mb-4">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytical Mindset</h3>
              <p className="text-gray-600">
                Strong foundation in mathematics, statistics, and computational thinking
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 card-hover">
              <div className="inline-block p-4 bg-cyan-500/20 border border-cyan-400 rounded-full text-cyan-400 mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solver</h3>
              <p className="text-gray-600">
                Dedicated to finding innovative solutions to complex data challenges
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-xl border border-teal-500/30 hover:border-teal-400/60 card-hover">
              <div className="inline-block p-4 bg-teal-500/20 border border-teal-400 rounded-full text-teal-400 mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learner</h3>
              <p className="text-gray-600">
                Always exploring new techniques and staying current with industry trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
