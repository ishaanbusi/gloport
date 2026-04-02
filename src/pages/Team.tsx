import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const team = [
  {
    name: "Alok Verma",
    role: "CEO",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
    bio: "Over 15 years of experience in technology and business leadership.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Abhijeet Thakur",
    role: "CTO",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
    bio: "Expert in cloud architecture and digital transformation.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sanjay Singh",
    role: "COO",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
    bio: "Passionate about creating beautiful and intuitive user experiences.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jayesh",
    role: "Hardware Engineer",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
    bio: "Full-stack developer with expertise in modern web technologies.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function Team() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect for the hero section
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
              We're proud of our diverse team and their deep industry expertise.
            </p>
          </Fade>
        </div>
      </section>

      {/* Interactive Team Grid */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 150}
                key={member.name}
                distance="30px"
              >
                <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold tracking-widest text-[#3bd6c6] uppercase mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4 pt-4 border-t border-slate-100 mt-auto">
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
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-white bg-slate-900 hover:bg-[#3bd6c6] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
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
