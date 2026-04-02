import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Globe,
  Award,
  ChevronRight,
  Newspaper,
  Bell,
} from "lucide-react";
import Fade from "react-reveal/Fade";

const newsArticles = [
  {
    title:
      "Gloport Photonix Unveils Advanced Breath Analyzer for Early Lung Cancer Detection",
    date: "January 15, 2025",
    description:
      "We are excited to announce the launch of our Advanced Breath Analyzer, a breakthrough in noninvasive diagnostics for the early detection of lung cancer. This cutting-edge device leverages photoacoustic technology to detect biomarkers in exhaled breath, providing real-time diagnostic results without the need for invasive procedures. The launch marks a significant milestone in our journey to improve early-stage cancer detection.",
    category: "Product Launch",
  },
  {
    title:
      "Partnership with Leading Healthcare Institutions for Clinical Trials",
    date: "February 1, 2025",
    description:
      "In our ongoing commitment to innovation, Gloport Photonix has partnered with leading healthcare institutions to conduct clinical trials. These trials will assess the device's effectiveness in real-world settings, focusing on early-stage lung cancer and respiratory diseases.",
    category: "Research Collaboration",
  },
  {
    title: "Gloport Photonix Expands into Environmental Monitoring Sector",
    date: "March 10, 2025",
    description:
      "We are expanding our technology into environmental monitoring. Capable of detecting trace amounts of VOCs and pollutants, our technology will monitor air quality in urban and industrial environments, supporting public health and industrial safety programs.",
    category: "Technology Expansion",
  },
  {
    title: "Recognized as a Top Innovator in Medical Diagnostics",
    date: "April 5, 2025",
    description:
      "Gloport Photonix has been recognized as a top innovator in medical diagnostics by a leading industry publication, highlighting our pioneering work in non-invasive tools and our commitment to improving patient outcomes through early detection.",
    category: "Industry Recognition",
  },
  {
    title: "Participation in Global Healthcare Conference",
    date: "May 20, 2025",
    description:
      "We will showcase our latest advancements in photonics-based healthcare solutions at the upcoming Global Healthcare Innovation Conference. Our team will present the groundbreaking capabilities of our breath analyzers.",
    category: "Conference Participation",
  },
  {
    title: "Expanding Production Capacity to Meet Global Demand",
    date: "June 15, 2025",
    description:
      "With growing demand for our breath analyzer technology, we are scaling up production. Our newly expanded facility will allow us to manufacture more units, ensuring diagnostic devices reach more hospitals globally.",
    category: "Business Expansion",
  },
  {
    title: "Gloport Photonix Secures Series A Funding to Accelerate Innovation",
    date: "July 25, 2025",
    description:
      "We successfully completed our Series A funding round, raising substantial capital to accelerate R&D efforts. This enables us to expand our product line, enhance technology, and scale business operations globally.",
    category: "Funding",
  },
];

const rssSources = [
  "Photonics.com",
  "Laser Focus World",
  "Optics.org",
  "SPIE Newsroom",
];

export default function News() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect for the hero section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Separate the latest article to feature it prominently
  const featuredArticle = newsArticles[0];
  const remainingArticles = newsArticles.slice(1);

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
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="News and Updates"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-4">
              Press Room
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-lg">
              News & <span className="text-[#3bd6c6]">Updates</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Stay informed about the latest innovations, breakthroughs, and
              milestones shaping the future of healthcare.
            </p>
          </Fade>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 bg-slate-50 relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 px-2">
              Featured Announcement
            </h2>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 group relative overflow-hidden cursor-pointer">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3bd6c6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3bd6c6]/10 text-[#3bd6c6] text-xs font-bold uppercase tracking-wide">
                      <Award className="w-3 h-3 mr-1.5" />{" "}
                      {featuredArticle.category}
                    </span>
                    <span className="inline-flex items-center text-xs font-medium text-slate-400">
                      <Calendar className="w-3 h-3 mr-1.5" />{" "}
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#3bd6c6] transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed text-lg">
                    {featuredArticle.description}
                  </p>
                </div>
                <div className="flex-shrink-0 mt-4 lg:mt-0">
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#3bd6c6] group-hover:border-[#3bd6c6] transition-all duration-300">
                    <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <Newspaper className="h-6 w-6 text-[#3bd6c6] mr-3" /> Recent
                News
              </h2>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingArticles.map((article, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 100}
                key={idx}
                distance="30px"
              >
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-none hover:shadow-xl hover:border-[#3bd6c6]/30 transition-all duration-500 group flex flex-col h-full cursor-pointer hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#3bd6c6] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#3bd6c6] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-200/50 flex items-center text-sm font-semibold text-slate-900 group-hover:text-[#3bd6c6] transition-colors">
                    Read More{" "}
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* RSS Feed Section (Global Photonics News) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                Industry Radar
              </h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Global Photonics News
              </h3>
              <p className="text-lg text-slate-500 font-light">
                Stay informed with real-time updates from leading photonics
                industry sources.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rssSources.map((source, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 100}
                key={idx}
                distance="30px"
              >
                <a
                  href="#"
                  className="group relative bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between hover:shadow-lg hover:border-[#3bd6c6]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-[#3bd6c6]/10 flex items-center justify-center transition-colors">
                      <Globe className="h-5 w-5 text-slate-400 group-hover:text-[#3bd6c6] transition-colors" />
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {source}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-[#3bd6c6] group-hover:translate-x-1 transition-all" />
                </a>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Connect CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3bd6c6]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Fade bottom duration={800} distance="30px">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
              <Bell className="h-8 w-8 text-[#3bd6c6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-lg text-slate-400 font-light mb-10 leading-relaxed">
              Be the first to know about our latest product releases, clinical
              trial results, strategic partnerships, and industry breakthroughs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#3bd6c6] hover:bg-[#2bbbb0] shadow-[0_0_20px_rgba(59,214,198,0.2)] hover:shadow-[0_0_30px_rgba(59,214,198,0.4)] transition-all duration-300 hover:-translate-y-1">
                Subscribe to Newsletter
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-transparent border border-white/20 hover:bg-white/5 transition-all duration-300">
                Follow our Socials
              </button>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
