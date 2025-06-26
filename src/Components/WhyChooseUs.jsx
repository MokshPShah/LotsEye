import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaUsers,
  FaClock,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Proven ROI Results",
    icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Average 300% ROI increase within 90 days of campaign launch.",
    backDesc: "Data-driven strategies with transparent reporting and measurable outcomes that directly impact your bottom line.",
    metric: "300% Average ROI"
  },
  {
    title: "Expert Team",
    icon: <FaAward className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Certified Google & Facebook marketing specialists with 10+ years experience.",
    backDesc: "Our team holds advanced certifications and has managed over $50M in ad spend across industries.",
    metric: "$50M+ Ad Spend Managed"
  },
  {
    title: "Rapid Implementation",
    icon: <FaRocket className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Get your campaigns live within 48 hours, not weeks.",
    backDesc: "Fast-track setup process with immediate optimization and performance monitoring from day one.",
    metric: "48 Hour Launch"
  },
  {
    title: "24/7 Optimization",
    icon: <FaClock className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Continuous campaign monitoring and real-time optimization.",
    backDesc: "AI-powered tools and manual oversight ensure peak performance around the clock.",
    metric: "24/7 Monitoring"
  },
  {
    title: "Dedicated Support",
    icon: <FaUsers className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Direct access to your dedicated marketing strategist and support team.",
    backDesc: "No call centers or ticket systems - speak directly with the experts managing your campaigns.",
    metric: "Direct Expert Access"
  },
  {
    title: "Risk-Free Guarantee",
    icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "30-day money-back guarantee if you're not satisfied with results.",
    backDesc: "We're so confident in our results, we offer a full refund if you don't see improvement in 30 days.",
    metric: "30-Day Guarantee"
  },
];

const WhyChooseUs = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [inView]);

  return (
    <section
      ref={ref}
      id="why-choose-us"
      className="py-16 px-6 md:px-12 bg-white max-w-7xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-blue-900 mb-6"
      >
        Why Choose LotsEye for Your Digital Marketing?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto"
      >
        We don't just promise results - we deliver them. Here's what sets us apart from other digital marketing agencies
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {features.map((feature, i) => (
          <FlipCard key={i} feature={feature} inView={inView} index={i} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ feature, inView, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-80 cursor-pointer group"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-blue-50 rounded-xl shadow-lg hover:shadow-xl flex flex-col justify-center items-center p-6 backface-hidden border border-blue-100 group-hover:border-blue-300 transition-all duration-300">
          {feature.icon}
          <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">
            {feature.title}
          </h3>
          <p className="text-gray-700 text-center text-sm leading-relaxed mb-4">{feature.frontDesc}</p>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
            {feature.metric}
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-800 via-blue-900 to-purple-900 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 text-white rotate-y-180 backface-hidden">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
          <p className="text-center text-sm leading-relaxed mb-4 text-blue-100">{feature.backDesc}</p>
          <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
            {feature.metric}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;