import { useState } from "react";
import logo from "../assets/logo.png";
import footerbg from "../assets/footerBg.png";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaArrowRight, 
  FaEnvelope, 
  FaPhone, 
  FaPaperPlane 
} from "react-icons/fa";

function Footer() {
  // Dynamic social media links with exact styling from original
  const socialLinks = [
    { 
      icon: FaFacebookF, 
      href: "https://facebook.com", 
      className: "text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] font-semibold mr-1 flex items-center justify-center"
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com", 
      className: "text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] font-semibold mr-1 flex items-center justify-center"
    },
    { 
      icon: FaInstagram, 
      href: "https://instagram.com", 
      className: "text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] font-semibold mr-1 flex items-center justify-center"
    }
  ];

  // Dynamic quick links
  const quickLinks = [
    "Customer Spotlight",
    "Customer Service", 
    "Marketing",
    "FAQ"
  ];

  // Dynamic company links
  const companyLinks = [
    "About Us",
    "Services",
    "Contact"
  ];

  return (
    <section className="max-w-[1320px] mx-auto">
      <footer
        className="bg-cover bg-center text-[20px] text-gray-100 p-[50px] pb-[25px] w-full rounded-[40px] mt-[32%] shadow-2xl"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <a href="#">
              <img
                src={logo}
                alt="Lotseye Logo"
                className="w-28 mb-4 bg-white rounded-[30px]"
              />
            </a>
            <p className="text-sm text-gray-400 text-[16px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#4E47E5] font-semibold mr-1">
                LOTS EYE
              </span>
              elevates your digital presence.
            </p>
            <div className="flex gap-4 mt-[19px]">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={social.className}
                  >
                    <IconComponent className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-white tracking-wider text-[22px] mb-3 relative pb-[5px]">
              QUICK LINKS
              <span className="absolute w-[20%] left-0 h-[4px] rounded bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] bottom-0 z-50"></span>
            </h3>
            <ul className="space-y-2 text-sm text-[15px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-gray-300 hover:tracking-wider group duration-[0.2s]"
                  >
                    <FaArrowRight className="inline-block text-[#3B82F6] text-[14px] mr-[-10px] translate-x-[-10px] invisible group-hover:mr-[5px] duration-[0.2s] opacity-0 group-hover:opacity-100 group-hover:translate-x-[0px] group-hover:visible align-middle" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white tracking-wider text-[22px] mb-3 relative pb-[5px]">
              COMPANY
              <span className="absolute w-[20%] left-0 h-[4px] rounded bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] bottom-0 z-50"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-gray-300 hover:tracking-wider group duration-[0.2s]"
                  >
                    <FaArrowRight className="inline-block text-[#3B82F6] text-[14px] mr-[-10px] translate-x-[-10px] invisible group-hover:mr-[5px] duration-[0.2s] opacity-0 group-hover:opacity-100 group-hover:translate-x-[0px] group-hover:visible align-middle" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-white tracking-wider text-[22px] pb-[5px] mb-3 relative">
              CONTACT
              <span className="absolute w-[20%] left-0 h-[4px] rounded bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] bottom-0 z-50"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ayushiparmar9997@gmail.com"
                  className="hover:text-gray-500 text-gray-300 hover:tracking-wider group duration-[0.2s]"
                >
                  <FaEnvelope className="inline-block text-[#3B82F6] text-[14px] mr-[10px] duration-[0.2s] align-middle" />
                  ayushiparmar9997@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+916353292499"
                  className="hover:text-gray-500 text-gray-300 hover:tracking-wider group duration-[0.2s]"
                >
                  <FaPhone className="inline-block text-[#3B82F6] text-[14px] mr-[10px] duration-[0.2s] align-middle" />
                  +91 6353292499
                </a>
              </li>
              <li>
                <div className="max-w-md mx-auto mt-5">
                  <div className="flex items-center overflow-hidden rounded-full bg-white shadow-lg">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-gray-800 focus:outline-none"
                    />
                    <a
                      href="#"
                      type="submit"
                      className="bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] text-white px-5 py-3"
                    >
                      <FaPaperPlane className="inline-block text-[16px]" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-sm text-gray-400 pt-[25px] border-t-[1px] border-white/20">
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#4E47E5] font-semibold mr-1">
            Lotseye
          </span>
          . Empowering Brand's Online.
        </div>
      </footer>
    </section>
  );
}

export default Footer;