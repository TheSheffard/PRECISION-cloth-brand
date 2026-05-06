import { FaSearch, FaShoppingBag } from "react-icons/fa"
import HeroImage from "../public/Hero.png"
import { useState, useEffect } from "react"

export default function App() {
  const [selectedSize, setSelectedSize] = useState<null | string>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  const navLinks = ["Men", "Women", "Customise"]
  const socialLinks = [
    { label: "IN", platform: "Instagram" },
    { label: "TW", platform: "Twitter" },
    { label: "YT", platform: "YouTube" },
    { label: "OS", platform: "Other" }
  ]

  useEffect(() => {
    setImageLoaded(true)
  }, [])

  return (
    <section className="w-full font-sans h-screen bg-linear-to-br from-[#0a1f3d] via-[#1e3a5f] to-[#3d5a7f] text-white relative overflow-hidden">

      {/* Animated decorative orbs */}
      <div className="absolute right-1/2 top-1/2 w-125 h-125 bg-blue-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

      {/* Floating animated orbs */}
      <div className="absolute left-20 top-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute right-32 bottom-32 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-float animation-delay-2000"></div>

      {/* Vertical text on the left side with fade-in animation */}
      <div className="absolute left-8 top-0 bottom-0 flex items-center gap-6 z-10 animate-slideInLeft">
        {/* Animated Dots with stagger */}
        <div className="flex flex-col justify-center gap-24 text-3xl font-light">
          {Array(5).fill("O").map((_, i) => (
            <span
              key={i}
              className="block leading-none text-white/40 animate-bounce-subtle"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              O
            </span>
          ))}
        </div>

        {/* Vertical Text with hover scale */}
        <div className="text-[77px] font-bold tracking-[0.35em] flex group cursor-default">
          <span className="[writing-mode:vertical-rl] rotate-180 text-white transition-all duration-500 group-hover:scale-110 group-hover:text-blue-300">
            PRECISION
          </span>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative h-full flex flex-col">

        <nav className="flex px-12 py-8 items-center justify-between w-[78%] max-w-7xl mx-auto relative z-20 animate-slideDown">
          <div className="flex gap-10 items-center text-sm tracking-wide font-medium">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="relative group overflow-hidden"
              >
                <span className="hover:text-blue-300 transition-colors duration-300 inline-block">
                  {link}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex gap-8 items-center text-sm font-medium">
            <button className="flex items-center cursor-pointer gap-2 group">
              <FaSearch className="text-sm transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300" />
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Search</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:text-blue-300">Search</span>
              </span>
            </button>
            <button className="flex  cursor-pointer items-center gap-10 group">
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">MyAccount</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:text-blue-300">MyAccount</span>
              </span>
              <FaShoppingBag className="text-sm transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300 group-hover:rotate-12" size={18} />
            </button>
          </div>
        </nav>

        {/* Hero Image with fade-in and scale animation */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src={HeroImage}
            alt="Model in blue jacket"
            className="h-150 w-auto object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
          />
        </div>

        {/* Credits section with fade-in animation */}
        <div className="absolute left-50 top-[45%] -translate-y-1/2 text-left z-10 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xs font-bold mb-3 tracking-wider relative group cursor-default">
            <span className="relative inline-block">
              CREDITS
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-300 transition-all duration-500 group-hover:w-full"></span>
            </span>
          </h3>
          <div className="text-[15px] text-white space-y-1 leading-relaxed">
            {["Subject: @dotcom_programming_limited", "Subject: @dls_design_"].map((text, i) => (
              <p
                key={i}
                className="hover:text-blue-300 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Product Details with slide-in animation */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 space-y-6 z-10 animate-slideInRight">
          {/* ID and Price */}
          <div className="space-y-2 group">
            <p className="text-xs text-white/60 transition-all duration-300 group-hover:text-blue-300">ID: 30-80-627</p>
            <p className="text-5xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300 transform origin-left inline-block">$750</p>
          </div>

          {/* Color with hover effect */}
          <div className="space-y-2 group cursor-pointer">
            <p className="text-xs text-white/60 transition-all duration-300 group-hover:text-blue-300">Colour:</p>
            <p className="text-sm font-medium relative inline-block">
              Purple/Neon
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* Style with hover effect */}
          <div className="space-y-2 group cursor-pointer">
            <p className="text-xs text-white/60 transition-all duration-300 group-hover:text-blue-300">Style:</p>
            <p className="text-sm font-medium relative inline-block">
              Hand Knit
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* Size selector with animations */}
          <div className="space-y-3">
            <p className="text-xs text-white/60">Size:</p>
            <div className="flex gap-3">
              {['S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 border rounded transition-all duration-300 text-sm font-medium transform hover:scale-110 hover:border-blue-300 hover:text-blue-300 ${selectedSize === size
                      ? 'bg-white text-blue-950 border-white scale-110 shadow-lg'
                      : 'border-white/30 hover:bg-white/10'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Privacy link with hover animation */}
          <a
            href="#"
            className="text-xs text-white/60 hover:text-white/90 transition-all duration-300 inline-block group"
          >
            <span className="relative inline-block">
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        </div>

        {/* Social links with stagger animation */}
        <div className="absolute bottom-8 left-50 flex gap-8 text-xs tracking-widest font-medium z-10 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href="#"
              className="relative group overflow-hidden animate-slideUp"
              style={{ animationDelay: `${i * 0.1}s` }}
              aria-label={link.platform}
            >
              <span className="inline-block transition-all duration-300 group-hover:-translate-y-full group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300">
                {link.label}
              </span>
              <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>

      </div>

      {/* Add custom animations to your CSS */}
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
       
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}