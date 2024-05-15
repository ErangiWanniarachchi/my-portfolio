import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/myprofile.jpg";
import { motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, trasition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-neutral-900 p-4 lg:md-35 flex flex-wrap items-center justify-center lg:justify-start">
      <div className="w-full lg:w-1/2">
        <motion.h1
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
          variants={Container(1.5)}
          initial="hidden"
          animate="visible"
          className="pd-16 text-6xl font-thing tracking-tight lg:mt-16 lg:text-8xl"
        >
         Erangi Wanniarachchi
        </motion.h1>
        <motion.span
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent block mt-4"
        >
          Full Stack Developer
        </motion.span>
        <motion.p 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
         variants={Container(1.5)}
          initial="hidden"
          animate="visible"className="my-2 max-w-xl py-6 font-light tracking-tighter">
          {HERO_CONTENT}
        </motion.p>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8 flex justify-end">
        <motion.img 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        initial={{x:100,opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1,delay:1.2}}
          src={profilepic}
          alt="Erangi Wanniarachchi"
          className="max-w-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;