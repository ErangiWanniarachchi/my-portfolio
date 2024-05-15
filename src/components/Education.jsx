import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }} 
        className="my-20 text-center text-4xl"
      >
        EDUCATION
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center"
            >
              <div className="w-full lg:w-1/4">
              <p className="mb-4 text-neutral-400">{education.insitute}</p>
                <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
              </div>
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{education.qualification}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 md-3 font-semibold">{education.gpa}</h6>
               
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
