// src/pages/Home.jsx
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
      <p className="text-gray-600">Welcome to your awesome, animated, responsive React app.</p>
    </motion.div>
  );
}
