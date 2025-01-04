//import { ArrowRight, Code, LineChart, Globe, Shield, Database, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

{/*const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: Code,
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    icon: LineChart,
  },
  {
    title: 'Digital Marketing',
    description: 'Reach your target audience and grow your online presence.',
    icon: Globe,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business with enterprise-grade security solutions.',
    icon: Shield,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: Database,
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance to optimize your technology investments.',
    icon: Phone,
  },
]; */}

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800 mb-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team working"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Solutions
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Comprehensive solutions tailored to your needs. We help you navigate
            the digital landscape and achieve your goals.
          </p>
        </div>
      </div>

      {/* New Solutions Section */}
      <div className="py-16 sm:py-24 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-600 mb-6">
            Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 mb-12">
            At Gloport Photonix Innovations Pvt Ltd, we are dedicated to solving some of the most pressing challenges in healthcare by harnessing the power of photonics technology. Our solutions are designed to improve early disease detection, enhance diagnostics, and enable healthcare providers to deliver more accurate and timely treatments.
          </p>

          {/* Advanced Breath Analyzer Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">Advanced Breath Analyzer for Early Lung Cancer Detection</h3>
            <p className="mt-2 text-gray-600 mb-6">
              One of our flagship products, the Advanced Breath Analyzer, represents a breakthrough in non-invasive
              diagnostic technology. This device uses cutting-edge photoacoustic technology to detect volatile
              organic compounds (VOCs) in exhaled breath, which serve as biomarkers for diseases such as lung
              cancer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Early Detection of Lung Cancer</h4>
                <p>Enables early diagnosis through non-invasive breath samples.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Non-Invasive and Painless</h4>
                <p>Simple breath analysis without traditional invasive methods.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Real-Time Results</h4>
                <p>Provides rapid diagnostic results for timely intervention.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Highly Sensitive and Accurate</h4>
                <p>Detects biomarkers at low concentrations, reducing false positives.</p>
              </div>
            </div>
          </div>

          {/* Next-Generation Photonics Technology Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">Next-Generation Photonics Technology</h3>
            <p className="mt-2 text-gray-600 mb-6">
              At the core of our solutions is our expertise in photonics, the science of using light to measure and
              detect changes at a molecular level. Our innovations in this field have led to the development of
              diagnostic tools that push the boundaries of what's possible in healthcare technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Photoacoustic Spectroscopy</h4>
                <p>Detects disease markers with precision using laser light.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Multi-Wavelength Laser Systems</h4>
                <p>Simultaneous detection of multiple biomarkers for comprehensive analysis.</p>
              </div>
            </div>
          </div>

          {/* Real-Time Data Integration Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">Real-Time Data Integration</h3>
            <p className="mt-2 text-gray-600 mb-6">
              Our solutions don't just stop at diagnostics. We are committed to integrating IoT (Internet of Things) and data analytics into our devices to provide continuous, real-time health monitoring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">IoT-Enabled Devices</h4>
                <p>Transmit real-time data to cloud platforms for remote monitoring.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Data-Driven Healthcare</h4>
                <p>Detect patterns in biomarker data to optimize treatment plans.</p>
              </div>
            </div>
          </div>

          {/* Scalable and Accessible Healthcare Solutions Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">Scalable and Accessible Healthcare Solutions</h3>
            <p className="mt-2 text-gray-600 mb-6">
              Our technology is designed with scalability in mind, adaptable for use in large hospitals as well as rural healthcare facilities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Cost-Effective Solutions</h4>
                <p>Advanced technology that remains accessible to a wide range of providers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Portable and Easy to Use</h4>
                <p>Compact devices ideal for point-of-care applications.</p>
              </div>
            </div>
          </div>

          {/* Expanding Our Reach Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">Expanding Our Reach</h3>
            <p className="mt-2 text-gray-600 mb-6">
              While our current focus is on lung cancer detection, the potential applications of our photonics technology extend far beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Versatile Applications</h4>
                <p>Adaptable technology for various diseases.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold">Collaborative Innovation</h4>
                <p>Partnerships with healthcare providers to enhance solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-600">Let's discuss your project today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get in touch
                {/*<ArrowRight className="ml-2 h-5 w-5" />*/}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}