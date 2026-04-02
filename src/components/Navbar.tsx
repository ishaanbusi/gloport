import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent-to-solid transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solution", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/career" },
    { name: "News", href: "/news" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src="https://i.postimg.cc/HLc0R246/Whats-App-Image-2025-03-06-at-19-24-01-removebg-preview.png"
                alt="Gloport Photonix Logo"
                className="h-10 w-auto mr-2 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative group px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-slate-700 hover:text-[#3bd6c6]"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {/* Animated Underline */}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#3bd6c6] transform origin-left transition-transform duration-300 ease-out ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Distinct CTA Button */}
            <NavLink
              to="/contact-us"
              className={`ml-4 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-[#3bd6c6] text-white hover:bg-[#2bbbb0]"
                  : "bg-white text-slate-900 hover:bg-slate-50"
              }`}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                isScrolled
                  ? "text-slate-700 hover:text-[#3bd6c6] hover:bg-slate-100"
                  : "text-white hover:text-[#3bd6c6] hover:bg-white/10"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated Dropdown) */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#3bd6c6] bg-[#3bd6c6]/10"
                    : "text-slate-600 hover:text-[#3bd6c6] hover:bg-slate-50"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="pt-4 pb-2">
            <NavLink
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-[#3bd6c6] hover:bg-[#2bbbb0] transition-colors shadow-sm"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
