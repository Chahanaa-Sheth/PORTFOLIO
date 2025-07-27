import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary-glow/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-portfolio-text-secondary"
          >
            Hi, my name is
          </motion.p>

          {/* Name with coding animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-portfolio-text-primary mb-4 font-mono"
          >
            <span className="text-portfolio-text-secondary">&lt;</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 0.8, ease: "linear" }}
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary animate-pulse"
            >
              Chahanaa Sheth
            </motion.span>
            <span className="text-portfolio-text-secondary">/&gt;</span>
          </motion.div>

          {/* Title with gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gradient mb-6"
          >
            3rd Year @ VIT Chennai specializing in AI/ML
          </motion.h2>

          {/* Professional summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-portfolio-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building intelligent, real-world solutions through AI/ML, IoT, and modern 
            web/mobile systems. From predictive healthcare to edge-powered smart devices — I merge 
            research with engineering to deliver impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button 
              onClick={scrollToProjects}
              className="btn-hero text-lg px-8 py-4"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <a
              href="/uploads/Chahanaa_Sheth_Resume.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Chahanaa_Sheth_Resume.pdf.pdf"
              className="glass-card border-primary/30 hover:border-primary/60 text-lg px-8 py-4 hover:bg-primary/10 inline-flex items-center justify-center rounded-xl transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href="https://github.com/Chahanaa-Sheth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:scale-110 transition-all duration-300 hover:bg-primary/10"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/chahanaa-sheth-3a7914237/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:scale-110 transition-all duration-300 hover:bg-primary/10"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:shethchahanaa@gmail.com"
              className="p-3 glass-card hover:scale-110 transition-all duration-300 hover:bg-primary/10"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-portfolio-text-secondary hover:text-primary transition-colors duration-300 animate-pulse"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;