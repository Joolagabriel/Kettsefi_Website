import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, ClipboardList, Rocket, Heart } from 'lucide-react';

const processes = [
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: "Free Consultation",
    description: "Share your vision, define success metrics, set clear goals for your project",
  },
  {
    icon: <ClipboardList className="w-12 h-12" />,
    title: "Strategic Planning",
    description: "Build a roadmap, choose the right tech stack, set achievable milestones",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Development",
    description: "Build and refine your solution with regular updates and collaborative feedback",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Launch & Support",
    description: "Deploy seamlessly with thorough testing, documentation and future-proof planning",
  },
];

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven approach to delivering successful projects
          </p>
        </div>

        <div
          ref={ref}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-blue-500" />
          
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              <div className="relative mb-12">
                <div className="w-24 h-24 rounded-full bg-blue-500 mx-auto flex items-center justify-center text-white">
                  {process.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Process