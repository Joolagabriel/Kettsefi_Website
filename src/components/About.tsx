import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming businesses through technology and innovation
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:pr-8 w-full"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-600 text-justify">
              Founded by a seasoned IT professional with many years of IT experience, 
              Kettsefi Technologies brings deep expertise across the full spectrum of 
              modern technology solutions.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              Our founder's comprehensive background spans data engineering, cloud 
              architecture, AI implementation, and custom software development, 
              ensuring we deliver cutting-edge solutions that drive real business value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;