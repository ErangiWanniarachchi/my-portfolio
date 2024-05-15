import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-900 p-4"
    >
      <h2 className="my-20 text-center text-neutral-900 text-3xl">
        Reach <span className="text-neutral-900">Out</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left tracking-tighter">
        {/* Left side with icons */}
        <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaGithub className="text-3xl text-gray-600 hover:text-gray-800" />
          </a>
          <a
            href="https://instergram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaInstagram className="text-3xl text-gray-600 hover:text-gray-800" />
          </a>
        </div>
        {/* Middle section with form */}
        <div className="flex flex-col items-center lg:items-start">
          <form className="flex flex-col w-full lg:w-auto">
            <input type="text" placeholder="Type your Name" className="my-2 p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Type your Email" className="my-2 p-2 border border-gray-300 rounded" />
            <textarea placeholder="Enter your Message" rows="4" className="my-2 p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
          </form>
        </div>
        {/* Right side with contact information */}
        <div className="text-center lg:text-left">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
