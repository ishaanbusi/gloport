import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block group">
              <span className="text-3xl font-bold text-white tracking-tight">
                Gloport Photon
                <span className="text-red-500 font-medium">i</span>x
              </span>
            </Link>
            <p className="mt-6 text-slate-400 font-light leading-relaxed max-w-md">
              Empowering healthcare and businesses with innovative deep-tech
              solutions. We are committed to delivering excellence and driving
              diagnostic success through advanced photonics.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold text-[#3bd6c6] tracking-widest uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Solution", href: "/services" },
                { name: "Team", href: "/team" },
                { name: "Contact Us", href: "/contact-us" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <Link
                    to={href}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300 w-fit"
                  >
                    {/* Animated line indicator on hover */}
                    <span className="w-0 h-[1px] bg-[#3bd6c6] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300 ease-out"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-bold text-[#3bd6c6] tracking-widest uppercase mb-6">
              Connect With Us
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-3 mb-8">
              {[
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61571180518799",
                },
                { Icon: X, label: "X", href: "https://x.com/GloportPhotonix" },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com/_gloport_photonix_",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/gloport-photonix/",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#3bd6c6] hover:border-[#3bd6c6] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,214,198,0.4)]"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Linktree Button */}
            <a
              href="https://linktr.ee/GloportPhotonix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 hover:text-white hover:border-[#3bd6c6] hover:bg-[#3bd6c6]/10 transition-all duration-300 group w-fit"
            >
              <span>Explore Linktree</span>
              <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-[#3bd6c6] transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-light text-center md:text-left">
            © {currentYear} Gloport Photonix Innovations Pvt Ltd. All Rights
            Reserved.
          </p>

          {/* Optional Legal Links - Adds a premium, complete feel */}
          <div className="flex space-x-6 text-sm font-light text-slate-500">
            <Link to="#" className="hover:text-[#3bd6c6] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-[#3bd6c6] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
