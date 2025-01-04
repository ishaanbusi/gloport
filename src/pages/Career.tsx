import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';

const positions = [
  {
    title: 'Photonics Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Help develop and refine our cutting-edge photonics technology for medical diagnostics and environmental monitoring.',
  },
  {
    title: 'Biomedical Research Scientist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Research',
    description: 'Conduct research on disease biomarkers and contribute to the development of non-invasive diagnostic tools.',
  },
  {
    title: 'Software Developer (IoT Integration)',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Design and implement IoT systems to connect our devices with real-time monitoring platforms for healthcare providers.',
  },
  {
    title: 'Manufacturing Engineer',
    type: 'Full-time',
    location: 'On-site',
    department: 'Manufacturing',
    description: 'Oversee the production and assembly of our medical devices, ensuring efficiency, quality, and scalability.',
  },
  {
    title: 'Product Manager',
    type: 'Full-time',
    location: 'New York, NY',
    department: 'Product',
    description: 'Lead the development and commercialization of new products, working closely with R&D and marketing teams.',
  },
];

const benefits = [
  'Competitive salary and equity',
  'Health, dental, and vision insurance',
  'Unlimited PTO',
  'Remote work options',
  'Professional development budget',
  'Company-sponsored events',
  'Wellness programs',
  '401(k) matching',
];

export default function Career() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Office"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Join Our Team
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Build your career with us and be part of an innovative team that's shaping
            the future of technology.
          </p>
        </div>
      </div>

      {/* Careers Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-600">
            Careers at Gloport Photonix Innovations Pvt Ltd
          </h2>
          <p className="text-lg text-gray-700">
            At Gloport Photonix Innovations Pvt Ltd, we are driven by a passion for innovation, science, and creating meaningful change in the healthcare and technology industries. If you’re looking for a career that challenges you, inspires creativity, and allows you to be part of groundbreaking work in photonics technology, you’ve come to the right place.
          </p>
          <h3 className="text-2xl font-bold text-indigo-500">Join Our Team of Pioneers</h3>
          <p className="text-lg text-gray-700">
            As a leader in deep-tech and medical diagnostics, we are always looking for talented, motivated, and forward-thinking individuals who are ready to push the boundaries of what’s possible. Whether you're a scientist, engineer, technologist, or business professional, you’ll have the opportunity to work on cutting-edge solutions that make a real difference in healthcare, environmental safety, and beyond.
          </p>
          <p className="text-lg text-gray-700">
            At Gloport Photonix, we are not just developing products—we are shaping the future of diagnostics and creating a healthier, more sustainable world. Join us as we revolutionize healthcare with photonics technology.
          </p>
          <h3 className="text-2xl font-bold text-indigo-500">Why Work with Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <strong>Innovation at the Core:</strong> At Gloport Photonix, we believe that innovation is more than just a word—it’s a mindset. Every member of our team is encouraged to think creatively, take risks, and explore new ideas.
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <strong>Impactful Work:</strong> We are solving some of the world’s most pressing healthcare challenges. Your work here will not only drive technological breakthroughs but also improve lives on a global scale.
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <strong>A Culture of Collaboration:</strong> Our success is built on collaboration—across teams, disciplines, and industries. At Gloport Photonix, you’ll be part of a community where everyone’s contribution is valued.
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <strong>Continuous Learning and Growth:</strong> We are committed to the growth and development of our employees. You’ll have access to learning opportunities, training programs, and career development resources.
            </div>
          </div>
          <h3 className="text-2xl font-bold text-indigo-500">Who We’re Looking For</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              Innovators who thrive in solving complex challenges with creative solutions.
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              Collaborators who believe in teamwork and value diverse perspectives.
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              Visionaries who are eager to contribute to technologies that will shape the future of healthcare and beyond.
            </div>
          </div>
          <div className="space-y-12 !text-left">
  <div className="space-y-5 text-indigo-500 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
      Current Openings
    </h2>
    <p className="text-xl text-gray-500">
      Explore the exciting career opportunities available at Gloport Photonix Innovations Pvt Ltd. We are looking for talented professionals to join us in various roles, including:
    </p>
  </div>
  <div className="space-y-4">
    {positions.map((position) => (
      <div
        key={position.title}
        className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900">{position.title}</p>
          <div className="flex items-center space-x-6 mt-2">
            <div className="flex items-center text-sm text-gray-500">
              <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4" />
              {position.department}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4" />
              {position.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="flex-shrink-0 mr-1.5 h-4 w-4" />
              {position.type}
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">{position.description}</p>
        </div>
        <div className="flex-shrink-0">
          <ArrowRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    ))}
  </div>
</div>

          <p className="text-lg text-gray-700">
            Don’t see a role that fits your expertise? We’re always interested in meeting talented individuals. Feel free to send your resume to <a href="mailto:careers@gloportphotonix.com" className="text-indigo-600 underline">careers@gloportphotonix.com</a> for future opportunities.
          </p>
          <h3 className="text-2xl font-bold text-indigo-500">Employee Benefits</h3>
          <p className="text-lg text-gray-700">
            At Gloport Photonix, we believe that taking care of our employees is just as important as the work we do. We offer a comprehensive benefits package that supports your health, well-being, and career growth:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-indigo-500">Life at Gloport Photonix</h3>
          <p className="text-lg text-gray-700">
            We are more than just a workplace—we’re a community of thinkers, creators, and innovators. We celebrate our successes together, support each other through challenges, and continually strive to create a workplace that fosters both personal and professional growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <strong>An Inclusive Environment:</strong> We value diversity and are committed to creating an inclusive environment where everyone feels empowered to contribute their best ideas.
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <strong>Meaningful Work:</strong> Our projects aren’t just about technology; they’re about improving people’s lives and making a real difference in the world.
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <strong>A Global Reach:</strong> Be part of a team that’s solving healthcare challenges across the globe, from advanced medical institutions to underserved communities.
            </div>
          </div>
          <h3 className="text-2xl font-bold text-indigo-500">Join Us and Shape the Future</h3>
          <p className="text-lg text-gray-700">
            If you’re ready to be part of a team that’s redefining healthcare and pushing the boundaries of photonics technology, we’d love to hear from you. Explore our current openings or send us your resume to be considered for future opportunities.
          </p>
          <div className="flex space-x-4">
            <a href="#openings" className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition duration-200">
              Explore Current Openings
            </a>
            <a href="mailto:careers@gloportphotonix.com" className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition duration-200">
              Submit Your Resume
            </a>
          </div>
        </div>
      </div>
      

      {/* Benefits Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Benefits & Perks
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We offer competitive compensation and great benefits to help you thrive
              both personally and professionally.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {benefit}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}