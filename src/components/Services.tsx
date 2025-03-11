import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Cloud, BarChart3 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Database className="w-12 h-12" />,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure for seamless data processing and management.",
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Analytics",
    description: "Transform raw data into actionable insights through advanced analytics and visualization.",
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Solutions",
    description: "Leverage cutting-edge AI and machine learning to solve complex business challenges.",
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "Cloud Services",
    description: "Scale your operations with secure and efficient cloud infrastructure solutions.",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to drive your digital transformation
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;