import { MapPin, Phone, Mail } from "lucide-react";

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
              <p className="text-gray-600">
                Gloport Photonix Innovations Pvt Ltd 21st Floor, 2103 - 2106,
                Kamdhenu 23 West, TTC Industrial Area, Pawne, Thane Belapur
                Road, Navi Mumbai, Maharashtra, 400710
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <Phone className="h-6 w-6 text-indigo-500" />
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
              <p className="text-gray-600">+91 98333 96290</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <Mail className="h-6 w-6 text-indigo-500" />
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
              <p className="text-gray-600">info@gloportphotonix.com</p>
              <p className="text-gray-600">career@gloportphotonix.com</p>
            </div>
          </div>

          {/* Map Section */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
                Visit Us
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Our Location
              </h2>

              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Visit our office and meet our team. We're always happy to
                discuss new ideas, collaborations, and opportunities.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
              <div className="relative w-full h-[350px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.261835594617!2d73.01434067387554!3d19.096165951341828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1533508abb7%3A0x2a007395760b59ce!2sGloport%20Photonix!5e0!3m2!1sen!2sin!4v1780130085103!5m2!1sen!2sin"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 md:p-8 bg-gradient-to-r from-indigo-50 to-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Gloport Photonix Innovations Pvt Ltd
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Schedule a visit or reach out to our team for business
                      inquiries.
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
