import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  HeartHandshake,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
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
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-slate-900 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Gloport Photonix Office"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-white"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-4">
              Our Story
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-lg">
              Pioneering the Future of{" "}
              <span className="text-[#3bd6c6]">Medical Diagnostics</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              We're a team of passionate individuals dedicated to delivering
              innovative deep-tech solutions that transform global healthcare.
            </p>
          </Fade>
        </div>
      </section>

      {/* Main About Text */}
      <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Fade bottom duration={800} distance="30px">
            <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed">
              At{" "}
              <strong className="font-semibold text-slate-900">
                Gloport Photon
                <span className="text-red-500 font-medium">i</span>x
              </strong>
              , we are a pioneering deep-tech company driven by a mission to
              transform healthcare through the power of photonics technology.
            </p>
            <p className="mt-6 text-lg text-slate-500 font-light leading-relaxed">
              Our journey began with a singular vision—to make early-stage
              disease detection accessible and effective for everyone,
              regardless of geography or resources. Today, we are proud to be at
              the forefront of medical innovation, developing cutting-edge
              diagnostic tools that empower healthcare providers to detect
              diseases like lung cancer at their earliest stages, when treatment
              is most successful.
            </p>
          </Fade>
        </div>
      </section>

      {/* Vision & Mission - Split Layout */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#3bd6c6]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision */}
            <Fade left duration={800} distance="30px">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 group">
                <div className="w-14 h-14 bg-slate-50 group-hover:bg-[#3bd6c6] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
                  <Eye className="h-7 w-7 text-[#3bd6c6] group-hover:text-white transition-colors duration-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  We envision a world where diseases are detected early,
                  healthcare is accessible to all, and the technology we create
                  improves millions of lives. By leveraging advanced photonics,
                  we aim to deliver solutions that bridge the gap between
                  science and practical healthcare, offering tools that are
                  noninvasive, precise, and scalable.
                </p>
              </div>
            </Fade>

            {/* Mission */}
            <Fade right duration={800} distance="30px">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 group">
                <div className="w-14 h-14 bg-slate-50 group-hover:bg-[#3bd6c6] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
                  <Target className="h-7 w-7 text-[#3bd6c6] group-hover:text-white transition-colors duration-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  To create breakthrough healthcare solutions that revolutionize
                  how diseases are diagnosed and treated. At the core of our
                  innovation is photoacoustic technology, enabling noninvasive,
                  real-time detection of critical biomarkers in human breath.
                  This reduces the need for invasive procedures and drastically
                  improves patient outcomes.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                The Gloport Advantage
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                What Sets Us Apart
              </h3>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation in Photonics",
                desc: "We specialize in harnessing the power of light and sound to detect molecular changes in the human body, making early diagnosis faster and more accurate.",
              },
              {
                title: "Focused on Early Detection",
                desc: "Our flagship product is designed to detect diseases at their earliest stages, giving doctors and patients the tools they need to make informed decisions.",
              },
              {
                title: "Scalable Global Impact",
                desc: "Built to scale across different healthcare environments, from advanced medical centers to rural clinics, ensuring early detection is available to everyone.",
              },
            ].map((feature, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 150}
                key={idx}
                distance="30px"
              >
                <div className="group relative bg-slate-50 p-8 rounded-2xl border border-transparent hover:bg-white hover:border-[#3bd6c6]/20 shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#3bd6c6]/20 flex items-center justify-center mb-6 text-[#3bd6c6] font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
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

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Fade bottom duration={800} distance="30px">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#3bd6c6] mb-3">
                Our DNA
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold">
                Our Core Values
              </h3>
            </div>
          </Fade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Driven by a passion for discovering new solutions to complex healthcare problems.",
              },
              {
                icon: ShieldCheck,
                title: "Integrity",
                desc: "Ethical practices and transparency guide everything we do, from research to development.",
              },
              {
                icon: HeartHandshake,
                title: "Impact",
                desc: "We measure success by the positive change we create in the lives of patients worldwide.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Holding ourselves to the highest standards, ensuring our technologies are reliable and transformative.",
              },
            ].map((value, idx) => (
              <Fade
                bottom
                duration={800}
                delay={idx * 100}
                key={idx}
                distance="30px"
              >
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-[#3bd6c6] hover:bg-slate-800 transition-all duration-300 group">
                  <value.icon className="h-8 w-8 text-[#3bd6c6] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold mb-3 text-white">
                    {value.title}
                  </h4>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Collaboration (Combined for better flow) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <Fade left duration={800} distance="30px">
                <div className="p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    The Minds Behind the Magic
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Behind Gloport Photonix is a team of visionary AI Engineers,
                    Scientists, management experts, and Healthcare
                    professionals. Each brings a unique set of skills to drive
                    our innovations forward. We are passionate about creating
                    technologies that solve critical challenges and improve
                    patient outcomes everywhere.
                  </p>
                </div>
              </Fade>
              <Fade right duration={800} distance="30px">
                <div className="p-12 lg:p-16 bg-[#3bd6c6]/5">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Collaborative Innovation
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    We believe in the power of collaboration. By working closely
                    with leading research institutions, hospitals, and
                    healthcare providers, we ensure our innovations are rooted
                    in practical needs. Together with the best minds in
                    technology, we push the boundaries of diagnostics.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade bottom duration={800} distance="30px">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed">
              We are on a mission to change the future of healthcare, one
              innovation at a time. Whether you are a healthcare provider, a
              researcher, or a patient advocate, we invite you to revolutionize
              healthcare with us.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-white bg-slate-900 hover:bg-[#3bd6c6] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}
