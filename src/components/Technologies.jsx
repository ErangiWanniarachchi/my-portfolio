import {FaAngular } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs, FaGit } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { motion } from "framer-motion";



const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 p-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-8 text-center text-4xl"
      >
        TECHNOLOGIES
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" 
          className="rounded-full border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4"
        >
          <FaAngular className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-800" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4"
        >
          <FaGit className="text-7xl text-gray-600" />
        </motion.div>

        
      </div>
    </div>
  );
};

export default Technologies;
