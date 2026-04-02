import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import {
  Check,
  Lightbulb,
  Search,
  Heart,
  Globe,
  Waves,
  Mic,
  Filter,
  Brain,
  PlayCircle,
} from "lucide-react";

export default function WhyUs() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Parallax effect for the hero section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const industries = [
    {
      title: "Healthcare & Diagnostics",
      subtitle: "Revolutionizing Early Disease Detection",
      content:
        "Our core focus is healthcare. Our breath analyzers use photoacoustic technology for highly sensitive detection of disease biomarkers, enabling doctors to diagnose conditions like lung cancer early, when treatment is most effective.",
      bullets: [
        "Lung Cancer Detection through non-invasive breath analysis.",
        "Respiratory Disease Monitoring (Asthma, COPD, Pneumonia).",
        "Personalized Healthcare via continuous IoT monitoring.",
      ],
      impact:
        "Faster, reliable diagnostics that reduce wait times and save lives while lowering healthcare costs.",
    },
    {
      title: "Environmental Monitoring",
      subtitle: "Detecting Air Quality & Pollutants",
      content:
        "Accurate, early detection of toxic gases is critical. Our devices detect trace levels of VOCs, carbon monoxide, and methane, making them ideal for monitoring industrial emissions and ensuring compliance.",
      bullets: [
        "Urban Air Quality Monitoring to meet safety standards.",
        "Industrial Safety to prevent hazardous exposure to communities.",
        "Indoor Air Quality monitoring for hospitals and schools.",
      ],
      impact:
        "Helps governments and industries maintain compliance and proactively manage environmental risks.",
    },
    {
      title: "Industrial Safety",
      subtitle: "Ensuring Worker Safety with Real-Time Monitoring",
      content:
        "In mining, manufacturing, and chemical processing, detecting hazardous gases prevents accidents. Our solutions provide continuous air quality monitoring in confined or hazardous spaces.",
      bullets: [
        "Gas Detection in Mines (Methane, Carbon Monoxide).",
        "Manufacturing Plants for chemical leak prevention.",
        "Oil & Gas Industry pipeline and offshore rig monitoring.",
      ],
      impact:
        "Enhances safety protocols, reduces catastrophic accidents, and protects workers and the environment.",
    },
    {
      title: "Research & Academia",
      subtitle: "Empowering Innovation through Research",
      content:
        "A powerful tool for institutions developing new diagnostic methods and studying biomarkers. Researchers use our highly sensitive photonics systems to analyze samples at a molecular level.",
      bullets: [
        "Biomedical Research for new diagnostic techniques.",
        "Environmental Research on pollutant impacts.",
        "Technology Development partnerships for broader applications.",
      ],
      impact:
        "Empowers institutions to make breakthrough discoveries that shape the future of science.",
    },
    {
      title: "Public Health",
      subtitle: "Supporting Global Health Programs",
      content:
        "We partner with governments to support large-scale programs reducing disease burden through early detection. We focus on affordable, scalable diagnostics to improve global outcomes.",
      bullets: [
        "Population Screening in underserved or remote areas.",
        "Epidemiological Studies providing real-time prevalence data.",
        "Regulatory Compliance for air quality enforcement.",
      ],
      impact:
        "Reduces the global disease burden and enables faster response times during health crises.",
    },
  ];

  const advantages = [
    "Customized deep-tech solutions tailored to your needs",
    "Transparent communication and data reporting",
    "Dedicated scientific and engineering support team",
    "Cost-effective and competitive pricing",
    "Fast turnaround times for diagnostic results",
    "Industry-leading expertise in photonics and AI",
  ];

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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-white"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-4">
              The Gloport Difference
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-lg">
              Why Choose <span className="text-[#3bd6c6]">Us</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              We combine scientific expertise, technological innovation, and
              dedication to deliver exceptional diagnostic results that drive
              healthcare forward.
            </p>
          </Fade>
        </div>
      </section>

      {/* Core Strengths Grid */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                We bring cutting-edge photonics technology to healthcare,
                focusing on early detection and non-invasive diagnostic
                solutions that are scalable across diverse environments.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Proven Expertise",
                desc: "Pioneers in applying deep photonics technology to solve critical, real-world healthcare challenges.",
              },
              {
                icon: Search,
                title: "Early Detection",
                desc: "Solutions designed to diagnose diseases at the molecular level, when treatment is most effective.",
              },
              {
                icon: Heart,
                title: "Non-Invasive",
                desc: "Reliable, painless diagnostics that drastically improve patient comfort and clinical outcomes.",
              },
              {
                icon: Globe,
                title: "Adaptable Scale",
                desc: "From large metropolitan hospitals to remote rural clinics, our devices are built to scale anywhere.",
              },
            ].map((strength, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 100}
                key={idx}
                distance="30px"
              >
                <div className="group bg-slate-50 p-8 rounded-2xl border border-transparent hover:bg-white hover:border-[#3bd6c6]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white group-hover:bg-[#3bd6c6] rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm">
                    <strength.icon className="h-7 w-7 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - The Technology Process */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3bd6c6]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Fade bottom duration={800} distance="30px">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                Our Technology
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Photoacoustics: Harnessing Light & Sound
              </h3>
              <p className="text-slate-400 font-light max-w-3xl leading-relaxed">
                We convert light energy into sound waves to detect volatile
                organic compounds (VOCs) and disease markers at their earliest
                stages. Here is how our proprietary process works:
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3bd6c6]/50 to-transparent -translate-y-1/2 -z-10"></div>

            {[
              {
                icon: Lightbulb,
                title: "1. Laser Absorption",
                desc: "Precisely tuned multi-wavelength lasers emit light into a breath sample, causing target molecules to vibrate.",
              },
              {
                icon: Waves,
                title: "2. Sound Generation",
                desc: "As molecules absorb light, they generate tiny acoustic waves—converting light energy directly into sound.",
              },
              {
                icon: Mic,
                title: "3. Acoustic Detection",
                desc: "Highly sensitive sensors detect these sound waves and convert them into electronic signals for analysis.",
              },
              {
                icon: Filter,
                title: "4. Signal Processing",
                desc: "Advanced algorithms filter noise and isolate relevant data, ensuring ultra-high diagnostic sensitivity.",
              },
            ].map((step, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 150}
                key={idx}
                distance="30px"
              >
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-[#3bd6c6] transition-colors group h-full">
                  <step.icon className="h-8 w-8 text-[#3bd6c6] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>

          {/* AI & Analytics Callout */}
          <Fade bottom duration={800} delay={600} distance="30px">
            <div className="mt-12 bg-gradient-to-r from-[#3bd6c6]/20 to-transparent p-1 rounded-2xl">
              <div className="bg-slate-900 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#3bd6c6]/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-8 w-8 text-[#3bd6c6]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Powered by Machine Learning
                  </h4>
                  <p className="text-slate-400 font-light">
                    Processed data is analyzed against comprehensive biomarker
                    libraries. Our integrated ML algorithms continuously learn
                    from field data, making the system smarter and more accurate
                    over time.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Interactive Industries Section (Tabs) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Industries & Applications
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                From healthcare to environmental monitoring, our advanced
                photonics are transforming the way critical challenges are
                addressed across various fields.
              </p>
            </div>
          </Fade>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tab Navigation */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              {industries.map((industry, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustry(idx)}
                  className={`text-left px-6 py-5 rounded-xl transition-all duration-300 font-bold text-lg border-l-4 ${
                    activeIndustry === idx
                      ? "bg-white text-[#3bd6c6] border-[#3bd6c6] shadow-md"
                      : "bg-transparent text-slate-500 border-transparent hover:bg-slate-200/50 hover:text-slate-700"
                  }`}
                >
                  {industry.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3">
              <Fade key={activeIndustry} duration={500} distance="20px">
                <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-lg border border-slate-100 min-h-[400px] flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {industries[activeIndustry].title}
                  </h3>
                  <h4 className="text-[#3bd6c6] font-medium mb-6 uppercase tracking-wider text-sm">
                    {industries[activeIndustry].subtitle}
                  </h4>

                  <p className="text-slate-600 font-light leading-relaxed mb-8">
                    {industries[activeIndustry].content}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {industries[activeIndustry].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-[#3bd6c6] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 font-light">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <strong className="text-slate-900 block mb-2">
                      The Impact:
                    </strong>
                    <p className="text-slate-600 font-light text-sm italic">
                      "{industries[activeIndustry].impact}"
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages & Media Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Checklist */}
            <Fade left duration={800} distance="30px">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  The Advantages You Get
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {advantages.map((feature, idx) => (
                    <div key={idx} className="flex items-center group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3bd6c6]/10 flex items-center justify-center mr-4 group-hover:bg-[#3bd6c6] transition-colors duration-300">
                        <Check className="h-4 w-4 text-[#3bd6c6] group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-lg text-slate-600 font-light group-hover:text-slate-900 transition-colors">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>

            {/* Media/Videos */}
            <Fade right duration={800} distance="30px">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  See Our Tech in Action
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "https://i.postimg.cc/x8wVF5Gx/6.jpg",
                    "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                  ].map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                        src={imgSrc}
                        alt={`Insight Video ${idx + 1}`}
                      />
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
