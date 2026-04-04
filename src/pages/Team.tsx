import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

// Team sequenced: Abhijeet, Sanjay, Varun, Bushra, Dr. Khalid
const team = [
  {
    name: "MR. ABHIJEET THAKUR",
    role: "FOUNDER & CEO",
    image: "https://i.postimg.cc/fRVGPkr7/PHOTO-2019-07-24-10-01-41-jpg.jpg",
    bio: "With a career spanning over 28 years, Abhijeet has excelled across diverse sectors, including IT, Banking, Cloud, AI, Insurance, Electronics, and Electric Vehicle (EV) subsystems.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "MR. SANJAY SINGH",
    role: "FOUNDER & CBO",
    image:
      "https://i.postimg.cc/LXVm1G7b/Whats-App-Image-2025-03-04-at-23-07-35.jpg",
    bio: "He is a seasoned leader with over 27 years of experience in business development, strategic marketing, and operational growth across India & abroad.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "DR. VARUN JEOTI",
    role: "CO-FOUNDER & CTO",
    image: "https://i.postimg.cc/bw5YrmtD/DMC8618.jpg",
    bio: "Experience over 45 years as an applied physicist and translational technologist, specializing in biosensor innovation and photonics-enabled diagnostics, with leadership roles across Europe and Asia.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "MRS. BUSHRA KHAN",
    role: "FOUNDER & CFO",
    image:
      "https://i.postimg.cc/52gp47X2/Whats-App-Image-2025-01-01-at-15-02-37-1.jpg",
    bio: "With over 12 years of distinguished experience in financial management, she has established herself as a powerhouse in financial strategy, investment control, and operational excellence.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "DR. KHALID KHAN",
    role: "FOUNDER & CHAIRMAN",
    image:
      "https://i.postimg.cc/W1TXPLby/Whats-App-Image-2025-01-01-at-15-02-37.jpg",
    bio: "Dr. Khalid Khan is a reputed entrepreneur & philanthropist with over four decades of experience creating value across India & abroad. He is Founder & Chairman of the Gloport group of companies.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function Team() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white overflow-hidden font-sans text-slate-800">
      {/* Interactive Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-slate-900 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team Collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-white"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-4">
              The Minds Behind the Magic
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-lg">
              Meet Our <span className="text-[#3bd6c6]">Team</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Get to know the talented individuals who make our company great.
              We're proud of our diverse leadership team and their deep industry
              expertise.
            </p>
          </Fade>
        </div>
      </section>

      {/* Executive Team Grid - Properly Wrapped for Side-by-Side Flexbox */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flexbox container for side-by-side alignment */}
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, idx) => (
              /* Structural Wrapper - This forces the cards into columns */
              <div
                key={member.name}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[380px]"
              >
                {/* Animation Wrapper */}
                <Fade bottom duration={800} delay={idx * 150} distance="30px">
                  {/* Card Content */}
                  <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full text-center">
                    {/* Fixed Size Circular Image */}
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-slate-50 shadow-md flex-shrink-0 relative">
                      <img
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out object-top"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold tracking-widest text-[#3bd6c6] uppercase mb-4">
                        {member.role}
                      </p>

                      <p className="text-slate-500 font-light text-sm leading-relaxed mb-8 flex-grow">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-5 pt-6 border-t border-slate-100 mt-auto">
                        <a
                          href={member.social.twitter}
                          className="text-slate-400 hover:text-[#3bd6c6] hover:-translate-y-1 transition-all duration-300"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="text-slate-400 hover:text-[#3bd6c6] hover:-translate-y-1 transition-all duration-300"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.github}
                          className="text-slate-400 hover:text-[#3bd6c6] hover:-translate-y-1 transition-all duration-300"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="py-24 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Want to build the future with us?
            </h2>
            <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
              We are always looking for passionate innovators, engineers, and
              visionaries to join our growing team. Explore our open positions
              and make an impact.
            </p>
            <Link
              to="/career"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-white bg-slate-900 hover:bg-[#3bd6c6] transition-all duration-300 shadow-[0_0_20px_rgba(59,214,198,0.3)] hover:shadow-[0_0_30px_rgba(59,214,198,0.5)] hover:-translate-y-1 group"
            >
              View Open Careers
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}
