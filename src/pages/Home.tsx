import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Zap,
  MapPin,
  Mail,
  Stethoscope,
  ArrowLeft,
  ArrowUp,
  Phone,
  CheckCircle2,
  Copy,
} from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
import Career from "./Career";
import Wave from "../components/Wave.tsx";

export default function Home() {
  // --- Interactive States ---
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [copiedStatus, setCopiedStatus] = useState("");

  // Parallax Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Interactive Copy to Clipboard
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(type);
    setTimeout(() => setCopiedStatus(""), 2000);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: (
      <button className="absolute -left-4 z-20 p-2 text-slate-400 hover:text-[#3bd6c6] transition-colors duration-300">
        <ArrowLeft className="h-6 w-6" />
      </button>
    ),
    nextArrow: (
      <button className="absolute -right-4 z-20 p-2 text-slate-400 hover:text-[#3bd6c6] transition-colors duration-300">
        <ArrowRight className="h-6 w-6" />
      </button>
    ),
  };

  const whyUsTabs = [
    {
      title: "Precision",
      desc: "Our devices deliver industry-leading accuracy in detecting even the smallest trace of disease markers, ensuring early and reliable diagnosis.",
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Scalability",
      desc: "From major healthcare institutions to rural clinics, our architecture is built to adapt everywhere without compromising on performance.",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Global Reach",
      desc: "Committed to making cutting-edge diagnostic technology accessible worldwide, breaking down geographical barriers in healthcare.",
      img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="bg-white overflow-hidden font-sans text-slate-800 selection:bg-[#3bd6c6] selection:text-white">
      {/* Interactive Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-900 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <video
            className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
            src="/videos/hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] drop-shadow-2xl">
              Revolutionizing Healthcare through{" "}
              <span className="text-[#3bd6c6] relative inline-block group">
                Photonics
                {/* Interactive underline */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#3bd6c6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
              At Gloport Photon
              <span className="text-red-500 font-medium">i</span>x, we create
              cutting-edge solutions empowering early disease detection and
              driving diagnostic innovation.
            </p>

            <div className="mt-10">
              <a
                href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-white bg-[#3bd6c6] overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(59,214,198,0.3)] hover:shadow-[0_0_40px_rgba(59,214,198,0.6)] hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative z-10 flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </Fade>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300 group">
            <span className="text-xs uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Scroll
            </span>
            <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#3bd6c6] animate-[scrolldown_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Fade left duration={800} distance="30px">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-[#3bd6c6]"></div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6]">
                    About Us
                  </h2>
                </div>
                <h3 className="text-3xl sm:text-4xl font-light text-slate-900 leading-tight mb-6">
                  Pioneering the Future of <br />
                  <span className="font-bold">Medical Diagnostics</span>
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
                  Gloport Photon
                  <span className="text-red-500 font-medium">i</span>x is a
                  deep-tech company developing advanced life science solutions
                  using photonics. Our mission is to transform the global
                  healthcare landscape by enabling early-stage disease
                  detection, particularly in cancer diagnostics.
                </p>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Our technologies are designed to be non-invasive, highly
                  accurate, and accessible, ensuring we meet the evolving needs
                  of healthcare professionals and patients worldwide.
                </p>
              </div>
            </Fade>
            <Fade right duration={800} distance="30px">
              <div className="relative group">
                {/* Decorative blob behind image */}
                <div className="absolute -inset-4 bg-[#3bd6c6]/10 rounded-[3rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 -z-10"></div>
                <img
                  src="https://i.postimg.cc/6p34wgKq/3.jpg"
                  alt="Gloport Photonix Lab"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Solutions Overview - Interactive Cards */}
      <section
        id="services"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3bd6c6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Fade bottom duration={800} distance="30px">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                Our Solutions
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Innovative Early Detection
              </h3>
              <p className="text-lg text-slate-500 font-light">
                Our flagship product leverages photoacoustic technology in
                exhaled breath with unmatched sensitivity.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Non-Invasive Testing",
                desc: "Accurate results without the need for invasive, painful procedures.",
              },
              {
                icon: Zap,
                title: "Real-Time Diagnostics",
                desc: "Multi-wavelength lasers deliver instant, highly actionable insights.",
              },
              {
                icon: MapPin,
                title: "Scalable Deployment",
                desc: "Built to serve sprawling hospitals and remote facilities alike.",
              },
            ].map((feature, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 150}
                key={idx}
                distance="30px"
              >
                <div className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#3bd6c6]/10 hover:-translate-y-2 transition-all duration-500 cursor-default">
                  {/* Hover gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#3bd6c6]/20 transition-colors duration-500"></div>

                  <div className="w-14 h-14 bg-slate-50 group-hover:bg-[#3bd6c6] rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                    <feature.icon className="h-7 w-7 text-[#3bd6c6] group-hover:text-white transition-colors duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#3bd6c6] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Why Choose Us */}
      <section id="why-us" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Fade left duration={800} distance="30px">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                  Why Choose <br />
                  <span className="text-[#3bd6c6]">
                    Gloport Photon
                    <span className="text-red-500 font-medium">i</span>x?
                  </span>
                </h2>

                {/* Interactive Tabs */}
                <div className="mt-10 flex flex-col gap-4">
                  {whyUsTabs.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                        activeTab === idx
                          ? "bg-slate-800 border-[#3bd6c6]/30 shadow-[0_0_15px_rgba(59,214,198,0.1)]"
                          : "bg-transparent border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
                      }`}
                    >
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors ${activeTab === idx ? "text-[#3bd6c6]" : "text-white"}`}
                      >
                        {tab.title}
                      </h3>
                      {/* Smooth expand/collapse using CSS max-height */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <p className="text-slate-400 font-light mt-2">
                          {tab.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Fade>

            <Fade right duration={800} distance="30px">
              {/* Image changing based on tab selection */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {whyUsTabs.map((tab, idx) => (
                  <img
                    key={idx}
                    src={tab.img}
                    alt={tab.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      activeTab === idx
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Fade left duration={800} distance="30px">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6 -z-10"></div>
                <img
                  src="https://i.postimg.cc/L5YMTwPg/4.jpg"
                  alt="Our Mission"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Fade>
            <Fade right duration={800} distance="30px">
              <div className="order-1 lg:order-2">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                  Our Purpose
                </h2>
                <h3 className="text-3xl sm:text-4xl font-light text-slate-900 leading-tight mb-6">
                  Building a Future of <br />
                  <span className="font-bold">Early Detection</span>
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                  Through continuous research and technological advancement, we
                  are committed to making early-stage disease detection the
                  norm, not the exception, across diverse populations.
                </p>
                <Wave />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonial" className="py-24 bg-[#3bd6c6]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center cursor-grab active:cursor-grabbing">
          <Fade bottom duration={800} distance="30px">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-12">
              Partner Insights
            </h2>
            <div className="px-8">
              <Slider {...sliderSettings}>
                {[
                  {
                    quote:
                      "Gloport Photonix is on the cutting edge of healthcare innovation. Their focus on early detection technologies will change the way we diagnose and treat diseases.",
                    author: "Dr. A. Sharma, Chief Medical Officer",
                  },
                  {
                    quote:
                      "The technology developed by Gloport Photonix has transformed our approach to diagnostics. It's a massive leap forward in patient care.",
                    author: "Dr. D K Thakur",
                  },
                  {
                    quote:
                      "Their commitment to early detection is truly commendable and highly impactful for the medical community.",
                    author: "Dr. Pavan Kumar",
                  },
                ].map((testimonial, idx) => (
                  <div key={idx} className="focus:outline-none py-8">
                    <p className="text-2xl sm:text-3xl font-light text-slate-800 leading-relaxed italic mb-8">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm font-bold tracking-wide text-[#3bd6c6] uppercase">
                      — {testimonial.author}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </Fade>
        </div>
      </section>

      {/* Team Section - Interactive Reveal Cards */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                Leadership
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Meet the Experts
              </h3>
            </div>
          </Fade>

          <Fade bottom cascade duration={800} distance="30px">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "DR. KHALID KHAN",
                  role: "FOUNDER & CHAIRMAN",
                  img: "https://i.postimg.cc/W1TXPLby/Whats-App-Image-2025-01-01-at-15-02-37.jpg",
                  desc: "Reputed entrepreneur & philanthropist with over four decades of experience.",
                },
                {
                  name: "MR. ABHIJEET THAKUR",
                  role: "FOUNDER & CEO",
                  img: "https://i.postimg.cc/fRVGPkr7/PHOTO-2019-07-24-10-01-41-jpg.jpg",
                  desc: "28+ years of excellence across IT, Cloud, AI, and Electronic subsystems.",
                },
                {
                  name: "MR. SANJAY SINGH",
                  role: "FOUNDER & CBO",
                  img: "https://i.postimg.cc/LXVm1G7b/Whats-App-Image-2025-03-04-at-23-07-35.jpg",
                  desc: "Seasoned leader with 27+ years in strategic marketing and operational growth.",
                },
                {
                  name: "DR. VARUN JEOTI",
                  role: "CTO",
                  img: "https://i.postimg.cc/bw5YrmtD/DMC8618.jpg",
                  desc: "Applied physicist specializing in biosensor innovation and photonics.",
                },
                {
                  name: "MRS. BUSHRA KHAN",
                  role: "FOUNDER & CFO",
                  img: "https://i.postimg.cc/52gp47X2/Whats-App-Image-2025-01-01-at-15-02-37-1.jpg",
                  desc: "Powerhouse in financial strategy, investment control, and operational excellence.",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="group relative h-[420px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-700 ease-out"
                    />
                  </div>
                  {/* Interactive Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>

                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#3bd6c6] mb-4 tracking-wide">
                      {member.role}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-slate-300 font-light text-sm leading-relaxed border-t border-white/20 pt-4">
                        {member.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <Career />

      {/* Unified Contact Section with Interactive Elements */}
      <section
        id="contact-us"
        className="bg-slate-50 border-t border-slate-200 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Let's Shape the Future
              </h2>
              <p className="text-lg text-slate-500 font-light mb-8">
                Whether you're looking to partner with us, inquire about our
                technology, or join our team, we're ready to connect.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Location Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
                <MapPin className="h-6 w-6 text-[#3bd6c6] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Corporate Office
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    <span className="font-medium text-slate-700">
                      Gloport Photonix Innovations
                    </span>
                    <br />
                    21st Floor, 2103 - 2106, Kamdhenu 23 West, TTC Industrial
                    Area, Pawne, Navi Mumbai, 400710
                  </p>
                </div>
              </div>

              {/* Email Card (Interactive Copy) */}
              <div
                onClick={() => handleCopy("info@gloportphotonix.com", "email")}
                className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 hover:shadow-lg hover:border-[#3bd6c6]/50 transition-all duration-300 cursor-pointer relative"
              >
                <Mail className="h-6 w-6 text-[#3bd6c6] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Email Us
                  </h3>
                  <p className="text-slate-500 font-light text-sm">
                    info@gloportphotonix.com
                  </p>
                </div>
                {/* Copy Feedback */}
                <div className="absolute right-6 top-8 text-slate-300 group-hover:text-[#3bd6c6] transition-colors">
                  {copiedStatus === "email" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </div>
              </div>

              {/* Phone Card (Interactive Copy) */}
              <div
                onClick={() => handleCopy("+91 98333 96290", "phone")}
                className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 hover:shadow-lg hover:border-[#3bd6c6]/50 transition-all duration-300 cursor-pointer relative"
              >
                <Phone className="h-6 w-6 text-[#3bd6c6] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Call Us
                  </h3>
                  <p className="text-slate-500 font-light text-sm">
                    +91 98333 96290
                  </p>
                </div>
                {/* Copy Feedback */}
                <div className="absolute right-6 top-8 text-slate-300 group-hover:text-[#3bd6c6] transition-colors">
                  {copiedStatus === "phone" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </div>
              </div>
            </div>

            {/* Interactive Map Wrapper */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative group">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
              <iframe
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.179657558912!2d73.0223884!3d19.0947139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1533508abb7%3A0x2a007395760b59ce!2sGloport%20Photonix!5e0!3m2!1sen!2sin!4v1735132689648!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                title="Company Location"
              ></iframe>
            </div>
          </Fade>
        </div>
      </section>

      {/* Scroll to Top with Scroll Tracking */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-slate-900 text-white p-4 rounded-full shadow-xl hover:bg-[#3bd6c6] hover:-translate-y-1 transition-all duration-300 ${scrollY > 500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scrolldown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `,
        }}
      />
    </div>
  );
}
