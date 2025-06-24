import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: <Github />, url: 'https://github.com' },
  { icon: <Linkedin />, url: 'https://linkedin.com' },
  { icon: <Twitter />, url: 'https://twitter.com' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-gray-50 border-t border-gray-200 text-gray-700 mt-16 sm:mt-20 lg:mt-24"
    >
      <div className="max-w-6xl mx-auto py-8 sm:py-10 px-4 sm:px-6 text-center space-y-3 sm:space-y-4">
        <motion.h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Stay Connected
        </motion.h2>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          {socials.map(({ icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-gray-500 hover:text-blue-500 p-2"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6">
                {icon}
              </div>
            </motion.a>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <b>LotsEye.</b> All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}