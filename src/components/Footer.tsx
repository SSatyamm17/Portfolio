import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
  <footer className="bg-white border-t border-gray-100 text-gray-700 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="flex items-center gap-2 text-gray-700 mb-2">
              Made with <Heart size={18} className="text-red-500 fill-current animate-pulse" /> by Your Name
            </p>
            <p className="text-gray-500 text-sm">
              Passionate about Data Science & Machine Learning
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
