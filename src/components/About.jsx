import aboutImg from "../assets/about 1.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}className="my-20 text-center text-neutral-500 text-4xl"> ABOUT 
        <span className="text-neutral-500"> ME</span>
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        < motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{ opacity:0,x:-100}}
        transition={{ duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
          initial="hidden"
          animate="visible"className="flex justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </motion.div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
          initial="hidden"
          animate="visible"
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <p className="text-neutral-500">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
