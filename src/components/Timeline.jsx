import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const timelineElements = [
  {
    title: "12th Grade Education",
    location: "Madhya Pradesh State Board",
    description: "Completed higher primary education with focus on science and mathematics",
    date: "2021",
    icon: <FaGraduationCap />,
  },
  {
    title: "Python Development Journey",
    location: "Self-Learning & Projects",
    description: "Started learning Python and building projects. Developed strong foundation in programming concepts and problem-solving",
    date: "2022",
    icon: <FaLaptopCode />,
  },
  {
    title: "MERN Stack Development",
    location: "Connect Shiksha",
    description: "Mastered full-stack web development with MongoDB, Express.js, React, and Node.js. Built several projects including My Shopee e-commerce platform",
    date: "2023",
    icon: <FaServer />,
  },
  {
    title: "IoT and Automation Projects",
    location: "Personal Projects",
    description: "Focused on Internet of Things and automation projects. Developed home automation systems and worked with drones",
    date: "2024",
    icon: <FaLaptopCode />,
  },
];

const Timeline = () => {
  return (
    <section id="about" className="py-20 bg-transparent backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From learning the basics of programming to developing full-stack applications
            and exploring emerging technologies in AI and IoT.
          </p>
        </motion.div>

        <VerticalTimeline>
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              date={element.date}
              dateClassName="text-gray-400"
              iconStyle={{
                background: 'linear-gradient(135deg, #0F172A, #0EA5E9)',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(15, 25, 42, 0.6)',
              }}
              icon={element.icon}
              contentStyle={{
                background: 'rgba(15, 25, 42, 0.8)',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(14, 165, 233, 0.5)',
                borderRadius: '15px',
                textAlign: 'left',
                padding: '2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgba(14, 165, 233, 0.8)',
              }}
            >
              <h3 className="text-white text-xl font-bold">{element.title}</h3>
              <h4 className="text-blue-400">{element.location}</h4>
              <p className="text-gray-300 mt-2">{element.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
