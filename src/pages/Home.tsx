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
  ArrowLeft,
  ArrowUp,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wave from "../components/Wave.tsx";
import Fade from "react-reveal/Fade";
import Career from "./Career";

// const team = [
//   {
//     name: 'Alok Verma',
//     role: 'CEO',
//     image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
//     bio: 'Over 15 years of experience in technology and business leadership.',
//     social: {
//       twitter: '#',
//       linkedin: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Abhijeet Thakur',
//     role: 'CTO',
//     image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
//     bio: 'Expert in cloud architecture and digital transformation.',
//     social: {
//       twitter: '#',
//       linkedin: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Sanjay Singh',
//     role: 'COO',
//     image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
//     bio: 'Passionate about creating beautiful and intuitive user experiences.',
//     social: {
//       twitter: '#',
//       linkedin: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Jayesh',
//     role: 'Hardware Engineer',
//     image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
//     bio: 'Full-stack developer with expertise in modern web technologies.',
//     social: {
//       twitter: '#',
//       linkedin: '#',
//       github: '#',
//     },
//   },
// ];

// const stats = [
//   { label: 'Years of Experience', value: '15+' },
//   { label: 'Successful Projects', value: '500+' },
//   { label: 'Client Satisfaction', value: '98%' },
//   { label: 'Team Members', value: '50+' },
// ];

export default function Home() {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <Fade bottom duration={500}>
        <section
          id="home"
          className="relative bg-[#3bd6c6] transition-transform duration-500 transform hover:scale-105"
        >
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Hero"
            />
            <div className="absolute inset-0 bg-[#3bd6c6] mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
              <span className="block">
                Revolutionizing Healthcare & Life Sciences through Advanced
                Photonics Technology
              </span>
            </h1>
            <p className="m-4 text-lg font-normal tracking-tight text-white text-center">
              At Gloport Photon<span className="text-red-500">i</span>x, we are
              committed to creating cutting-edge solutions that empower early
              disease detection, drive innovation in medical diagnostics, and
              enhance healthcare outcomes.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="https://forms.gle/C9hvwdtz2QcqPTVL7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#3bd6c6] bg-white hover:bg-[#2c554f] transition duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </Fade>

      {/* Introduction Section */}
      <Fade bottom duration={500}>
        <section
          id="about"
          className="py-16 bg-white transition-transform duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
            <div className="flex-1 text-left">
              <h2 className="text-4xl font-normal text-[#3bd6c6]">
                About Gloport Photon<span className="text-red-500">i</span>x
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-justify">
                Gloport Photon<span className="text-red-500">i</span>x is a
                deep-tech company at the forefront of developing advanced
                healthcare & Life science’s solutions using photonics
                technology. Our mission is to transform the global healthcare
                landscape by enabling early-stage disease detection,
                particularly in cancer diagnostics, and delivering breakthrough
                innovations that push the boundaries of medical science. Our
                technologies are designed to be non-invasive, highly accurate,
                and accessible to healthcare providers worldwide.
              </p>
              <p className="mt-4 text-lg text-gray-600 text-justify">
                We are dedicated to continuous improvement and innovation,
                ensuring that our solutions meet the evolving needs of
                healthcare professionals and patients alike. Our team of experts
                works tirelessly to research and develop new technologies that
                enhance diagnostic capabilities and improve patient outcomes.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
              <img
                src="https://i.postimg.cc/6p34wgKq/3.jpg"
                alt="Gloport Photonix"
                className="w-full h-auto max-w-md bg-[#00ffdf]"
              />
            </div>
          </div>
        </section>
      </Fade>

      {/* Solutions Overview Section */}
      <Fade bottom duration={500}>
        <section
          id="services"
          className="relative py-16 bg-[#3bd6c6] flex flex-col md:flex-row transition-transform duration-300 hover:scale-105"
        >
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Background"
            />
            <div className="absolute inset-0 bg-[#3bd6c6] mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
            <div className="text-left">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Innovative Solutions for Early Detection
              </h2>
              <p className="mt-4 text-lg text-white text-justify">
                Early diagnosis saves lives, and at Gloport Photonix, we are
                pioneering new ways to detect diseases before symptoms arise.
                Our flagship product, the Advanced Photonic Breath Scan,
                leverages photoacoustic technology in exhaled breath with
                unmatched sensitivity.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <Stethoscope className="h-8 w-8 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Non-Invasive Testing
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Our photonic breath scan is designed to provide accurate
                    results without the need for invasive procedures.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Real-Time Diagnostics
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    By harnessing the power of multi-wavelength lasers and
                    advanced signal processing, our technology delivers instant,
                    real-time insights.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Scalable Solutions
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Built to serve both large hospitals and remote healthcare
                    facilities, our products are accessible and adaptable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Mission Section */}
      <Fade bottom duration={500}>
        <section
          id="mission"
          className="py-16 bg-white transition-transform duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
            <div className="flex-1 text-left">
              <h2 className="text-4xl font-normal text-[#3bd6c6]">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-justify">
                At Gloport Photon<span className="text-red-500">i</span>x, we
                believe in the power of innovation to change the world. Our
                mission is to develop photonics-based technologies that not only
                improve healthcare outcomes but also make early diagnostics more
                accessible across diverse populations. Through continuous
                research, collaboration, and technological advancement, we are
                committed to building a future where early-stage disease
                detection is the norm, not the exception.
              </p>
              <Wave />
            </div>
            <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
              <img
                src="https://i.postimg.cc/L5YMTwPg/4.jpg"
                alt="Mission Image"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </section>
      </Fade>

      {/* Technology Section */}
      <Fade bottom duration={500}>
        <section
          id="innovation"
          className="relative py-16 bg-[#f0f4f8] transition-transform duration-300 "
        >
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Background"
            />
            <div className="absolute inset-0 bg-[#3bd6c6] mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Driving Innovation in Healthcare
              </h2>
              <p className="mt-4 text-lg text-white text-justify">
                Our technology solution is set to revolutionize the early
                detection of cancer and other serious conditions, giving
                healthcare providers the tools they need to intervene earlier
                and Utilizing laser-induced acoustic waves to enable precise
                real-time detection of molecular signatures.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Photoacoustic Spectroscopy
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Harnessing sound waves generated by laser-light interactions
                    to detect biomarkers in real time.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <Globe2 className="h-8 w-8 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      IoT-Integrated Systems
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Enabling continuous monitoring and data-driven insights to
                    personalize patient care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Why Choose Us Section */}
      <Fade bottom duration={500}>
        <section
          id="why-us"
          className="py-16 bg-white shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-[#3bd6c6] sm:text-3xl">
                Why Choose Gloport Photon<span className="text-red-500">i</span>
                x?
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-justify">
                With our unique blend of scientific expertise and innovative
                product development, Gloport Photon
                <span className="text-red-500">i</span>x offers revolutionary
                solutions that can redefine healthcare diagnostics. Our advanced
                photonic breath scans are built with a vision to help doctors
                detect diseases earlier, improving survival rates and enhancing
                patient outcomes.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Precision and Accuracy
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Our devices deliver industry-leading accuracy in detecting
                    even the smallest trace of disease markers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                  <div className="flex items-center mb-4">
                    <Globe2 className="h-6 w-6 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Scalability
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    From large healthcare institutions to rural clinics, our
                    solutions are built to scale and adapt to different
                    healthcare environments.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-[#3bd6c6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Global Reach
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">
                    We are committed to making our technology accessible
                    worldwide, ensuring that everyone benefits from advanced
                    diagnostics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* <Zoom>
              <div className="relative bg-[#f0f4f8] py-16 transition-transform duration-300 hover:scale-105">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover"
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      alt="Background"
    />
    <div className="absolute inset-0 bg-[#3bd6c6] mix-blend-multiply" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-lg text-center shadow-md transition duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <p className="text-3xl font-extrabold text-[#3bd6c6]">{stat.value}</p>
          <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>
            </Zoom> */}

      {/* Testimonials Section */}
      <Fade bottom duration={500}>
        <section
          id="testimonial"
          className="py-16 bg-white transition-transform duration-300 hover:scale-105"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-[#3bd6c6] sm:text-3xl">
                What Our Partners Are Saying:
              </h2>
              <Slider
                {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  prevArrow: (
                    <button className="absolute left-0 z-20 p-2 text-black hover:text-gray-600">
                      <ArrowLeft className="h-6 w-6 text-black" />
                    </button>
                  ),
                  nextArrow: (
                    <button className="absolute right-0 z-20 p-2 text-black hover:text-gray-600">
                      <ArrowRight className="h-6 w-6 text-black" />
                    </button>
                  ),
                }}
              >
                <blockquote className="mt-4 text-lg text-gray-600 italic">
                  “Gloport Photonix is on the cutting edge of healthcare
                  innovation. Their focus on early detection technologies will
                  change the way we diagnose and treat diseases worldwide.”
                  <footer className="mt-2 text-gray-500">
                    – Dr. A. Sharma, Chief Medical Officer
                  </footer>
                </blockquote>
                <blockquote className="mt-4 text-lg text-gray-600 italic">
                  “The technology developed by Gloport Photonix has transformed
                  our approach to diagnostics.”
                  <footer className="mt-2 text-gray-500">
                    – Dr. D K Thakur{" "}
                  </footer>
                </blockquote>
                <blockquote className="mt-4 text-lg text-gray-600 italic">
                  “Their commitment to early detection is truly commendable and
                  impactful.”
                  <footer className="mt-2 text-gray-500">
                    – Dr. Pavan Kumar{" "}
                  </footer>
                </blockquote>
              </Slider>
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom duration={500}>
        <section
          id="team"
          className="relative bg-[#3bd6c6] transition-transform duration-300 hover:scale-105"
        >
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Team"
            />
            <div className="absolute inset-0 bg-[#3bd6c6] mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet Our Team
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Get to know the talented individuals who make our company great.
              We're proud of our diverse team and their expertise.
            </p>
          </div>
        </section>
      </Fade>

      <Fade bottom cascade duration={500}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 bg-white">
          <div
            className="group relative bg-cover bg-center h-[350px] rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/W1TXPLby/Whats-App-Image-2025-01-01-at-15-02-37.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-80 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-100 group-hover:opacity-0 transition duration-500">
              <h3 className="text-lg font-bold">DR. KHALID KHAN </h3>
              <p className="text-2xl font-semibold">FOUNDER & CHAIRMAN</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-lg text-center">
                ⁠Dr. Khalid Khan is a reputed entrepreneur & philanthropist with
                over four decades of experience of creating value across India &
                abroad. He is Founder & Chairman of the Gloport group of
                companies.
              </p>
            </div>
          </div>

          <div
            className="group relative bg-cover bg-center h-[350px] rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/fRVGPkr7/PHOTO-2019-07-24-10-01-41-jpg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-80 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-100 group-hover:opacity-0 transition duration-500">
              <h3 className="text-lg font-bold">MR. ABHIJEET THAKUR</h3>
              <p className="text-2xl font-semibold">FOUNDER & CEO</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-lg text-center">
                With a career spanning over 28 years, Abhijeet has excelled
                across diverse sectors, including IT, Banking, Cloud, AI,
                Insurance, Electronics, and Electric Vehicle (EV) subsystems.
              </p>
            </div>
          </div>

          <div
            className="group relative bg-cover bg-center h-[350px] rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/52gp47X2/Whats-App-Image-2025-01-01-at-15-02-37-1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-80 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-100 group-hover:opacity-0 transition duration-500">
              <h3 className="text-lg font-bold">MRS. BUSHRA KHAN</h3>
              <p className="text-2xl font-semibold">FOUNDER & CFO</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-lg text-center">
                With over 12 years of distinguished experience in financial
                management, she has established herself as a powerhouse in
                financial strategy, investment control, and operational
                excellence.
              </p>
            </div>
          </div>

          <div
            className="group relative bg-cover bg-center h-[350px] rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/LXVm1G7b/Whats-App-Image-2025-03-04-at-23-07-35.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-80 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-100 group-hover:opacity-0 transition duration-500">
              <h3 className="text-lg font-bold">MR. SANJAY SINGH</h3>
              <p className="text-2xl font-semibold">FOUNDER & CBO</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-lg text-center">
                He is a seasoned leader with over 27 years of experience in
                business development, strategic marketing, and operational
                growth across India & abroad.
              </p>
            </div>
          </div>

          <div
            className="group relative bg-cover bg-center h-[350px] rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/k4NhXryy/Whats-App-Image-2025-01-08-at-14-16-40.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-80 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-100 group-hover:opacity-0 transition duration-500">
              <h3 className="text-lg font-bold">DR. ALOK VERMA</h3>
              <p className="text-2xl font-semibold">ADVISOR</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-lg text-center">
                He is an eminent scientist in photonics technologies with over
                35 years of R&D experience. He envisions revolutionizing
                healthcare diagnostics through breakthrough photonics
                technologies.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom duration={500}>
        <div className="bg-[#f0f4f8] transition-transform duration-300 hover:scale-105">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#3bd6c6] sm:text-4xl">
              <span className="block">Want to join our team?</span>
              <span className="block text-black">Contact Us</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#3bd6c6] bg-white hover:bg-[#2c554f] transition duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Career />

      <Fade bottom duration={500}>
        <div className="relative bg-[#3bd6c6] transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Contact Us"
            />
            <div className="absolute inset-0 bg-[#3bd6c6] mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-[#ffffff] max-w-3xl">
              We would love to hear from you! Reach out to us for any inquiries.
            </p>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade duration={500}>
        <section
          id="contact-us"
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 transition-transform duration-300"
        >
          <div className="space-y-12">
            {/* Section Header */}
            <h2 className="text-3xl tracking-tight text-[#3bd6c6] sm:text-3xl text-left">
              Contact Details
            </h2>

            {/* Three-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Corporate Office */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between h-full">
                <MapPin className="h-6 w-6 text-[#3bd6c6]" />
                <h3 className="text-lg font-bold text-gray-900">
                  Corporate Office
                </h3>
                <p className="text-gray-600">
                  <span className="text-black">
                    Gloport Photonix Innovations Pvt Ltd
                  </span>
                  <br />
                  21st Floor, 2103 - 2106, Kamdhenu 23 West, TTC Industrial
                  Area, Pawne, Thane Belapur Road, Navi Mumbai, Maharashtra,
                  400710
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-left h-full">
                <Mail className="h-6 w-6 text-[#3bd6c6] mb-1" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-900 text-left">
                  info@gloportphotonix.com
                  <br />
                  career@gloportphotonix.com
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-left h-full">
                <Phone className="h-6 w-6 text-[#3bd6c6] mb-1" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-900 text-left">+91 98333 96290</p>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Map Section */}
      <Fade bottom duration={500}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl tracking-tight text-[#3bd6c6] sm:text-3xl">
            Our Location
          </h2>
          <div className="mt-4">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.179657558912!2d73.0223884!3d19.0947139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1533508abb7%3A0x2a007395760b59ce!2sGloport%20Photonix!5e0!3m2!1sen!2sin!4v1735132689648!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </Fade>

      {/* Call to Action Section */}
      <Fade bottom duration={500}>
        <div className="relative bg-[#3bd6c6] transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Background"
            />
            <div className="absolute inset-0 bg-[#3bd6c6] mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to <span className="text-white">Learn More?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white">
                We’re excited to partner with healthcare providers, researchers,
                and innovators. Explore our technology, contact us for
                collaboration opportunities, or learn how you can benefit from
                our solutions.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link
                  to="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#3bd6c6] bg-white hover:bg-[#2c554f] transition duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-[#3bd6c6] text-white p-3 rounded-full shadow-lg transition duration-300 hover:bg-[#2c554f]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
}
