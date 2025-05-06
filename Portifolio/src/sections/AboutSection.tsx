import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about me and my experience" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div className="relative">
              <div className="w-full aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg" 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-3xl font-bold">0+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <div>
            <AnimatedElement>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              A Passionate Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a passionate Software Engineer set to begin my journey at <b>Multiplier Technologies</b>. With a strong foundation in <b>Computer Science</b> fundamentals, including <b>Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPs), Operating Systems (OS), and Database Management Systems (DBMS)</b>, I am deeply interested in the entire <b>Software Development Lifecycle</b>—from building and deploying applications to scaling and managing them efficiently.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
              Throughout my career, I've had the opportunity to work on various projects, collaborate within teams, and participate in hackathons, where I gained valuable experience in real-world problem-solving. Additionally, I've dedicated time to researching <b>Machine Learning and Deep Learning</b> topics, expanding my understanding of emerging technologies and their application.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am constantly seeking new challenges that allow me to grow and contribute meaningfully to the field of software development. My goal is to develop robust and scalable applications that make a difference.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Name:</p>
                  <p className="text-gray-600 dark:text-gray-400">Chandan Kumar</p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Email:</p>
                  <p className="text-gray-600 dark:text-gray-400">chandanues@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Location:</p>
                  <p className="text-gray-600 dark:text-gray-400">Gaya, Bihar</p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Availability:</p>
                  <p className="text-gray-600 dark:text-gray-400">Software Engineer, Full-time</p>
                </div>
              </div>
              
              <a 
                href="Portifolio/utils/CHANDAN_KUMAR.pdf" 
                download 
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </a>
            </AnimatedElement>
          </div>

          {/* Education - Left Column */}
  <div>
    {/* <AnimatedElement> */}
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Education
      </h3>
    {/* </AnimatedElement> */}
    <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8">
      {/* B.Tech */}
      <AnimatedElement delay={200} className="mb-12">
        <div className="flex flex-col items-start">
          <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mb-2">
            <Briefcase size={16} className="text-white" />
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-2">
            2021-2025
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Bachelor's Degree in Information Technology
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            From Indian Institute of Information Technology, Allahabad, U.P.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <b>Grade: 8.2</b>
          </p>
        </div>
      </AnimatedElement>

      {/* 12th Board */}
      <AnimatedElement delay={400} className="mb-12">
        <div className="flex flex-col items-start">
          <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mb-2">
            <Briefcase size={16} className="text-white" />
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-2">
            2019-2021
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Higher Secondary Education (XII)
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            From Gaya College, Gaya, Bihar
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <b>Percentage: 88.8%</b>
          </p>
        </div>
      </AnimatedElement>

      {/* 10th board */}
      <AnimatedElement delay={600} className="mb-12">
        <div className="flex flex-col items-start">
          <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mb-2">
            <Briefcase size={16} className="text-white" />
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-2">
            2019
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Secondary Education (X)
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            From Gurukul Majhanpur, Sherghati, Gaya, Bihar
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <b>Percentage: 92.2%</b>
          </p>
        </div>
      </AnimatedElement>
    </div>
  </div>
        
  {/* Experience - Right Column */}
  <div>
    <AnimatedElement>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Experience
      </h3>
    </AnimatedElement>
    
    <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8">
      {/* Freelance Developer at Build With Peers */}
      <AnimatedElement delay={200} className="mb-12">
  <div className="flex flex-col items-start">
    <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mb-2">
      <GraduationCap size={16} className="text-white" />
    </div>
    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-2">
      2025 - Present
    </div>
    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
      Software Engineer - Multiplier Technologies
    </h4>
    <p className="text-gray-600 dark:text-gray-400">
      Working on various web development projects. <br/>
      Collaborating with teams to deliver innovative digital solutions.
    </p>
  </div>
</AnimatedElement>

      <AnimatedElement delay={200} className="mb-12">
        <div className="flex flex-col items-start">
          <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mb-2">
            <Briefcase size={16} className="text-white" />
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Jan. 2024 - Apr. 2024
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Freelance Developer - Build With Peers
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
          Working on various web development projects. <br/> 
          Collaborating with teams to deliver innovative digital solutions.
          </p>
        </div>
      </AnimatedElement>

      {/* Freelance Developer at TutorBin */}
      <AnimatedElement delay={400} className="mb-12">
        <div className="flex flex-col items-start">
          <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mb-2">
            <Briefcase size={16} className="text-white" />
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-2">
            May. 2023 - Aug. 2023
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Freelance Developer - TutorBin
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Provide programming tutoring and development solutions for students<br/> while also working on freelance projects in software engineering.
          </p>
        </div>
      </AnimatedElement>

    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default AboutSection;