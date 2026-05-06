import { FaSearch, FaShoppingBag } from "react-icons/fa"
import HeroImage from "../public/Hero.png"
import { useState, useEffect } from "react"

export default function App() {
  const [selectedSize, setSelectedSize] = useState<null | string>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <section className="w-full font-sans min-h-screen h-auto bg-linear-to-br from-[#0a1f3d] via-[#1e3a5f] to-[#3d5a7f] text-white relative overflow-x-hidden">
      
      {/* Animated decorative orbs - responsive scaling */}
      <div className="absolute right-1/2 top-1/2 w-64 h-64 md:w-96 md:h-96 lg:w-125 lg:h-125 bg-blue-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

      {/* Floating animated orbs - responsive positioning */}
      <div className="absolute left-10 top-10 md:left-20 md:top-20 w-20 h-20 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute right-16 bottom-16 md:right-32 md:bottom-32 w-24 h-24 md:w-40 md:h-40 bg-cyan-500/20 rounded-full blur-2xl animate-float animation-delay-2000"></div>
      
      {/* Mobile menu button - visible only on mobile */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Vertical text on the left side - responsive sizing */}
      <div className="absolute left-2 md:left-4 lg:left-8 top-0 bottom-0 flex items-center gap-2 md:gap-4 lg:gap-6 z-10 animate-slideInLeft">
        {/* Animated Dots - responsive spacing */}
        <div className="flex flex-col justify-center gap-8 md:gap-16 lg:gap-24 text-xl md:text-2xl lg:text-3xl font-light">
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

        {/* Vertical Text - responsive font size */}
        <div className="text-4xl md:text-5xl lg:text-[77px] font-bold tracking-[0.15em] md:tracking-[0.25em] lg:tracking-[0.35em] flex group cursor-default">
          <span className="[writing-mode:vertical-rl] rotate-180 text-white transition-all duration-500 group-hover:scale-110 group-hover:text-blue-300">
            PRECISION
          </span>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative min-h-screen flex flex-col">
        
        {/* Navigation - responsive padding and width */}
        <nav className="hidden lg:flex px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 items-center justify-between w-[90%] md:w-[85%] lg:w-[78%] max-w-7xl mx-auto relative z-20 animate-slideDown">
          <div className="flex gap-6 md:gap-8 lg:gap-10 items-center text-xs md:text-sm tracking-wide font-medium">
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

          <div className="flex gap-6 md:gap-8 lg:gap-8 items-center text-xs md:text-sm font-medium">
            <button className="flex items-center cursor-pointer gap-1 md:gap-2 group">
              <FaSearch className="text-xs md:text-sm transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300" />
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Search</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:text-blue-300">Search</span>
              </span>
            </button>
            <button className="flex cursor-pointer items-center gap-4 md:gap-6 lg:gap-10 group">
              <span className="relative overflow-hidden hidden sm:inline-block">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">MyAccount</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:text-blue-300">MyAccount</span>
              </span>
              <span className="sm:hidden">Account</span>
              <FaShoppingBag className="text-xs md:text-sm transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300 group-hover:rotate-12" size={16} />
            </button>
          </div>
        </nav>

        {/* Hero Image - responsive sizing and positioning */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-1000 w-full px-4 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src={HeroImage}
            alt="Model in blue jacket"
            className="h-64 md:h-96 lg:h-120 xl:h-150 w-auto object-cover mx-auto hover:scale-105 transition-transform duration-700 cursor-pointer"
          />
        </div>

        {/* Credits section - responsive positioning and text size */}
        <div className="absolute left-4 md:left-8 lg:left-50 bottom-32 md:bottom-auto md:top-[45%] md:-translate-y-1/2 text-left z-10 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-[10px] md:text-xs font-bold mb-2 md:mb-3 tracking-wider relative group cursor-default">
            <span className="relative inline-block">
              CREDITS
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-300 transition-all duration-500 group-hover:w-full"></span>
            </span>
          </h3>
          <div className="text-[11px] md:text-[13px] lg:text-[15px] text-white space-y-1 leading-relaxed max-w-[180px] md:max-w-none">
            {["Subject: @dotcom_programming_limited", "Subject: @dls_design_"].map((text, i) => (
              <p
                key={i}
                className="hover:text-blue-300 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform text-white/80 md:text-white"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Product Details - responsive positioning and spacing */}
        <div className="absolute right-4 md:right-8 lg:right-16 top-auto bottom-8 md:top-1/2 md:-translate-y-1/2 space-y-4 md:space-y-6 z-10 animate-slideInRight bg-linear-to-br from-white/5 to-transparent backdrop-blur-sm p-4 md:p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0 w-[calc(100%-2rem)] md:w-auto">
          {/* ID and Price */}
          <div className="space-y-1 md:space-y-2 group">
            <p className="text-[10px] md:text-xs text-white/60 transition-all duration-300 group-hover:text-blue-300">ID: 30-80-627</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300 transform origin-left inline-block">$750</p>
              <p className="text-xs md:text-sm text-white/40 line-through">$899</p>
              <span className="text-[10px] md:text-xs bg-green-500/20 text-green-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">-17%</span>
            </div>
          </div>

          {/* Color with hover effect */}
          <div className="space-y-1 md:space-y-2 group cursor-pointer">
            <p className="text-[10px] md:text-xs text-white/60 transition-all duration-300 group-hover:text-blue-300">Colour:</p>
            <div className="flex flex-wrap gap-2">
              {['Purple/Neon', 'Black/Gold', 'White/Silver'].map((color, i) => (
                <div key={i} className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs border transition-all duration-300 cursor-pointer hover:scale-105 ${color === 'Purple/Neon' ? 'border-purple-400 bg-purple-400/20' : 'border-white/30 hover:border-white/60'}`}>
                  {color}
                </div>
              ))}
            </div>
          </div>

          {/* Style with hover effect */}
          <div className="space-y-1 md:space-y-2 group cursor-pointer">
            <p className="text-[10px] md:text-xs text-white/60 transition-all duration-300 group-hover:text-blue-300">Style:</p>
            <p className="text-xs md:text-sm font-medium relative inline-block px-3 md:px-4 py-1 md:py-2 bg-white/10 rounded-lg backdrop-blur-sm">
              Hand Knit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* Size selector with animations */}
          <div className="space-y-2 md:space-y-3">
            <p className="text-[10px] md:text-xs text-white/60">Size:</p>
            <div className="flex gap-2 md:gap-3">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 md:w-10 md:h-10 border-2 rounded-full transition-all duration-300 text-xs md:text-sm font-medium transform hover:scale-110 ${
                    selectedSize === size
                      ? 'bg-linear-to-r from-blue-500 to-purple-500 border-transparent scale-110 shadow-lg shadow-blue-500/50'
                      : 'border-white/30 hover:border-blue-300 hover:bg-white/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart button - visible on mobile */}
          <button className="w-full md:hidden py-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 group text-sm">
            <span>Add to Cart</span>
            <FaShoppingBag className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Privacy link with hover animation */}
          <a
            href="#"
            className="text-[10px] md:text-xs text-white/60 hover:text-white/90 transition-all duration-300 inline-block group text-center w-full"
          >
            <span className="relative inline-block">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        </div>

        {/* Social links - responsive positioning and text size */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:absolute md:bottom-8 md:left-50 md:translate-x-0 flex gap-4 md:gap-6 lg:gap-8 text-[10px] md:text-xs tracking-widest font-medium z-10 bg-white/5 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href="#"
              className="relative group overflow-hidden animate-slideUp whitespace-nowrap"
              style={{ animationDelay: `${i * 0.1}s` }}
              aria-label={link.platform}
            >
              <span className="inline-block transition-all duration-300 group-hover:-translate-y-full group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-300 group-hover:to-purple-300">
                {link.label}
              </span>
              <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-300 group-hover:to-purple-300">
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
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards;
            transform: translateY(0) !important;
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          body {
            -webkit-tap-highlight-color: transparent;
          }
          
          button, a {
            cursor: default;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 768px) and (max-width: 1023px) {
          .product-details {
            background: linear-linear(to bottom right, rgba(255,255,255,0.05), transparent);
          }
        }
      `}</style>
    </section>
  )
}