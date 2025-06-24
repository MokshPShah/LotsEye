import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import SearchModal from './SearchModal'

export default function ModernNavbar () {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [query, setQuery] = useState('')

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/service' },
    { label: 'Contact', path: '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (showSearchModal) setMobileMenuOpen(false)
  }, [showSearchModal])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'shadow-lg backdrop-blur-md' : ''
      }`}
    >
      <div className='flex items-center justify-between w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] px-3 sm:px-6 py-3 sm:py-4 bg-white/70 rounded-full border border-white/40 backdrop-blur-md'>
        {/* Logo */}
        <Link to="/" className='flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-200'>
          <img src={Logo} alt='Logo' className='w-20 h-12 sm:w-28 sm:h-16' />
          <div className='leading-tight'>
            <h1 className='font-extrabold text-gray-900 text-md sm:text-md uppercase'>
              Lots Eye
            </h1>
            <p className='text-gray-500 text-sm hidden sm:block'>Empowering Brand's Online.</p>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className='hidden md:flex items-center space-x-6 lg:space-x-10'>
          {navLinks.map(({ label, path }, i) => (
            <Link
              key={i}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className='text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors duration-200'
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className='flex items-center space-x-2 sm:space-x-4'>
          {/* Search Icon */}
          <button onClick={() => setShowSearchModal(true)} aria-label='Search' className='p-1'>
            <Search className='text-gray-600 w-5 h-5 sm:w-6 sm:h-6' />
          </button>

          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className='hidden sm:block'>
            <Link
              to='/contact'
              className='bg-black text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold transition shadow hover:shadow-lg text-sm sm:text-base'
            >
              Contact
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle Menu'
              className='cursor-pointer p-1'
            >
              {mobileMenuOpen ? (
                <X className='text-gray-600 w-5 h-5' />
              ) : (
                <svg
                  className='w-5 h-5 text-gray-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key='mobile-menu'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden absolute top-full mt-2 w-[95%] sm:w-[90%] bg-white rounded-xl shadow-lg p-4 space-y-3'
          >
            {navLinks.map(({ label, path }, i) => (
              <Link
                key={i}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className='block text-gray-700 font-medium hover:text-blue-600 py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200'
              >
                {label}
              </Link>
            ))}
            {/* Mobile Contact Button */}
            <Link
              to='/contact'
              onClick={() => setMobileMenuOpen(false)}
              className='block bg-black text-white px-4 py-2 rounded-full font-semibold text-center mt-4 hover:bg-gray-800 transition-colors duration-200'
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        query={query}
        setQuery={setQuery}
      />
    </motion.header>
  )
}
