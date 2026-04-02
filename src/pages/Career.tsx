import React, { useState, useEffect } from "react";
import {
  Heart,
  Calculator,
  Target,
  Globe2,
  Zap,
  Stethoscope,
  Phone,
  Mail,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
} from "lucide-react";
import Fade from "react-reveal/Fade";

const GloPortCareers = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect for the hero section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 font-sans text-slate-800 overflow-hidden">
      {/* Interactive Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-slate-900 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Careers at Gloport Photonix"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-4">
              Join Our Team
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-lg">
              Build the Future of{" "}
              <span className="text-[#3bd6c6]">Healthcare</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Be part of a revolutionary team transforming early disease
              detection through advanced photonics.
            </p>
          </Fade>
        </div>
      </section>

      <section
        id="careers"
        className="py-16 bg-slate-50 relative z-20 -mt-10 rounded-t-[3rem]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Badge / Corporate Info */}
          <Fade bottom duration={800} distance="30px">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 max-w-4xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  ISO 9001:2015 & ISO 13485:2016 Certified Company
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium tracking-wide">
                  StartupIndia DIPP: 192463
                </p>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
              <div className="text-xs text-slate-400 font-light space-y-1">
                <p>CIN: U72100MH2024PTC433898</p>
                <p>GSTIN: 27AALCG5612N1Z6</p>
              </div>
            </div>
          </Fade>

          {/* Job Openings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Job 1: Accounts & Finance Manager */}
            <Fade bottom duration={800} delay={100} distance="30px">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#3bd6c6]/30 flex flex-col h-full group hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#3bd6c6] flex items-center justify-center mr-4 transition-colors duration-500 flex-shrink-0">
                    <Heart className="h-6 w-6 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Accounts & Finance Manager
                    </h3>
                    <p className="text-sm font-medium text-[#3bd6c6]">
                      Individual Contributor – IC
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Briefcase className="w-3 h-3 mr-1" /> Full-time
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <MapPin className="w-3 h-3 mr-1" /> Navi Mumbai
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3bd6c6]/10 text-[#3bd6c6] text-xs font-bold">
                    <Clock className="w-3 h-3 mr-1" /> 10+ Years
                  </span>
                </div>

                <div className="text-slate-600 font-light text-sm mb-6 flex-grow space-y-4">
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Role Overview:
                    </strong>{" "}
                    Lead the finance and accounting functions of our growing
                    startup. Maintain financial integrity, compliance, fund
                    flow, and accounting processes.
                  </p>
                  <div>
                    <strong className="font-semibold text-slate-900 block mb-2">
                      Key Areas:
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-500">
                      <li>Day-to-day accounting operations in Tally ERP</li>
                      <li>Finance & Fund Management (equity, debt, grants)</li>
                      <li>
                        Statutory Compliances (GST, TDS, Professional Tax)
                      </li>
                      <li>Strategic & Operational Finance support</li>
                      <li>Stakeholder Engagement with banks, auditors</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Requirements:
                    </strong>{" "}
                    M.Com, 10+ years (corporates + startups), Tally ERP, Excel
                    proficiency
                  </p>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Reporting to:
                    </strong>{" "}
                    CFO & CBO
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="mailto:careers@gloportphotonix.com?subject=Application for Accounts & Finance Manager"
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#3bd6c6] transition-colors group/link"
                  >
                    Apply via Email{" "}
                    <Mail className="ml-2 h-4 w-4 text-slate-400 group-hover/link:text-[#3bd6c6] transition-colors" />
                  </a>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <a
                    href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#3bd6c6] hover:text-[#2bbbb0] transition-colors group/link"
                  >
                    Quick Apply{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Fade>

            {/* Job 2: Accountant */}
            <Fade bottom duration={800} delay={150} distance="30px">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#3bd6c6]/30 flex flex-col h-full group hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#3bd6c6] flex items-center justify-center mr-4 transition-colors duration-500 flex-shrink-0">
                    <Calculator className="h-6 w-6 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Accountant
                    </h3>
                    <p className="text-sm font-medium text-[#3bd6c6]">
                      Financial Operations
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Briefcase className="w-3 h-3 mr-1" /> Full-time
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <MapPin className="w-3 h-3 mr-1" /> Navi Mumbai
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3bd6c6]/10 text-[#3bd6c6] text-xs font-bold">
                    <Clock className="w-3 h-3 mr-1" /> 5-10 Years
                  </span>
                </div>

                <div className="text-slate-600 font-light text-sm mb-6 flex-grow space-y-4">
                  <p>
                    <strong className="font-semibold text-slate-900">
                      About the Role:
                    </strong>{" "}
                    Experienced Accountant (Male candidate preferred) with
                    strong accounting expertise to manage day-to-day financial
                    operations.
                  </p>
                  <div>
                    <strong className="font-semibold text-slate-900 block mb-2">
                      Key Responsibilities:
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-500">
                      <li>
                        Day-to-day accounting operations, bookkeeping, invoicing
                      </li>
                      <li>Bank reconciliation and ledger maintenance</li>
                      <li>
                        Prepare MIS reports, P&L statements, balance sheets
                      </li>
                      <li>Handle GST, TDS, and statutory compliances</li>
                      <li>Coordinate with banks, vendors, internal teams</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Requirements:
                    </strong>{" "}
                    B.Com/M.Com, 5-10 years experience, Tally ERP & MS Excel
                    proficiency
                  </p>
                  <p className="text-red-500 font-medium">
                    Note: Male candidate preferred for this role
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="mailto:careers@gloportphotonix.com?subject=Application for Accountant"
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#3bd6c6] transition-colors group/link"
                  >
                    Apply via Email{" "}
                    <Mail className="ml-2 h-4 w-4 text-slate-400 group-hover/link:text-[#3bd6c6] transition-colors" />
                  </a>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <a
                    href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#3bd6c6] hover:text-[#2bbbb0] transition-colors group/link"
                  >
                    Quick Apply{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Fade>

            {/* Job 3: Product Engineering Lead */}
            <Fade bottom duration={800} delay={200} distance="30px">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#3bd6c6]/30 flex flex-col h-full group hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#3bd6c6] flex items-center justify-center mr-4 transition-colors duration-500 flex-shrink-0">
                    <Target className="h-6 w-6 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Product Engineering Lead
                    </h3>
                    <p className="text-sm font-medium text-[#3bd6c6]">
                      Deep-Tech | Photonics
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Briefcase className="w-3 h-3 mr-1" /> Full-time
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <MapPin className="w-3 h-3 mr-1" /> Mumbai
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3bd6c6]/10 text-[#3bd6c6] text-xs font-bold">
                    <Clock className="w-3 h-3 mr-1" /> 8-10 Years
                  </span>
                </div>

                <div className="text-slate-600 font-light text-sm mb-6 flex-grow space-y-4">
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Role Overview:
                    </strong>{" "}
                    End-to-end development of photonics-based healthcare
                    devices. Work at intersection of lasers, optics,
                    electronics, and software.
                  </p>
                  <div>
                    <strong className="font-semibold text-slate-900 block mb-2">
                      Key Responsibilities:
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-500">
                      <li>Product Development & Innovation</li>
                      <li>
                        Laser characterization, optical detector development
                      </li>
                      <li>LabView/Python software for system control</li>
                      <li>
                        Cross-functional collaboration with R&D scientists
                      </li>
                      <li>Quality & Compliance (ISO, FDA, CE standards)</li>
                      <li>Leadership & Mentorship of engineering teams</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Education:
                    </strong>{" "}
                    MSc (Physics/Electronics/Photonics) or MTech
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="mailto:careers@gloportphotonix.com?subject=Application for Product Engineering Lead"
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#3bd6c6] transition-colors group/link"
                  >
                    Apply via Email{" "}
                    <Mail className="ml-2 h-4 w-4 text-slate-400 group-hover/link:text-[#3bd6c6] transition-colors" />
                  </a>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <a
                    href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#3bd6c6] hover:text-[#2bbbb0] transition-colors group/link"
                  >
                    Quick Apply{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Fade>

            {/* Job 4: Product Lead – Photonics */}
            <Fade bottom duration={800} delay={250} distance="30px">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#3bd6c6]/30 flex flex-col h-full group hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#3bd6c6] flex items-center justify-center mr-4 transition-colors duration-500 flex-shrink-0">
                    <Globe2 className="h-6 w-6 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Product Lead – Photonics
                    </h3>
                    <p className="text-sm font-medium text-[#3bd6c6]">
                      Sensor Systems
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Briefcase className="w-3 h-3 mr-1" /> Full-time
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <MapPin className="w-3 h-3 mr-1" /> Navi Mumbai
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3bd6c6]/10 text-[#3bd6c6] text-xs font-bold">
                    <Clock className="w-3 h-3 mr-1" /> 5+ Years
                  </span>
                </div>

                <div className="text-slate-600 font-light text-sm mb-6 flex-grow space-y-4">
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Role Overview:
                    </strong>{" "}
                    Design, prototyping, and integration of laser-based sensor
                    systems for medical diagnostics, environmental monitoring,
                    and homeland security.
                  </p>
                  <div>
                    <strong className="font-semibold text-slate-900 block mb-2">
                      Key Responsibilities:
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-500">
                      <li>Product Design & Development of photonics sensors</li>
                      <li>
                        Cross-Functional Collaboration with engineering teams
                      </li>
                      <li>Troubleshooting & Optimization of laser systems</li>
                      <li>Documentation & Compliance Support</li>
                      <li>Field Readiness & Pilot Deployment</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Education:
                    </strong>{" "}
                    MTech in Photonics/Electronics or MSc
                  </p>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Reporting to:
                    </strong>{" "}
                    Head of Engineering
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="mailto:careers@gloportphotonix.com?subject=Application for Product Lead – Photonics"
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#3bd6c6] transition-colors group/link"
                  >
                    Apply via Email{" "}
                    <Mail className="ml-2 h-4 w-4 text-slate-400 group-hover/link:text-[#3bd6c6] transition-colors" />
                  </a>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <a
                    href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#3bd6c6] hover:text-[#2bbbb0] transition-colors group/link"
                  >
                    Quick Apply{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Fade>

            {/* Job 5: Technical Leader */}
            <Fade bottom duration={800} delay={300} distance="30px">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#3bd6c6]/30 flex flex-col h-full group hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#3bd6c6] flex items-center justify-center mr-4 transition-colors duration-500 flex-shrink-0">
                    <Zap className="h-6 w-6 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Technical Leader
                    </h3>
                    <p className="text-sm font-medium text-[#3bd6c6]">
                      Senior Leadership Role
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Briefcase className="w-3 h-3 mr-1" /> Full-time
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <MapPin className="w-3 h-3 mr-1" /> Navi Mumbai
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3bd6c6]/10 text-[#3bd6c6] text-xs font-bold">
                    <Clock className="w-3 h-3 mr-1" /> 17+ Years
                  </span>
                </div>

                <div className="text-slate-600 font-light text-sm mb-6 flex-grow space-y-4">
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Your Mission:
                    </strong>{" "}
                    Drive technology vision, innovation roadmap, and
                    cross-domain deployment across healthcare, environmental
                    monitoring, agriculture, and homeland security.
                  </p>
                  <div>
                    <strong className="font-semibold text-slate-900 block mb-2">
                      Key Responsibilities:
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-500">
                      <li>Technology Leadership & Strategy</li>
                      <li>Product Innovation & Engineering Oversight</li>
                      <li>Cross-Functional Collaboration</li>
                      <li>Compliance & Quality Systems (ISO, CE, FDA)</li>
                      <li>Team Development & Strategic Partnerships</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Education:
                    </strong>{" "}
                    PhD/MTech in Photonics or Laser Physics
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="mailto:careers@gloportphotonix.com?subject=Application for Technical Leader"
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#3bd6c6] transition-colors group/link"
                  >
                    Apply via Email{" "}
                    <Mail className="ml-2 h-4 w-4 text-slate-400 group-hover/link:text-[#3bd6c6] transition-colors" />
                  </a>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <a
                    href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#3bd6c6] hover:text-[#2bbbb0] transition-colors group/link"
                  >
                    Quick Apply{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Fade>

            {/* Job 6: Exec Assistant / Coordinator */}
            <Fade bottom duration={800} delay={350} distance="30px">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#3bd6c6]/30 flex flex-col h-full group hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#3bd6c6] flex items-center justify-center mr-4 transition-colors duration-500 flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Executive Assistant & Coordinator
                    </h3>
                    <p className="text-sm font-medium text-[#3bd6c6]">
                      Strategic Support
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Briefcase className="w-3 h-3 mr-1" /> On site
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <MapPin className="w-3 h-3 mr-1" /> Navi Mumbai
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3bd6c6]/10 text-[#3bd6c6] text-xs font-bold">
                    <Clock className="w-3 h-3 mr-1" /> 2-4 Years
                  </span>
                </div>

                <div className="text-slate-600 font-light text-sm mb-6 flex-grow space-y-4">
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Role Overview:
                    </strong>{" "}
                    Dynamic, highly organized Executive Assistant & Project
                    Coordinator to support visionary cofounders and manage
                    strategic initiatives.
                  </p>
                  <div>
                    <strong className="font-semibold text-slate-900 block mb-2">
                      Key Responsibilities:
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-500">
                      <li>Strategic partner to Cofounders</li>
                      <li>Manage calendars, travel, events coordination</li>
                      <li>Prepare presentations, reports, internal memos</li>
                      <li>Document MoMs and ensure follow-ups</li>
                      <li>Cross-departmental coordination (R&D, HR)</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="font-semibold text-slate-900">
                      Qualifications:
                    </strong>{" "}
                    Bachelor's degree, strong MS Office & PM skills
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="mailto:careers@gloportphotonix.com?subject=Application for Executive Assistant"
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#3bd6c6] transition-colors group/link"
                  >
                    Apply via Email{" "}
                    <Mail className="ml-2 h-4 w-4 text-slate-400 group-hover/link:text-[#3bd6c6] transition-colors" />
                  </a>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <a
                    href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#3bd6c6] hover:text-[#2bbbb0] transition-colors group/link"
                  >
                    Quick Apply{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GloPortCareers;
