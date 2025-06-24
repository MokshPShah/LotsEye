// src/pages/Home.jsx
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Welcome to <span className="text-blue-600">LotsEye</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Your brand, our vision. We create stunning digital experiences that captivate your audience and drive results. 
              Discover the power of modern web design and development.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose LotsEye?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We combine creativity with technology to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Responsive Design",
                description: "Beautiful designs that work perfectly on all devices and screen sizes",
                icon: "📱"
              },
              {
                title: "Modern Technology",
                description: "Built with the latest technologies for optimal performance and scalability",
                icon: "⚡"
              },
              {
                title: "User Experience",
                description: "Intuitive interfaces that provide exceptional user experiences",
                icon: "✨"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}