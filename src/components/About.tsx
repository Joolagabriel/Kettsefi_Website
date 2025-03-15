import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
            className="space-y-6 lg:pr-8"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                Founded by a seasoned IT professional, 
                Kettsefi Technologies brings deep expertise across the full spectrum of 
                modern technology solutions.
              </p>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                Our founder's comprehensive background spans data engineering, cloud 
                architecture, AI implementation, and custom software development, 
                ensuring we deliver cutting-edge solutions that drive real business value.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;