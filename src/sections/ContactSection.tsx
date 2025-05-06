import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import AnimatedElement from '../components/AnimatedElement';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's work together!" 
        />
        
        <div className="max-w-4xl mx-auto">
          <AnimatedElement>
            <ContactForm />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;