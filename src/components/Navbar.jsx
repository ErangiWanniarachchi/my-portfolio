import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../assets/kevinRushLogo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-pink-300 mb-5 flex items-center justify-between py-6 px-4 lg:px-10">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        initial="hidden"
        animate="visible"
        className="flex-shrink-0"
      >
        <img className="w-28 rounded-2xl" src={logo} alt="logo" />
      </motion.div>
      <motion.div
        animate="visible"
        className="flex items-center gap-6 text-3xl lg:text-2xl"
      >
        <a href="https://www.linkedin.com/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/">
          <FaGithub />
        </a>
        <a href="https://facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/">
          <FaTiktok />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
