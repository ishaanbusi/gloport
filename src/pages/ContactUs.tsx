import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Contact Us"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            We would love to hear from you! Reach out to us for any inquiries.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-600">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <MapPin className="h-6 w-6 text-indigo-500" />
              <h3 className="text-lg font-bold text-gray-900">Address</h3>
              <p className="text-gray-600">1401, VJ Builders, Hinjawadi Phase 2 Rd, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411053</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <Phone className="h-6 w-6 text-indigo-500" />
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <Mail className="h-6 w-6 text-indigo-500" />
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
              <p className="text-gray-600">info@gloportphotonix.com</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-600">
              Our Location
            </h2>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.509009235095!2d73.7153778!3d18.596161699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbaf62357d1%3A0x9093b6d9c4cb554a!2sBitance%20Labs!5e0!3m2!1sen!2sin!4v1734503341303!5m2!1sen!2sin"
                width={800} height={600} style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
