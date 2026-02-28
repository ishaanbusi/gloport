import {
  ArrowRight,
  Zap,
  Target,
  Globe2,
  Heart,
  MapPin,
  Mail,
  Stethoscope,
  Globe,
  Phone,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-[#3bd6c6] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Modernized */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
          <video
            className="w-full h-full object-cover"
            src="/videos/hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3bd6c6]/70 via-[#2c554f]/60 to-black/80" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
            <Stethoscope className="h-4 w-4 text-white" />
            <span className="text-sm text-white font-medium">
              Advanced Photonics Technology
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-tight animate-slide-up">
            Revolutionizing Healthcare
            <span className="block text-[#3bd6c6] mt-2">Through Photonics</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed animate-slide-up-delay">
            Empowering early disease detection and driving innovation in medical
            diagnostics with cutting-edge photonics solutions.
          </p>

          {/* Stats Row */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl">
            {[
              { value: "98%", label: "Accuracy" },
              { value: "50+", label: "Innovations" },
              { value: "35+", label: "Years Expertise" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/C9hvwdtz2QcqPTVL7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-[#3bd6c6] hover:bg-[#2c554f] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-[#3bd6c6] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#2c554f] transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#3bd6c6] to-[#2c554f] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500" />
              <img
                src="https://i.postimg.cc/6p34wgKq/3.jpg"
                alt="Gloport Photonix"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-[#3bd6c6]" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">35+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bd6c6]/10 rounded-full mb-6">
                <Heart className="h-4 w-4 text-[#3bd6c6]" />
                <span className="text-sm font-semibold text-[#3bd6c6]">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Leading the Future of
                <span className="text-[#3bd6c6]"> Healthcare Innovation</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Gloport Photon<span className="text-red-500">i</span>x is a
                deep-tech company pioneering advanced healthcare solutions using
                photonics technology. We're transforming global healthcare
                through early-stage disease detection, particularly in cancer
                diagnostics.
              </p>

              {/* Feature List */}
              <div className="mt-8 space-y-4">
                {[
                  "Non-invasive diagnostic solutions",
                  "Highly accurate photonics technology",
                  "Accessible to healthcare providers worldwide",
                  "Continuous innovation and improvement",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#3bd6c6] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#services"
                className="inline-flex items-center gap-2 mt-8 text-[#3bd6c6] font-semibold hover:gap-4 transition-all duration-300"
              >
                Explore Our Solutions
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Card Grid */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bd6c6]/10 rounded-full mb-6">
              <Zap className="h-4 w-4 text-[#3bd6c6]" />
              <span className="text-sm font-semibold text-[#3bd6c6]">
                Our Solutions
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Innovative Solutions for
              <span className="block text-[#3bd6c6]">Early Detection</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Advanced Photonic Breath Scan leveraging photoacoustic technology
              with unmatched sensitivity for early diagnosis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Non-Invasive Testing",
                description:
                  "Accurate results without invasive procedures, ensuring patient comfort and safety.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Real-Time Diagnostics",
                description:
                  "Multi-wavelength lasers and advanced signal processing deliver instant insights.",
                color: "from-[#3bd6c6] to-[#2c554f]",
              },
              {
                icon: Globe,
                title: "Scalable Solutions",
                description:
                  "Accessible to large hospitals and remote healthcare facilities worldwide.",
                color: "from-purple-500 to-pink-500",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Asymmetric Layout */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Content - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bd6c6]/10 rounded-full mb-6">
                <Target className="h-4 w-4 text-[#3bd6c6]" />
                <span className="text-sm font-semibold text-[#3bd6c6]">
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Building a Future Where
                <span className="block text-[#3bd6c6]">
                  Early Detection is Standard
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We believe in the power of innovation to transform healthcare.
                Through continuous research, collaboration, and technological
                advancement, we're making early diagnostics accessible across
                diverse populations worldwide.
              </p>

              {/* Mission Values */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Heart, label: "Patient-Centered" },
                  { icon: TrendingUp, label: "Innovation-Driven" },
                  { icon: Users, label: "Collaborative Approach" },
                  { icon: Globe2, label: "Global Accessibility" },
                ].map((value, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#3bd6c6]/5 transition-colors duration-300"
                  >
                    <value.icon className="h-6 w-6 text-[#3bd6c6]" />
                    <span className="font-semibold text-gray-900">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image - Takes 2 columns */}
            <div className="lg:col-span-2">
              <img
                src="https://i.postimg.cc/L5YMTwPg/4.jpg"
                alt="Mission"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Feature Highlight */}
      <section id="innovation" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3bd6c6] to-[#2c554f]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] " />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Driving Innovation in Healthcare
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Revolutionary technology for early cancer detection and serious
              condition diagnosis, powered by advanced photonics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Photoacoustic Spectroscopy",
                description:
                  "Laser-induced acoustic waves enable precise real-time detection of molecular signatures and biomarkers.",
              },
              {
                icon: Globe2,
                title: "IoT-Integrated Systems",
                description:
                  "Continuous monitoring and data-driven insights to personalize patient care and improve outcomes.",
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white hover:scale-105 transition-all duration-300"
              >
                <tech.icon className="h-12 w-12 text-white group-hover:text-[#3bd6c6] mb-6 transition-colors" />
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-900 mb-4 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-white/80 group-hover:text-gray-600 leading-relaxed transition-colors">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefit Cards */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bd6c6]/10 rounded-full mb-6">
              <Award className="h-4 w-4 text-[#3bd6c6]" />
              <span className="text-sm font-semibold text-[#3bd6c6]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              The Gloport Photon<span className="text-red-500">i</span>x
              <span className="block text-[#3bd6c6]">Advantage</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Scientific expertise and innovative product development redefining
              healthcare diagnostics worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Precision & Accuracy",
                description:
                  "Industry-leading accuracy detecting even the smallest trace of disease markers.",
                stat: "98%",
                statLabel: "Accuracy Rate",
              },
              {
                icon: Globe2,
                title: "Scalability",
                description:
                  "Built to scale from large healthcare institutions to rural clinics worldwide.",
                stat: "50+",
                statLabel: "Healthcare Partners",
              },
              {
                icon: Heart,
                title: "Global Reach",
                description:
                  "Making advanced diagnostics accessible worldwide, ensuring everyone benefits.",
                stat: "100+",
                statLabel: "Countries Served",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#3bd6c6] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-[#3bd6c6]/10 rounded-xl group-hover:bg-[#3bd6c6] transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-[#3bd6c6] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#3bd6c6]">
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-gray-500">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Slider */}
      <section
        id="testimonial"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bd6c6]/10 rounded-full mb-6">
              <Users className="h-4 w-4 text-[#3bd6c6]" />
              <span className="text-sm font-semibold text-[#3bd6c6]">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              What Our Partners Say
            </h2>
          </div>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            arrows={false}
            className="testimonial-slider"
          >
            {[
              {
                quote:
                  "Gloport Photonix is on the cutting edge of healthcare innovation. Their focus on early detection technologies will change the way we diagnose and treat diseases worldwide.",
                author: "Dr. A. Sharma",
                role: "Chief Medical Officer",
              },
              {
                quote:
                  "The technology developed by Gloport Photonix has transformed our approach to diagnostics.",
                author: "Dr. D K Thakur",
                role: "Medical Director",
              },
              {
                quote:
                  "Their commitment to early detection is truly commendable and impactful.",
                author: "Dr. Pavan Kumar",
                role: "Healthcare Consultant",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-white p-10 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-xl text-gray-700 text-center leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3bd6c6] to-[#2c554f] flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Team Section - Enhanced Cards */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bd6c6]/10 rounded-full mb-6">
              <Users className="h-4 w-4 text-[#3bd6c6]" />
              <span className="text-sm font-semibold text-[#3bd6c6]">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Meet the Visionaries Behind
              <span className="block text-[#3bd6c6]">Our Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "MR. ABHIJEET THAKUR",
                role: "FOUNDER & CEO",
                image:
                  "https://i.postimg.cc/fRVGPkr7/PHOTO-2019-07-24-10-01-41-jpg.jpg",
                bio: "28+ years of experience across IT, Banking, Cloud, AI, Insurance, Electronics, and EV subsystems.",
              },
              {
                name: "DR. ALOK VERMA",
                role: "FOUNDER & CTO",
                image:
                  "https://i.postimg.cc/k4NhXryy/Whats-App-Image-2025-01-08-at-14-16-40.jpg",
                bio: "Eminent photonics scientist with 35+ years of R&D experience revolutionizing healthcare diagnostics.",
              },
              {
                name: "MR. SANJAY SINGH",
                role: "FOUNDER & CBO",
                image:
                  "https://i.postimg.cc/LXVm1G7b/Whats-App-Image-2025-03-04-at-23-07-35.jpg",
                bio: "27+ years in business development, strategic marketing, and operational growth across India & abroad.",
              },
              {
                name: "DR. KHALID KHAN",
                role: "FOUNDER & CHAIRMAN",
                image:
                  "https://i.postimg.cc/W1TXPLby/Whats-App-Image-2025-01-01-at-15-02-37.jpg",
                bio: "Renowned entrepreneur & philanthropist with 40+ years creating value globally, Founder & Chairman of Gloport group.",
              },
              {
                name: "MRS. BUSHRA KHAN",
                role: "FOUNDER & CFO",
                image:
                  "https://i.postimg.cc/52gp47X2/Whats-App-Image-2025-01-01-at-15-02-37-1.jpg",
                bio: "12+ years in financial management, specializing in financial strategy, investment control, and operational excellence.",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Default State */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-full">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-[#3bd6c6] font-semibold">
                    {member.role}
                  </p>
                </div>

                {/* Hover State */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3bd6c6] to-[#2c554f] p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Join Team */}
      <section className="py-20 bg-gradient-to-br from-[#3bd6c6] to-[#2c554f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Be part of a revolutionary team transforming healthcare through
            innovation.
          </p>
          <a
            href="https://forms.gle/C9hvwdtz2QcqPTVL7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3bd6c6] font-semibold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Contact Section - Modern Grid */}
      <section id="contact-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bd6c6]/10 rounded-full mb-6">
              <Mail className="h-4 w-4 text-[#3bd6c6]" />
              <span className="text-sm font-semibold text-[#3bd6c6]">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We'd love to hear from you. Reach out for any inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Corporate Office",
                content: (
                  <>
                    <span className="font-semibold block mb-2">
                      Gloport Photonix Innovations Pvt Ltd
                    </span>
                    21st Floor, 2103 - 2106, Kamdhenu 23 West, TTC Industrial
                    Area, Pawne, Thane Belapur Road, Navi Mumbai, Maharashtra,
                    400710
                  </>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <div className="space-y-2">
                    <a
                      href="mailto:info@gloportphotonix.com"
                      className="block text-[#3bd6c6] hover:underline"
                    >
                      info@gloportphotonix.com
                    </a>
                    <a
                      href="mailto:career@gloportphotonix.com"
                      className="block text-[#3bd6c6] hover:underline"
                    >
                      career@gloportphotonix.com
                    </a>
                  </div>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <a
                    href="tel:+919833396290"
                    className="text-[#3bd6c6] hover:underline text-lg font-semibold"
                  >
                    +91 98333 96290
                  </a>
                ),
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#3bd6c6] hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#3bd6c6]/10 mb-6">
                  <contact.icon className="h-6 w-6 text-[#3bd6c6]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {contact.title}
                </h3>
                <div className="text-gray-600 leading-relaxed">
                  {contact.content}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.179657558912!2d73.0223884!3d19.0947139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1533508abb7%3A0x2a007395760b59ce!2sGloport%20Photonix!5e0!3m2!1sen!2sin!4v1735132689648!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3bd6c6]/95 to-[#2c554f]/95" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Partner with healthcare providers, researchers, and innovators.
            Explore our technology and discover how our solutions can benefit
            you.
          </p>
          <Link
            to="https://forms.gle/C9hvwdtz2QcqPTVL7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3bd6c6] font-semibold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button - Enhanced */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#3bd6c6] text-white p-4 rounded-full shadow-2xl hover:bg-[#2c554f] hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Scroll to top"
      >
        <svg
          className="h-6 w-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Add Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(15px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .testimonial-slider .slick-dots li button:before {
          color: #3bd6c6;
        }

        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #3bd6c6;
        }
      `}</style>
    </>
  );
}
