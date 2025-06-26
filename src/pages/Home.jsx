 // src/pages/Home.jsx
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import WhyChooseUs from '../Components/WhyChooseUs'
import CallToAction from '../Components/CallToAction'
import CoreServices from '../Components/Services'

export default function Home () {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Welcome to LotsEye',
    'Grow Your Business with Powerful Digital Marketing',
    'Transform Your Digital Presence',
    'Elevate Your Brand Online'
  ]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false)
          setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])
  return (
    <div className='min-h-screen'>
      {/* Hero Banner Section */}
      <section
        className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24'
      >
        {/* Background with gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'>
          {/* Animated background pattern */}
          <div className='absolute inset-0 opacity-20'>
            <div
              className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg"
              width='60'
              height='60'
              viewBox='0 0 60 60'
              xmlns='http://www.w3.org/2000/svg%3E%3Cg'
              fill='none'
              fill-rule='evenodd'
              fill-opacity='0.4'
              cx='30'
              cy='30'
              r='2'
            ></div>
          </div>

          {/* Floating elements */}
          <motion.div
            className='absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20'
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className='absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20'
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          ></motion.div>
          <motion.div
            className='absolute bottom-40 left-20 w-12 h-12 bg-indigo-400 rounded-full opacity-20'
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
          ></motion.div>
          <motion.div
            className='absolute bottom-20 right-10 w-24 h-24 bg-pink-400 rounded-full opacity-20'
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}
          ></motion.div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)]'>
            {/* Left Content */}
            <div className='text-center lg:text-left'>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=''
              >
                {/* Typewriter Effect */}
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[200px] xl:min-h-[240px] flex items-center justify-center lg:justify-start'>
                  <span className='typewriter leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent'>
                    {currentText}
                    <span className='animate-pulse text-blue-400'>|</span>
                  </span>
                </div>
              </motion.div>

              <motion.p
                className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0'
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Your brand, our vision. We create stunning digital experiences
                that captivate your audience and drive results. Discover the
                power of modern web design and development.
              </motion.p>

              <motion.div
                className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center px-4 sm:px-0'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.button
                  className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto transform hover:scale-105'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  className='border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-base sm:text-lg md:text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto transform hover:scale-105'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Person Photo */}
            <div className='flex justify-center lg:justify-end mt-8 lg:mt-0'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className='relative'
              >
                {/* Person Photo Container */}
                <div className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]'>
                  {/* Decorative Background Circle */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full animate-pulse'></div>

                  {/* Photo Placeholder - Replace with actual image */}
                  <div className='absolute inset-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center overflow-hidden shadow-2xl'>
                    {/* Placeholder Avatar */}
                    <div className='w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
                      <svg
                        className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 text-white'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                      </svg>
                    </div>
                    {/* 
                    Replace the above div with an actual image:
                    <img 
                      src="/path/to/person-photo.jpg" 
                      alt="Professional headshot" 
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>

                  {/* Floating Decorative Elements */}
                  <motion.div
                    className='absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80'
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  ></motion.div>
                  <motion.div
                    className='absolute -bottom-6 -left-6 w-6 h-6 bg-pink-400 rounded-full opacity-80'
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5
                    }}
                  ></motion.div>
                  <motion.div
                    className='absolute top-1/4 -left-8 w-4 h-4 bg-green-400 rounded-full opacity-80'
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className='flex flex-col items-center text-white'>
              <span className='text-sm mb-2'>Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className='w-6 h-10 border-2 border-white rounded-full flex justify-center'
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className='w-1 h-3 bg-white rounded-full mt-2'
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className='pt-16'>
        {/* Service Section */}
        <CoreServices />
      </div>
      {/* Features Section */}
      <WhyChooseUs />
      <CallToAction />
    </div>
  )
}
