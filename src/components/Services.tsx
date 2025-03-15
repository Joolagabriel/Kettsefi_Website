import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Cloud, BarChart3 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WebDevIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 3L3 12l7 9" />
    <path d="M14 3l7 9-7 9" />
  </svg>
);

const services = [
  {
    icon: <Database className="w-12 h-12" />,
    title: "Data Engineering and Strategy",
    description: "Develop and execute a strategy for creating optimized pipelines to build robust data pipelines and infrastructure, ensuring seamless data processing and management",
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
    title: "Cloud Services, Consulting and Support",
    description: "Scale your operations with secure and efficient cloud infrastructure solutions, complemented by expert consulting and support for seamless integration and growth.",
  },
  {
    icon: <div className="w-12 h-12"><WebDevIcon /></div>,
    title: "Custom Web App Development",
    description: "Building modern web applications that launch fast and scale with your business needs. Perfect for MVPs, micro SaaS products, custom business apps, and AI-powered tools.",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
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