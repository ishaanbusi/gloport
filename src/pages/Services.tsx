import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  ArrowRight,
  Wind,
  Activity,
  Target,
  ShieldCheck,
  Zap,
  Layers,
  Wifi,
  LineChart,
  Coins,
  Smartphone,
  Globe2,
} from "lucide-react";

export default function Services() {
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team working on solutions"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-white"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-4">
              What We Do
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-lg">
              Our <span className="text-[#3bd6c6]">Solutions</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Comprehensive deep-tech solutions tailored to navigate the
              diagnostic landscape and redefine global healthcare.
            </p>
          </Fade>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Fade bottom duration={800} distance="30px">
            <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed">
              At{" "}
              <strong className="font-semibold text-slate-900">
                Gloport Photon
                <span className="text-red-500 font-medium">i</span>x
              </strong>
              , we are dedicated to solving some of the most pressing challenges
              in healthcare by harnessing the power of photonics technology.
            </p>
            <p className="mt-6 text-lg text-slate-500 font-light leading-relaxed">
              Our solutions are designed to improve early disease detection,
              enhance diagnostics, and enable healthcare providers to deliver
              more accurate and timely treatments.
            </p>
          </Fade>
        </div>
      </section>

      {/* Flagship Product: Advanced Breath Analyzer */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3bd6c6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Fade bottom duration={800} distance="30px">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                Flagship Innovation
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Advanced Breath Analyzer
              </h3>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                A breakthrough in non-invasive diagnostic technology. This
                device uses cutting-edge photoacoustic technology to detect
                volatile organic compounds (VOCs) in exhaled breath, serving as
                early biomarkers for diseases such as lung cancer.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Early Detection",
                desc: "Enables rapid diagnosis through simple, non-invasive breath samples.",
              },
              {
                icon: ShieldCheck,
                title: "Painless Process",
                desc: "Completely non-invasive analysis, eliminating traditional painful methods.",
              },
              {
                icon: Activity,
                title: "Real-Time Results",
                desc: "Provides rapid diagnostic results for immediate, timely medical intervention.",
              },
              {
                icon: Wind,
                title: "High Sensitivity",
                desc: "Detects biomarkers at ultra-low concentrations, drastically reducing false positives.",
              },
            ].map((feature, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 100}
                key={idx}
                distance="30px"
              >
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#3bd6c6]/30 transition-all duration-300 group hover:-translate-y-1">
                  <feature.icon className="h-8 w-8 text-[#3bd6c6] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Photonics */}
            <Fade left duration={800} distance="30px">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-[#3bd6c6] mr-3" />
                  Next-Gen Photonics
                </h3>
                <p className="text-slate-500 font-light mb-8 leading-relaxed">
                  At the core of our solutions is expertise in photonics—using
                  light to measure molecular changes. Our tools push the
                  boundaries of healthcare technology.
                </p>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#3bd6c6]/20 transition-colors group">
                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-[#3bd6c6] transition-colors">
                      Photoacoustic Spectroscopy
                    </h4>
                    <p className="text-slate-500 font-light text-sm">
                      Detects disease markers with unmatched precision using
                      laser-light interaction.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#3bd6c6]/20 transition-colors group">
                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-[#3bd6c6] transition-colors">
                      Multi-Wavelength Lasers
                    </h4>
                    <p className="text-slate-500 font-light text-sm">
                      Simultaneous detection of multiple biomarkers for
                      comprehensive analysis.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Real-Time IoT */}
            <Fade right duration={800} distance="30px">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Wifi className="h-6 w-6 text-[#3bd6c6] mr-3" />
                  Real-Time Data Integration
                </h3>
                <p className="text-slate-500 font-light mb-8 leading-relaxed">
                  Diagnostics are just the beginning. We integrate IoT and
                  advanced data analytics into our devices to provide
                  continuous, actionable health monitoring.
                </p>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#3bd6c6]/20 transition-colors group">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center group-hover:text-[#3bd6c6] transition-colors">
                      <Globe2 className="h-4 w-4 mr-2" /> IoT-Enabled Devices
                    </h4>
                    <p className="text-slate-500 font-light text-sm">
                      Securely transmit real-time data to cloud platforms for
                      remote, continuous monitoring.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#3bd6c6]/20 transition-colors group">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center group-hover:text-[#3bd6c6] transition-colors">
                      <LineChart className="h-4 w-4 mr-2" /> Data-Driven
                      Healthcare
                    </h4>
                    <p className="text-slate-500 font-light text-sm">
                      Detect complex patterns in biomarker data to optimize and
                      personalize treatment plans.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Scalability & Future */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Fade bottom duration={800} distance="30px">
              <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">
                  Scalable & Accessible
                </h3>
                <p className="text-slate-400 font-light mb-8 leading-relaxed">
                  Our technology is engineered with scalability in mind,
                  seamlessly adapting for use in major metropolitan hospitals as
                  well as remote rural clinics.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <Coins className="h-6 w-6 text-[#3bd6c6] mb-3" />
                    <h4 className="font-bold mb-2">Cost-Effective</h4>
                    <p className="text-slate-400 text-sm font-light">
                      Advanced technology accessible to a wider range of
                      providers.
                    </p>
                  </div>
                  <div className="flex-1">
                    <Smartphone className="h-6 w-6 text-[#3bd6c6] mb-3" />
                    <h4 className="font-bold mb-2">Portable</h4>
                    <p className="text-slate-400 text-sm font-light">
                      Compact devices ideal for immediate point-of-care
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom duration={800} delay={200} distance="30px">
              <div className="bg-[#3bd6c6]/10 p-10 rounded-3xl border border-[#3bd6c6]/20">
                <h3 className="text-2xl font-bold mb-4 text-[#3bd6c6]">
                  Expanding Our Reach
                </h3>
                <p className="text-slate-300 font-light mb-8 leading-relaxed">
                  While our current focus is on lung cancer detection, the
                  potential applications of our photoacoustic technology extend
                  far beyond, paving the way for multi-disease diagnostics.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#3bd6c6] mt-2 mr-3"></div>
                    <p className="text-slate-300 text-sm font-light">
                      <strong className="text-white font-medium">
                        Versatile Applications:
                      </strong>{" "}
                      Adaptable technology for diverse physiological conditions.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#3bd6c6] mt-2 mr-3"></div>
                    <p className="text-slate-300 text-sm font-light">
                      <strong className="text-white font-medium">
                        Collaborative Growth:
                      </strong>{" "}
                      Strategic partnerships to continuously enhance our
                      diagnostic portfolio.
                    </p>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Ready to Transform Diagnostics?
            </h2>
            <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you are looking to integrate our solutions or explore a
              partnership, our team is ready to help you navigate the future of
              healthcare.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-white bg-[#3bd6c6] hover:bg-[#2bbbb0] transition-all duration-300 shadow-[0_0_20px_rgba(59,214,198,0.3)] hover:shadow-[0_0_30px_rgba(59,214,198,0.5)] hover:-translate-y-1 group"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}
