import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import cta from '../assets/cta.png'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const CallToAction = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative bg-fixed bg-center bg-cover bg-no-repeat text-white py-28 px-6 md:px-12"
      style={{
        backgroundImage: `url('${cta}')`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(15,23,42,0.75)] z-0" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={inView ? "title-visible" : "title-hidden"}
        >
          Ready to 3X Your Revenue in 90 Days?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          key={inView ? "text-visible" : "text-hidden"}
        >
          Join 500+ businesses that have transformed their growth with our proven digital marketing strategies. 
          Get your <span className="text-yellow-300 font-semibold">FREE marketing audit</span> and discover exactly how to dominate your market.
        </motion.p>

        {/* Value Props */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          key={inView ? "props-visible" : "props-hidden"}
        >
          {[
            "✅ Free 30-minute strategy session",
            "✅ Custom growth roadmap",
            "✅ Competitor analysis included",
            "✅ No obligations or commitments"
          ].map((prop, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300">
              {prop}
            </div>
          ))}
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          key={inView ? "btn-visible" : "btn-hidden"}
          className="inline-block"
        >
          <button
            className="group relative overflow-hidden rounded-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-all duration-700 ${isHovered ? 'animate-pulse' : ''}`}></div>

            {/* Main button */}
            <div className="relative bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-full font-bold text-lg sm:text-xl md:text-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-active:scale-95">

              {/* Shimmer animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>

              {/* Floating dots */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${25 + (i % 3) * 25}%`,
                      animationDelay: `${i * 0.15}s`,
                      animation: isHovered ? 'float 2s ease-in-out infinite' : 'none'
                    }}
                  ></div>
                ))}
              </div>

              {/* Button label */}
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="group-hover:tracking-wide transition-all duration-300">
                  🚀 Get Your FREE Marketing Audit
                </span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Ripple on click */}
            <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 transform scale-0 group-active:scale-110 transition-all duration-200"></div>
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-8 text-sm text-white/70"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          key={inView ? "trust-visible" : "trust-hidden"}
        >
          <p>⭐⭐⭐⭐⭐ Rated 4.9/5 by 500+ satisfied clients</p>
          <p className="mt-2">🔒 Your information is 100% secure and confidential</p>
        </motion.div>

      </div>

      <style>
        {`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-10px) rotate(90deg); }
      50% { transform: translateY(-5px) rotate(180deg); }
      75% { transform: translateY(-15px) rotate(270deg); }
    }
  `}
      </style>

    </section>
  );
};

export default CallToAction;