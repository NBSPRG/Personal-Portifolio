import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard, { Project } from '../components/ProjectCard';
import AnimatedElement from '../components/AnimatedElement';

const projects: Project[] = [
  {
    "id": 1,
    "title": "Super Unlearning Framework",
    "description": "Developed a novel 'Super Unlearning' framework for machine unlearning, designed to efficiently remove unwanted information from a trained model without significant performance degradation.",
    "image": "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8a7719e-aba0-4892-9af5-7540e2e8383b_720x405.png",
    "tags": ["Deep Learning", "Machine Learning", "TensorFlow", "PyTorch", "Research"],
    "githubUrl": "https://github.com/yourusername/super-unlearning",
    "liveUrl": ""
  },
  {
    id: 2,
    title: 'Build Your Own Container',
    description: 'An educational project aimed at understanding containerization by building a minimal container runtime from scratch. This project delves into Linux namespaces, cgroups, and other kernel features, without relying on containerd or runc.',
    image: 'https://w7.pngwing.com/pngs/621/725/png-transparent-linux-namespaces-cgroups-docker-kernel-container-text-media-transport-thumbnail.png',
    tags: ['Linux', 'Namespaces', 'cgroups', 'Containerization', 'Go'],
    githubUrl: 'https://github.com/yourusername/build-your-own-container',
    liveUrl: 'https://yourusername.github.io/build-your-own-container'
  },
  {
    "id": 3,
    "title": "Linux Kernel Module with procfs Interface",
    "description": "Developed a basic Linux kernel module that creates a custom directory in /proc and supports reading and writing data. This helped explore kernel-user space communication via procfs.",
    "image": "https://storware.eu/wp-content/uploads/2022/10/Linux-Kernel.png",
    "tags": ["C", "Linux Kernel", "procfs", "Systems Programming"],
    "githubUrl": "https://github.com/yourusername/procfs-kernel-module",
    "liveUrl": "https://yourusername.github.io/kernel-driver-development"
  },
  {
    "id": 4,
    "title": "Smart Parking System using Raspberry Pi",
    "description": "Built a prototype using Raspberry Pi, ultrasonic sensors, and servo motors to automate parking management. Designed a microservices-based system using Mosquitto MQTT for real-time data exchange and availability detection. Integrated LED navigation and automated servo gates for efficient vehicle guidance.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSabzblwfi8mKNcYrQkfI8pLg3jENp27YLxaeEhM1g7jCMWEQOxQ&s=10&ec=72940544",
    "tags": ["IoT", "Raspberry Pi", "MQTT", "Microservices", "Python", "Embedded Systems"],
    "githubUrl": "https://github.com/yourusername/smart-parking-system",
    "liveUrl": ""
  },
  {
    "id": 5,
    "title": "Parallel Matrix Multiplication using Custom Thread Pool",
    "description": "Developed a multi-threaded matrix multiplication system using a custom thread pool to improve computational efficiency. Implemented a thread pool manager for optimized task distribution and minimized overhead. Ensured thread safety using mutexes and condition variables for safe concurrent execution.",
    "image": "https://www.researchgate.net/publication/311573402/figure/fig7/AS:575700685471744@1514269147526/a-Parallel-vector-addition-and-b-Parallel-vector-matrix-multiplication-steps-using-an.png",
    "tags": ["C++", "Multithreading", "Concurrency", "Thread Pool", "Synchronization"],
    "githubUrl": "https://github.com/yourusername/parallel-matrix-multiplication",
    "liveUrl": ""
  },
  {
    "id": 6,
    "title": "Grow Planet: End-to-End Smart Farming Platform",
    "description": "Developed a comprehensive platform for farmers with 4 core modules: Plantopedia, Plant-Lab, Disease Predictor, and Crop Bid. Deployed a machine learning-powered Plant Lab that achieved 98% accuracy in crop recommendations across 1,000+ regions, enhancing agricultural knowledge and user engagement.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLWJKWVVemR8Iu5Y2bXMoR3dURPy1j78fJ5OniZQLWQ&s&ec=72940544",
    "tags": ["HTML", "CSS", "Javascript", "NodeJs", "Python", "Machine Learning", "Agritech"],
    "githubUrl": "https://github.com/yourusername/smart-farming-platform",
    "liveUrl": ""
  },
];

const categories = [
  'All',
  'Deep Learning',
  'Linux',
  'Embedded Systems',
  'C++',
  'Systems Programming',
  'Containerization',
  'Python',
  'Microservices',
  'Go',
  'Thread Pool'
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.includes(activeCategory))
      );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Projects" 
          subtitle="Check out some of my recent work" 
        />
        
        <AnimatedElement>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement key={project.id} delay={index * 100}>
              <div className="border-l-4 border-theme p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
  {/* Project content */}
  <ProjectCard project={project} />
</div>
              
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
