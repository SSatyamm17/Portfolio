import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'ssu97512@gmail.com',
      link: 'mailto:ssu97512@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '7973131392',
      link: 'tel:+11234567890',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Ludhiana, Punjab, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={28} />,
      url: 'https://github.com/yourusername',
      color: 'hover:bg-gray-700',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={28} />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={28} />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:bg-sky-500',
    },
  ];

  return (
  <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or data science projects.
          Feel free to reach out!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500/50 card-hover"
              >
                <div className="inline-block p-4 bg-blue-500/20 border border-blue-400 text-blue-400 rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-2xl p-8 text-center text-white border border-blue-500/20 glow-pulse">
            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
            <p className="mb-6 opacity-90">
              Follow me on social media to stay updated with my latest projects and insights
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white/20 rounded-full hover:bg-white/40 transition-all duration-200 backdrop-blur transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/resume.pdf"
              download
              className="btn-primary text-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
