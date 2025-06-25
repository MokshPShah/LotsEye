import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatible'
      ],
      icon: '💻'
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'Native Performance',
        'Cross-platform',
        'App Store Optimization',
        'Push Notifications'
      ],
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful and intuitive user interfaces that enhance user experience',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design'
      ],
      icon: '🎨'
    },
    {
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies to grow your business',
      features: [
        'SEO Optimization',
        'Social Media',
        'Content Marketing',
        'Analytics'
      ],
      icon: '📈'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms to sell your products online',
      features: [
        'Payment Integration',
        'Inventory Management',
        'Order Tracking',
        'Customer Support'
      ],
      icon: '🛒'
    },
    {
      title: 'Consulting',
      description:
        'Expert advice and guidance for your digital transformation journey',
      features: [
        'Strategy Planning',
        'Technology Assessment',
        'Process Optimization',
        'Training'
      ],
      icon: '💡'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className='min-h-screen'
    >
      {/* Hero Section */}
      <section
        className='py-12 sm:py-16 lg:py-20'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.h1
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our <span className='text-blue-600'>Services</span>
            </motion.h1>
            <motion.p
              className='text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We offer comprehensive digital solutions to help your business
              thrive in the modern world. From web development to digital
              marketing, we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className='py-12 sm:py-16 lg:py-20 bg-gray-50'
        data-aos='fade-up'
        data-aos-duration='1200'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className='bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                data-aos='zoom-in'
                data-aos-delay={index * 100}
              >
                <div className='text-4xl sm:text-5xl mb-4 sm:mb-6'>
                  {service.icon}
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4'>
                  {service.title}
                </h3>
                <p className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed'>
                  {service.description}
                </p>
                <ul className='space-y-2'>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-sm sm:text-base text-gray-700'
                    >
                      <span className='text-green-500 mr-2'>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className='mt-6 w-full bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className='py-12 sm:py-16 lg:py-20'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6'>
              Ready to Get Started?
            </h2>
            <p className='text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed'>
              Let's discuss your project and see how we can help bring your
              vision to life.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <motion.button
                className='bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className='border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services
