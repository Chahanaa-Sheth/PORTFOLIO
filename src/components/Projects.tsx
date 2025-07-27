import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Zap, Brain, Heart, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IoT-Based Smart Plug ML System",
      description: "Edge AI system for real-time energy monitoring and anomaly detection using ESP32 and LSTM models.",
      longDescription: "Built an intelligent energy monitoring system that processes data in real-time on edge devices. Implemented LSTM neural networks with TensorFlow Lite for anomaly detection and energy consumption prediction.",
      image: "/api/placeholder/600/400",
      technologies: ["ESP32", "MQTT", "LSTM", "TensorFlow Lite", "React", "IoT"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "IoT & AI",
      icon: <Zap className="h-6 w-6" />,
      featured: true
    },
    {
      id: 2,
      title: "Stock Sentiment Prediction App",
      description: "Real-time financial analytics platform combining market data with sentiment analysis for trading insights.",
      longDescription: "Developed a comprehensive financial analytics platform that combines real-time stock data from yFinance with news sentiment analysis. Features machine learning models for price prediction and risk assessment.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "yFinance", "NewsAPI", "Streamlit", "Scikit-learn", "NLP"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      featured: true
    },
    {
      id: 3,
      title: "Hospital Management System",
      description: "Flutter-based healthcare platform with appointment booking, donation management, and patient records.",
      longDescription: "Complete healthcare management solution built with Flutter and Firebase. Features include appointment scheduling, donation tracking, patient record management, and real-time notifications.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Firestore", "Push Notifications"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile Development",
      icon: <Heart className="h-6 w-6" />,
      featured: true
    },
    {
      id: 4,
      title: "Transformer Model for MS Prediction",
      description: "Advanced deep learning model for multiple sclerosis prediction using medical imaging data.",
      longDescription: "Research project implementing transformer architecture for medical image analysis. Achieved 92% accuracy in early MS detection using MRI scans and advanced computer vision techniques.",
      image: "/api/placeholder/600/400",
      technologies: ["PyTorch", "Transformers", "Medical Imaging", "Computer Vision", "Research"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI Research",
      icon: <Brain className="h-6 w-6" />,
      featured: false
    },
    {
      id: 5,
      title: "Smart Railway Kiosk Project",
      description: "IoT-enabled railway information system with hardware-software integration and real-time updates.",
      longDescription: "Integrated hardware-software solution for railway stations featuring real-time train information, ticket booking interface, and emergency communication systems.",
      image: "/api/placeholder/600/400",
      technologies: ["Embedded Systems", "IoT", "React", "Hardware Integration", "Real-time APIs"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "IoT & Hardware",
      icon: <Train className="h-6 w-6" />,
      featured: false
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "IoT & AI", "Machine Learning", "Mobile Development", "AI Research", "IoT & Hardware"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative">
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
            Featured Projects
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            A showcase of my technical expertise across AI, IoT, and full-stack development. 
            Each project demonstrates real-world problem-solving and production-ready solutions.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-portfolio-surface h-48">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 glass-card">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-portfolio-text-primary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge className="skill-badge text-xs">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-portfolio-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="btn-hero text-sm px-4 py-2"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-portfolio-text-primary mb-8 text-center">
            All Projects
          </h3>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-hero" : "glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:bg-gradient-glass transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 glass-card flex items-center justify-center">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-lg font-semibold text-portfolio-text-primary">
                        {project.title}
                      </h4>
                      <Badge className="skill-badge text-xs w-fit">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-portfolio-text-secondary text-sm">
                      {project.longDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="btn-hero text-sm px-4 py-2"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;