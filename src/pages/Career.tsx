import React from "react";
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
} from "lucide-react";

const GloPortCareers = () => {
  return (
    <div className="bg-gray-50 font-inter">
      {/* Career Section */}
      <section id="careers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-normal text-[#3bd6c6] mb-4">
              Join Our Team at Gloport Photon
              <span className="text-red-500">i</span>x
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a revolutionary team that's transforming healthcare
              through advanced photonics technology. We're looking for
              passionate individuals who want to make a difference in early
              disease detection and medical diagnostics.
            </p>
            <div className="mt-6 bg-[#f0f4f8] rounded-lg p-4 max-w-4xl mx-auto">
              <p className="text-sm text-gray-700">
                <strong>
                  ISO 9001:2015 & ISO 13485:2016 Certified Company
                </strong>{" "}
                | StartupIndia DIPP: 192463
              </p>
              <p className="text-xs text-gray-600 mt-1">
                CIN: U72100MH2024PTC433898 | GSTIN: 27AALCG5612N1Z6
              </p>
            </div>
          </div>

          {/* Job Openings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Job 1: Accounts & Finance Manager */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-[#3bd6c6] mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Accounts & Finance Manager
                  </h3>
                  <p className="text-sm text-gray-500">
                    Individual Contributor – IC
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#3bd6c6] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Navi Mumbai
                </span>
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  10+ Years
                </span>
              </div>
              <div className="text-gray-600 mb-4 space-y-2">
                <p>
                  <strong>Role Overview:</strong> Lead the finance and
                  accounting functions of our growing startup. Maintain
                  financial integrity, compliance, fund flow, and accounting
                  processes.
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Key Areas:</strong>
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                    <li>Day-to-day accounting operations in Tally ERP</li>
                    <li>Finance & Fund Management (equity, debt, grants)</li>
                    <li>Statutory Compliances (GST, TDS, Professional Tax)</li>
                    <li>Strategic & Operational Finance support</li>
                    <li>Stakeholder Engagement with banks, auditors</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Requirements:</strong> M.Com, 10+ years (corporates +
                startups), Tally ERP, Excel proficiency
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Reporting to:</strong> CFO & CBO
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:careers@gloportphotonix.com?subject=Application for Accounts & Finance Manager&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the Accounts & Finance Manager position. Please find my resume attached.%0D%0A%0D%0AKey Details:%0D%0A- Position: Accounts & Finance Manager%0D%0A- Location: Navi Mumbai (Corporate Office)%0D%0A- Experience: 10+ years (corporates + startups)%0D%0A- Qualification: M.Com / Equivalent%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Apply via Email <Mail className="ml-1 h-4 w-4" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Quick Apply <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Job 2: Accountant */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                <Calculator className="h-8 w-8 text-[#3bd6c6] mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Accountant
                  </h3>
                  <p className="text-sm text-gray-500">Financial Operations</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#3bd6c6] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Navi Mumbai
                </span>
                <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  5-10 Years
                </span>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  As per experience
                </span>
              </div>
              <div className="text-gray-600 mb-4 space-y-2">
                <p>
                  <strong>About the Role:</strong> Experienced Accountant (Male
                  candidate preferred) with strong accounting expertise to
                  manage day-to-day financial operations.
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Key Responsibilities:</strong>
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                    <li>
                      Day-to-day accounting operations, bookkeeping, invoicing
                    </li>
                    <li>Bank reconciliation and ledger maintenance</li>
                    <li>Prepare MIS reports, P&L statements, balance sheets</li>
                    <li>Handle GST, TDS, and statutory compliances</li>
                    <li>Coordinate with banks, vendors, internal teams</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Requirements:</strong> B.Com/M.Com, 5-10 years
                experience, Tally ERP & MS Excel proficiency
              </div>
              <div className="text-sm text-red-600 mb-4">
                <strong>Note:</strong> Male candidate preferred for this role
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:careers@gloportphotonix.com?subject=Application for Accountant&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the Accountant position. Please find my resume attached.%0D%0A%0D%0AKey Details:%0D%0A- Position: Accountant%0D%0A- Location: Navi Mumbai%0D%0A- Experience: 5-10 years in accounting & finance%0D%0A- Salary: As per experience%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Apply via Email <Mail className="ml-1 h-4 w-4" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Quick Apply <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Job 3: Product Engineering Lead */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-[#3bd6c6] mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Product Engineering Lead
                  </h3>
                  <p className="text-sm text-gray-500">
                    Deep-Tech | Photonics | Healthcare Technology
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#3bd6c6] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Mumbai
                </span>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  8-10 Years
                </span>
              </div>
              <div className="text-gray-600 mb-4 space-y-2">
                <p>
                  <strong>Role Overview:</strong> End-to-end development of
                  photonics-based healthcare devices. Work at intersection of
                  lasers, optics, electronics, and software.
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Key Responsibilities:</strong>
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                    <li>Product Development & Innovation</li>
                    <li>
                      Laser characterization, optical detector development
                    </li>
                    <li>LabView/Python software for system control</li>
                    <li>Cross-functional collaboration with R&D scientists</li>
                    <li>Quality & Compliance (ISO, FDA, CE standards)</li>
                    <li>Leadership & Mentorship of engineering teams</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Education:</strong> MSc (Physics/Electronics/Photonics)
                or MTech (Photonics/Laser Physics)
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Experience:</strong> 8-10 years in Product Engineering,
                R&D, or Medical Devices
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:careers@gloportphotonix.com?subject=Application for Product Engineering Lead&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the Product Engineering Lead position. Please find my resume attached.%0D%0A%0D%0AKey Details:%0D%0A- Position: Product Engineering Lead%0D%0A- Location: Mumbai, India%0D%0A- Experience: 8-10 Years%0D%0A- Industry: Deep-Tech | Photonics | Healthcare Technology%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Apply via Email <Mail className="ml-1 h-4 w-4" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Quick Apply <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Job 4: Product Lead – Photonics-Based Sensor Systems */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe2 className="h-8 w-8 text-[#3bd6c6] mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Product Lead – Photonics-Based Sensor Systems
                  </h3>
                  <p className="text-sm text-gray-500">
                    Multi-application Development
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#3bd6c6] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Navi Mumbai
                </span>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  5+ Years
                </span>
              </div>
              <div className="text-gray-600 mb-4 space-y-2">
                <p>
                  <strong>Role Overview:</strong> Design, prototyping, and
                  integration of laser-based sensor systems for medical
                  diagnostics, environmental monitoring, agricultural sensing,
                  and homeland security.
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Key Responsibilities:</strong>
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                    <li>Product Design & Development of photonics sensors</li>
                    <li>
                      Cross-Functional Collaboration with engineering teams
                    </li>
                    <li>Troubleshooting & Optimization of laser systems</li>
                    <li>Documentation & Compliance Support</li>
                    <li>Field Readiness & Pilot Deployment</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Education:</strong> MTech in Photonics/Electronics or
                MSc in Physics (Optics/Photonics)
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Reporting to:</strong> Product Manager / Head of
                Engineering
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:careers@gloportphotonix.com?subject=Application for Product Lead – Photonics-Based Sensor Systems&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the Product Lead – Photonics-Based Sensor Systems position. Please find my CV and project portfolio attached.%0D%0A%0D%0AKey Details:%0D%0A- Position: Product Lead – Photonics%0D%0A- Location: Navi Mumbai, India%0D%0A- Experience: 5+ years%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Apply via Email <Mail className="ml-1 h-4 w-4" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Quick Apply <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Job 5: Technical Leader – Photonics-Based Sensor Systems */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-[#3bd6c6] mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Technical Leader – Photonics-Based Sensor Systems
                  </h3>
                  <p className="text-sm text-gray-500">
                    Senior Leadership Role
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#3bd6c6] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Navi Mumbai
                </span>
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  17+ Years
                </span>
              </div>
              <div className="text-gray-600 mb-4 space-y-2">
                <p>
                  <strong>Your Mission:</strong> Drive technology vision,
                  innovation roadmap, and cross-domain deployment across
                  healthcare, environmental monitoring, agriculture, and
                  homeland security.
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Key Responsibilities:</strong>
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                    <li>Technology Leadership & Strategy</li>
                    <li>Product Innovation & Engineering Oversight</li>
                    <li>Cross-Functional Collaboration</li>
                    <li>Compliance & Quality Systems (ISO, CE, FDA)</li>
                    <li>Team Development & Mentorship</li>
                    <li>Strategic Partnerships & Scale-Up</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Education:</strong> PhD/MTech in Photonics, Laser
                Physics, Electronics, or Optical Sensing
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Experience:</strong> 17+ years in R&D/Product
                Engineering/Deep-tech leadership roles
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:careers@gloportphotonix.com?subject=Application for Technical Leader – Photonics-Based Sensor Systems&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the Technical Leader – Photonics-Based Sensor Systems position. Please find my resume attached.%0D%0A%0D%0AKey Details:%0D%0A- Position: Technical Leader – Photonics%0D%0A- Location: Navi Mumbai, India%0D%0A- Experience Required: 17+ Years%0D%0A- Domains: Healthcare | Environmental Monitoring | Agriculture | Homeland Security%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Apply via Email <Mail className="ml-1 h-4 w-4" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Quick Apply <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Job 6: Executive Assistant to Cofounders & Project Coordinator */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8 text-[#3bd6c6] mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Executive Assistant to Cofounders & Project Coordinator
                  </h3>
                  <p className="text-sm text-gray-500">
                    Strategic Support Role
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#3bd6c6] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-time, On site
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Navi Mumbai
                </span>
                <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  2-4 Years
                </span>
              </div>
              <div className="text-gray-600 mb-4 space-y-2">
                <p>
                  <strong>Role Overview:</strong> Dynamic, highly organized
                  Executive Assistant & Project Coordinator to support visionary
                  cofounders and manage strategic initiatives.
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Key Responsibilities:</strong>
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                    <li>Executive Support - Strategic partner to Cofounders</li>
                    <li>
                      Manage complex calendars, meetings, travel coordination
                    </li>
                    <li>Prepare presentations, briefing documents, reports</li>
                    <li>
                      Project Coordination - Drive special projects and
                      initiatives
                    </li>
                    <li>Cross-departmental coordination (R&D, HR, Finance)</li>
                    <li>
                      Maintain confidentiality and handle sensitive information
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Qualifications:</strong> Bachelor's degree in
                Business/Science/Engineering, 2-4 years experience
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Industry:</strong> Deep-Tech | Photonics
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:careers@gloportphotonix.com?subject=Application for Executive Assistant to Cofounders & Project Coordinator&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the Executive Assistant to Cofounders & Project Coordinator position. Please find my resume attached.%0D%0A%0D%0AKey Details:%0D%0A- Position: Executive Assistant to Cofounders & Project Coordinator%0D%0A- Location: Navi Mumbai – Corporate Office%0D%0A- Experience Required: 2–4 Years%0D%0A- Employment Type: Full-Time, On site%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Apply via Email <Mail className="ml-1 h-4 w-4" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Quick Apply <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Job 7: Executive Secretary & Department Coordinator */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 text-[#3bd6c6] mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Executive Secretary & Department Coordinator
                  </h3>
                  <p className="text-sm text-gray-500">
                    Administrative Excellence
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#3bd6c6] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-time, On site
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Navi Mumbai
                </span>
                <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  3-5 Years
                </span>
              </div>
              <div className="text-gray-600 mb-4 space-y-2">
                <p>
                  <strong>Role Overview:</strong> Dynamic Executive Secretary &
                  Department Coordinator to support cofounders and manage
                  strategic initiatives across departments.
                </p>
                <div className="text-sm">
                  <p>
                    <strong>
                      Executive Support and Department Coordination:
                    </strong>
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                    <li>
                      Strategic partner and primary contact for Cofounders
                    </li>
                    <li>
                      Manage calendars, meetings, travel, events coordination
                    </li>
                    <li>Prepare presentations, reports, internal memos</li>
                    <li>Document MoMs/action items and ensure follow-ups</li>
                    <li>
                      Cross-departmental coordination with R&D, HR, Finance
                    </li>
                    <li>Create dashboards and project trackers</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Requirements:</strong> Bachelor's degree, 3-5 years
                experience in executive support
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <strong>Skills:</strong> MS Office Suite, Project Management,
                Communication
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:careers@gloportphotonix.com?subject=Application for Executive Secretary & Department Coordinator&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the Executive Secretary & Department Coordinator position. Please find my resume attached.%0D%0A%0D%0AKey Details:%0D%0A- Position: Executive Secretary & Department Coordinator%0D%0A- Location: Navi Mumbai%0D%0A- Experience: 3-5 years%0D%0A- Employment Type: Full-Time, On site%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Apply via Email <Mail className="ml-1 h-4 w-4" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3bd6c6] hover:text-[#2c554f] font-medium"
                >
                  Quick Apply <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GloPortCareers;
