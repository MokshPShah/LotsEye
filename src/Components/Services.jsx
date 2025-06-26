import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBullhorn, 
  FaChartLine, 
  FaMobileAlt, 
  FaSearch, 
  FaEnvelope, 
  FaShareAlt 
} from "react-icons/fa";

const services = [
  {
    title: "PPC Advertising",
    icon: <FaBullhorn className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "High-converting Google Ads & Facebook campaigns that maximize ROI.",
    backDesc: "Strategic ad management with A/B testing, keyword optimization, and conversion tracking for maximum profitability.",
    metrics: "Average 300% ROI increase"
  },
  {
    title: "SEO & Content Marketing",
    icon: <FaSearch className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Dominate search results with data-driven SEO strategies.",
    backDesc: "Complete SEO audits, keyword research, content optimization, and link building to boost organic traffic and rankings.",
    metrics: "Average 250% traffic growth"
  },
  {
    title: "Social Media Marketing",
    icon: <FaShareAlt className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Build engaged communities and drive sales through social media.",
    backDesc: "Strategic social media management, influencer partnerships, and viral content creation across all major platforms.",
    metrics: "Average 400% engagement boost"
  },
  {
    title: "Email Marketing",
    icon: <FaEnvelope className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Nurture leads and boost customer lifetime value with email automation.",
    backDesc: "Advanced email sequences, segmentation, personalization, and automation to convert prospects into loyal customers.",
    metrics: "Average 45% open rates"
  },
  {
    title: "Analytics & Reporting",
    icon: <FaChartLine className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Make data-driven decisions with comprehensive analytics tracking.",
    backDesc: "Custom dashboards, conversion tracking, attribution modeling, and detailed ROI reporting for all marketing channels.",
    metrics: "Real-time performance insights"
  },
  {
    title: "Mobile & App Marketing",
    icon: <FaMobileAlt className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Capture mobile audiences with optimized mobile marketing strategies.",
    backDesc: "Mobile-first campaigns, app store optimization, push notifications, and location-based marketing for maximum mobile engagement.",
    metrics: "Average 60% mobile conversion rate"
  },
];

const CoreServices = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

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
      id="services"
      className="py-16 px-6 md:px-12 bg-blue-50 text-center max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-blue-900 mb-6"
      >
        Our Digital Marketing Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto"
      >
        Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your return on investment
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} inView={inView} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service, inView }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-80 cursor-pointer group"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col justify-center items-center p-6 backface-hidden border border-gray-100 group-hover:border-blue-200 transition-all duration-300">
          {service.icon}
          <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">
            {service.title}
          </h3>
          <p className="text-gray-700 text-center text-sm leading-relaxed mb-4">{service.frontDesc}</p>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
            {service.metrics}
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-700 via-blue-800 to-purple-800 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 text-white rotate-y-180 backface-hidden">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
          <p className="text-center text-sm leading-relaxed mb-4 text-blue-100">{service.backDesc}</p>
          <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
            {service.metrics}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoreServices;