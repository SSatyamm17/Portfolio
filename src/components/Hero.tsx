import { useState } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  const fallbackImage = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80';
  const [imgSrc, setImgSrc] = useState("./JPEG.jpeg"); // place your photo at public/profile.jpg

  const onImgError = () => {
    if (imgSrc !== fallbackImage) setImgSrc(fallbackImage);
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white text-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-2xl opacity-18 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left fade-in-up">
            <div className="mb-4 inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <p className="text-blue-600 font-medium text-sm">Welcome to my portfolio</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I'm <span className="gradient-text">Satyam Pal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
              Data Science & ML Enthusiast
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Transforming complex data into actionable insights. Passionate about machine learning,
              statistical analysis, and building intelligent systems. Currently a Data Science student
              at Lovely Professional University.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="#contact"
                className="btn-primary group flex items-center"
              >
                Get In Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="btn-outline"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md float">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl blur opacity-40 animate-pulse"></div>
              <div className="relative site-hero-card flex items-center justify-center">
                <img
                  src={imgSrc}
                  onError={onImgError}
                  alt="Profile"
                  loading="lazy"
                  className="w-48 h-48 rounded-2xl object-cover shadow-2xl"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">Data Scientist in Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-blue-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
