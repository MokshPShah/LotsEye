// src/components/SearchModal.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, query, setQuery }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search data - you can replace this with real search functionality
  const searchData = [
    { title: 'Web Development', type: 'Service', description: 'Custom websites and web applications' },
    { title: 'Mobile Development', type: 'Service', description: 'Native and cross-platform mobile apps' },
    { title: 'UI/UX Design', type: 'Service', description: 'Beautiful and intuitive user interfaces' },
    { title: 'Digital Marketing', type: 'Service', description: 'Comprehensive digital marketing strategies' },
    { title: 'E-commerce Solutions', type: 'Service', description: 'Complete e-commerce platforms' },
    { title: 'Consulting', type: 'Service', description: 'Expert advice and guidance' },
    { title: 'Home', type: 'Page', description: 'Welcome to LotsEye - Your brand, our vision' },
    { title: 'Services', type: 'Page', description: 'Our comprehensive digital solutions' },
    { title: 'Contact', type: 'Page', description: 'Get in touch with our team' },
  ];

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, isOpen]);

  // Handle search
  useEffect(() => {
    if (query.trim()) {
      setIsSearching(true);
      // Simulate search delay
      const searchTimeout = setTimeout(() => {
        const results = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(searchTimeout);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [query]);

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle result click
  const handleResultClick = (result) => {
    if (result.type === 'Page') {
      const routes = {
        'Home': '/',
        'Services': '/service',
        'Contact': '/contact'
      };
      window.location.href = routes[result.title] || '/';
    } else {
      // For services, go to services page
      window.location.href = '/service';
    }
    onClose();
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-white rounded-xl relative w-full max-w-2xl mx-auto shadow-2xl"
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Search</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 sm:p-6">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for services, pages, or content..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </form>

              {/* Search Results */}
              <div className="mt-4 max-h-96 overflow-y-auto">
                {isSearching && (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-3 text-gray-600">Searching...</span>
                  </div>
                )}

                {!isSearching && query.trim() && searchResults.length === 0 && (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-2">
                      <Search className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="text-gray-600">No results found for "{query}"</p>
                    <p className="text-sm text-gray-500 mt-1">Try searching for services, pages, or content</p>
                  </div>
                )}

                {!isSearching && searchResults.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 mb-3">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </p>
                    {searchResults.map((result, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{result.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                          </div>
                          <span className="ml-3 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            {result.type}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}

                {!query.trim() && (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-2">
                      <Search className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="text-gray-600">Start typing to search</p>
                    <p className="text-sm text-gray-500 mt-1">Search for services, pages, or content</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 bg-gray-50 rounded-b-xl">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Press Enter to search</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}