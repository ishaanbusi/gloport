import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const navigation = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Solution", href: "services" },
    { name: "Mission", href: "mission" },
    { name: "Innovation", href: "innovation" },
    { name: "Why Us", href: "why-us" },
    { name: "Testimonial", href: "testimonial" },
    { name: "Team", href: "team" },
    { name: "Contact Us", href: "contact-us" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-center items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Logo Image */}
              <img
                src="https://i.postimg.cc/HLc0R246/Whats-App-Image-2025-03-06-at-19-24-01-removebg-preview.png"
                alt="Logo"
                className="h-10 w-auto sm:h-45 mr-2"
              />
              {/* Logo Text */}
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === item.href
                    ? "text-gray-700 bg-[#00ffdf50]"
                    : "text-gray-700 hover:text-[#00ffdf] hover:bg-gray-50"
                }`}
                onClick={() => {
                  setActiveTab(item.href);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className={`block px-3 py-2 text-base font-medium ${
                  activeTab === item.href
                    ? "text-[#00ffdf] bg-[#00ffdf50]"
                    : "text-gray-700 hover:text-[#00ffdf] hover:bg-gray-50"
                }`}
                onClick={() => {
                  setActiveTab(item.href);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
