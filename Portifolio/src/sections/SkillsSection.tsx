import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProgressBar from '../components/ProgressBar';
import AnimatedElement from '../components/AnimatedElement';
import {
  Code,
  Layout,
  Database,
  Server,
  Activity,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Settings,
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    percentage: number;
    color?: string;
  }[];
}

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Number of category buttons to show per page

  const skillsPages: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'C/C++', percentage: 88, color: 'bg-blue-600' },
        { name: 'Java', percentage: 85, color: 'bg-red-600' },
        { name: 'JavaScript', percentage: 92, color: 'bg-yellow-500' },
        { name: 'Python', percentage: 90, color: 'bg-blue-500' },
        { name: 'Go', percentage: 75, color: 'bg-cyan-500' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: <Settings size={24} />,
      skills: [
        { name: 'VS Code', percentage: 95, color: 'bg-blue-500' },
        { name: 'Visual Studio', percentage: 85, color: 'bg-purple-600' },
        { name: 'GitHub', percentage: 92, color: 'bg-gray-700' },
        { name: 'JetBrains IntelliJ', percentage: 88, color: 'bg-pink-500' },
        { name: 'Google Colab', percentage: 82, color: 'bg-yellow-600' },
        { name: 'Postman', percentage: 90, color: 'bg-orange-500' },
        { name: 'HTTPie', percentage: 78, color: 'bg-green-500' },
      ],
    },
    {
      id: 'cs',
      title: 'CS Fundamentals',
      icon: <Code size={24} />,
      skills: [
        { name: 'Operating Systems', percentage: 90, color: 'bg-indigo-500' },
        { name: 'OOPs Concepts', percentage: 92, color: 'bg-purple-600' },
        { name: 'DBMS', percentage: 88, color: 'bg-green-600' },
        { name: 'DSA', percentage: 94, color: 'bg-blue-600' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: [
        { name: 'HTML5 & CSS3', percentage: 95, color: 'bg-blue-500' },
        { name: 'JavaScript / TypeScript', percentage: 90, color: 'bg-yellow-500' },
        { name: 'React.js', percentage: 92, color: 'bg-blue-400' },
        { name: 'jQuery', percentage: 75, color: 'bg-pink-500' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', percentage: 85, color: 'bg-green-500' },
        { name: 'Spring Boot', percentage: 82, color: 'bg-teal-500' },
      ],
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'NoSQL (MongoDB)', percentage: 82, color: 'bg-green-600' },
        { name: 'PostgreSQL', percentage: 78, color: 'bg-blue-700' },
        { name: 'SQL', percentage: 88, color: 'bg-amber-500' },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: <Server size={24} />,
      skills: [
        { name: 'Linux Fundamentals', percentage: 85, color: 'bg-gray-800' },
        { name: 'Docker', percentage: 78, color: 'bg-blue-500' },
        { name: 'Jenkins', percentage: 72, color: 'bg-red-600' },
        { name: 'Kubernetes', percentage: 70, color: 'bg-indigo-600' },
        { name: 'Automation (Bash)', percentage: 80, color: 'bg-yellow-600' },
      ],
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <Activity size={24} />,
      skills: [
        { name: 'Problem Solving', percentage: 95, color: 'bg-blue-500' },
        { name: 'Communication', percentage: 90, color: 'bg-green-500' },
        { name: 'Teamwork', percentage: 95, color: 'bg-indigo-500' },
        { name: 'Time Management', percentage: 85, color: 'bg-amber-500' },
      ],
    },
  ];

  // Calculate pagination values
  const totalPages = Math.ceil(skillsPages.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, skillsPages.length);
  const currentCategories = skillsPages.slice(startIndex, endIndex);
  
  const activeSkills = skillsPages.find(
    (page) => page.id === activeCategory
  )?.skills || [];

  // Pagination controls
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Ensure the active category is visible when paginating
  const ensureActiveCategoryIsVisible = (categoryId: string) => {
    const categoryIndex = skillsPages.findIndex(category => category.id === categoryId);
    if (categoryIndex !== -1) {
      const targetPage = Math.floor(categoryIndex / itemsPerPage);
      setCurrentPage(targetPage);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    ensureActiveCategoryIsVisible(categoryId);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="My Skills"
          subtitle="Here are my technical skills and competencies"
        />

        <div className="flex flex-col space-y-6 mb-12">
          {/* Category buttons with pagination */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 0}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-md dark:bg-gray-700 dark:hover:bg-blue-600'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentCategories.map((category) => (
                  <AnimatedElement key={category.id}>
                    <button
                      className={`w-full p-4 rounded-lg flex flex-col items-center justify-center h-24 transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-blue-500 text-white shadow-lg scale-105'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-110 hover:shadow-md'
                      }`}
                      onClick={() => handleCategoryClick(category.id)}
                      aria-label={`View ${category.title} skills`}
                    >
                      <div className="mb-2">{category.icon}</div>
                      <h3 className="text-sm font-medium">{category.title}</h3>
                    </button>
                  </AnimatedElement>
                ))}
              </div>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage >= totalPages - 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage >= totalPages - 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-md dark:bg-gray-700 dark:hover:bg-blue-600'
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Pagination indicator */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-blue-500 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Skills detail panel */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
            {skillsPages.find(page => page.id === activeCategory)?.title}
          </h3>
          <AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {activeSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;