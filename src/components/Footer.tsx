import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-[#00ffdf]">Gloport Photon<span className="text-red-500">i</span>x Private Limited</span>
            <p className="mt-4 text-gray-600 max-w-md">
              Empowering businesses with innovative solutions. We're committed to delivering
              excellence and driving success through technology and expertise.
            </p>
          </div>
          
          
          <div>
          <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {['Home', 'About', 'Services','Team','Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-500 hover:text-indigo-600"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gloport Photonix Innovations Pvt Ltd | © 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}