import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Cpu, 
  Database, 
  Globe,
  Terminal,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Dart", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "LSTM Networks", level: 85 },
        { name: "Computer Vision", level: 80 }
      ]
    },
    {
      title: "Mobile & Web Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "Flutter", level: 95 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Streamlit", level: 90 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "ESP32", level: 90 },
        { name: "MQTT", level: 85 },
        { name: "TensorFlow Lite", level: 80 },
        { name: "Embedded Systems", level: 75 },
        { name: "Hardware Integration", level: 80 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Firebase", level: 90 },
        { name: "Cloud Firestore", level: 85 },
        { name: "REST APIs", level: 85 },
        { name: "Real-time Systems", level: 80 },
        { name: "Linux", level: 75 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "Plotly", level: 85 },
        { name: "yFinance", level: 80 },
        { name: "NewsAPI", level: 80 }
      ]
    }
  ];

  const tools = [
    "Git & GitHub", "Docker", "VS Code", "Android Studio", "Jupyter", 
    "Firebase Console", "Postman", "Linux Terminal", "Arduino IDE"
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            Technical Skills
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, IoT development, full-stack engineering, 
            and cutting-edge technologies for building intelligent systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:bg-gradient-glass transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 glass-card text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-portfolio-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-portfolio-text-primary">
                        {skill.name}
                      </span>
                      <span className="text-xs text-portfolio-text-secondary">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-portfolio-surface rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut" 
                        }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-primary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-portfolio-text-primary mb-8">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="skill-badge hover:bg-primary/20 hover:border-primary/40"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { label: "Projects Completed", value: "15+" },
            { label: "Technologies Mastered", value: "25+" },
            { label: "Lines of Code", value: "10K+" },
            { label: "Problem Solving", value: "Expert" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gradient mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-portfolio-text-secondary text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;