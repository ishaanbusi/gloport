import { ArrowRight, Calendar, Globe, Award } from 'lucide-react';

const newsArticles = [
  {
    title: 'Gloport Photonix Unveils Advanced Breath Analyzer for Early Lung Cancer Detection',
    date: 'January 15, 2025',
    description: 'We are excited to announce the launch of our Advanced Breath Analyzer, a breakthrough in noninvasive diagnostics for the early detection of lung cancer. This cutting-edge device leverages photoacoustic technology to detect biomarkers in exhaled breath, providing real-time diagnostic results without the need for invasive procedures. The launch marks a significant milestone in our journey to improve early-stage cancer detection, making it easier for healthcare providers to deliver timely interventions.',
    category: 'Product Launch'
  },
  {
    title: 'Partnership with Leading Healthcare Institutions for Clinical Trials',
    date: 'February 1, 2025',
    description: 'In our ongoing commitment to innovation, Gloport Photonix has partnered with several leading healthcare institutions to conduct clinical trials for our breath analyzer. These trials will assess the device\'s effectiveness in real-world healthcare settings, focusing on its ability to detect early-stage lung cancer and other respiratory diseases. The collaboration aims to gather valuable clinical data that will help bring our life-saving technology to patients across the globe.',
    category: 'Research Collaboration'
  },
  {
    title: 'Gloport Photonix Expands into Environmental Monitoring Sector',
    date: 'March 10, 2025',
    description: 'We are proud to announce that Gloport Photonix is expanding its technology into the environmental monitoring sector. With the ability to detect trace amounts of volatile organic compounds (VOCs) and other harmful pollutants, our technology is being adapted to monitor air quality in urban and industrial environments. This expansion will support both public health initiatives and industrial safety programs, helping governments and organizations ensure compliance with environmental regulations.',
    category: 'Technology Expansion'
  },
  {
    title: 'Recognized as a Top Innovator in Medical Diagnostics',
    date: 'April 5, 2025',
    description: 'Gloport Photonix Innovations Pvt Ltd has been recognized as one of the top innovators in the field of medical diagnostics by a leading industry publication. This recognition highlights our pioneering work in the development of non-invasive diagnostic tools and our commitment to improving patient outcomes through early detection technologies. We are honored to be acknowledged for our contributions to the healthcare industry and remain dedicated to pushing the boundaries of what\'s possible in diagnostics.',
    category: 'Industry Recognition'
  },
  {
    title: 'Gloport Photonix Announces Participation in Global Healthcare Conference',
    date: 'May 20, 2025',
    description: 'We are excited to announce our participation in the upcoming Global Healthcare Innovation Conference, where we will showcase our latest advancements in photonics-based healthcare solutions. Our team will be presenting the groundbreaking capabilities of our breath analyzers and sharing insights on the future of early disease detection. Join us at this event to learn more about how our technology is shaping the future of healthcare diagnostics.',
    category: 'Conference Participation'
  },
  {
    title: 'Expanding Production Capacity to Meet Global Demand',
    date: 'June 15, 2025',
    description: 'With the growing demand for our breath analyzer technology, Gloport Photonix is scaling up production to meet the needs of healthcare providers globally. Our newly expanded production facility will allow us to manufacture more units per month, ensuring that our diagnostic devices reach more hospitals and clinics worldwide. This expansion will also support the ongoing development of new products aimed at addressing additional diseases and healthcare challenges.',
    category: 'Business Expansion'
  },
  {
    title: 'Gloport Photonix Secures Series A Funding to Accelerate Innovation',
    date: 'July 25, 2025',
    description: 'We are thrilled to announce the successful completion of our Series A funding round, raising substantial capital to accelerate our research and development efforts. This funding will enable us to expand our product line, enhance our technology, and scale our business operations globally. With these new resources, we are poised to take our innovations to the next level and continue leading the charge in photonics-driven healthcare solutions.',
    category: 'Funding'
  }
];

const rssSources = [
  'Photonics.com',
  'Laser Focus World',
  'Optics.org',
  'SPIE Newsroom'
];

export default function News() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="News and Updates"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            News & Updates
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Stay informed about the latest innovations, breakthroughs, and milestones at Gloport Photonix Innovations
          </p>
        </div>
      </div>

      {/* News Articles Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-600">
            Latest Announcements
          </h2>
          <div className="space-y-4">
            {newsArticles.map((article) => (
              <div
                key={article.title}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium text-gray-900">{article.title}</p>
                  <div className="flex items-center space-x-6 mt-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="flex-shrink-0 mr-1.5 h-4 w-4" />
                      {article.category}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{article.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RSS Feed Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Global Photonics News
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Stay informed with real-time updates from leading photonics industry sources
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rssSources.map((source) => (
              <div key={source} className="relative rounded-lg border border-gray-300 bg-white p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-indigo-500 mr-3" />
                  <p className="text-lg font-medium text-gray-900">{source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter and Social Media Section */}
      <div className="bg-indigo-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Stay Connected
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Be the first to know about our latest product releases, partnerships, and industry breakthroughs
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="#" 
              className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition duration-200"
            >
              Subscribe to Newsletter
            </a>
            <a 
              href="#" 
              className="inline-block px-6 py-3 text-indigo-600 bg-white border border-indigo-600 rounded-md shadow hover:bg-indigo-50 transition duration-200"
            >
              Follow on Social Media
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
