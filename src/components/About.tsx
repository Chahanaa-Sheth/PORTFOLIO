import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Coffee } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2024 - Present",
      title: "AI Research & Development",
      description: "Developing transformer models for medical AI applications, focusing on multiple sclerosis prediction using advanced computer vision techniques.",
      icon: <Award className="h-5 w-5" />
    },
    {
      year: "2023 - Present",
      title: "VIT University - Computer Science",
      description: "3rd Year Computer Science student specializing in AI/ML, IoT systems, and full-stack development. Active in research projects and hackathons.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      year: "2023",
      title: "IoT & Edge AI Projects",
      description: "Built smart plug monitoring system with ESP32 and real-time ML analytics. Developed hospital management platform with Flutter and Firebase.",
      icon: <Target className="h-5 w-5" />
    },
    {
      year: "2022",
      title: "Started Programming Journey",
      description: "Began learning programming with Python, quickly expanding to mobile development with Flutter and web technologies. First projects in data science.",
      icon: <Coffee className="h-5 w-5" />
    }
  ];

  const interests = [
    "Artificial Intelligence & Machine Learning",
    "Internet of Things (IoT) Systems",
    "Medical AI & Healthcare Technology",
    "Financial Technology & Data Analytics",
    "Mobile App Development",
    "Real-time Systems & Edge Computing",
    "Open Source Contributions",
    "Tech Innovation & Research"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-primary mb-6">
            About Me
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            Passionate about building intelligent systems that solve real-world problems. 
            Currently pursuing Computer Science at VIT while working on cutting-edge AI and IoT projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-portfolio-text-primary mb-6">
                My Journey
              </h3>
              
              <div className="space-y-6 text-portfolio-text-secondary leading-relaxed">
                <p>
                  I'm a 3rd Year Computer Science student at VIT University with a passion for 
                  creating intelligent systems that make a real impact. My journey began with 
                  curiosity about how technology can solve complex problems, leading me to 
                  specialize in AI, IoT, and full-stack development.
                </p>
                
                <p>
                  What drives me is the intersection of artificial intelligence and practical 
                  applications. From building edge AI systems for energy monitoring to developing 
                  healthcare platforms, I focus on creating solutions that are both technically 
                  sophisticated and genuinely useful.
                </p>
                
                <p>
                  Currently, I'm working on advanced transformer models for medical AI, 
                  specifically in multiple sclerosis prediction. This research combines my 
                  interests in machine learning, healthcare technology, and making a positive 
                  impact on people's lives.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-portfolio-text-primary mb-4">
                  Areas of Interest
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-portfolio-text-secondary"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {interest}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-portfolio-text-primary mb-8">
              Timeline
            </h3>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-primary opacity-30"></div>
                  )}
                  
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 glass-card flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 glass-card p-6">
                      <div className="text-sm text-primary font-semibold mb-1">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold text-portfolio-text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-portfolio-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-text-primary mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-portfolio-text-secondary mb-6">
              I'm always excited to work on innovative projects, collaborate with other developers, 
              or discuss the latest trends in AI and technology. Whether you have an idea for a 
              project or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-hero px-6 py-3 inline-flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-6 py-3 transition-all duration-300 inline-flex items-center justify-center rounded-xl"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;