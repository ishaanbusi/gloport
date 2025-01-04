import { Check, Trophy, Users, ThumbsUp, Lightbulb, Search, Globe, Heart, Waves, Mic, BarChart, Filter, Database, Brain, Zap, Globe2 } from 'lucide-react';

const reasons = [
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of various industries and their unique challenges.',
    icon: Trophy,
  },
  {
    title: 'Dedicated Team',
    description: 'Skilled professionals committed to delivering exceptional results.',
    icon: Users,
  },
  {
    title: 'Client Success',
    description: 'Proven track record of helping clients achieve their goals.',
    icon: ThumbsUp,
  },
];

export default function WhyUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why Choose Us
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            We combine expertise, innovation, and dedication to deliver exceptional results
            that drive your business forward.
          </p>
        </div>
      </div>

      

      {/* New Section: Our Videos */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Our Videos
          </h2>
          <p className="text-lg text-gray-700 text-left mb-6">
            Explore our latest videos to learn more about our technology and its impact on healthcare.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-full object-cover"
                src="https://i.postimg.cc/x8wVF5Gx/6.jpg"
                alt="Photo 1"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Photo 2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="bg-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl font-bold text-indigo-500 text-left">
              Our Strengths
            </h2>
            <p className="text-2xl font-bold text-indigo-500 text-left">
              What Sets Us Apart
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="relative bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{reason.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-500">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* New Section: More Insights */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 mb-6">
            More Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="aspect-w-16 aspect-h-9">
            <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Photo 1"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
            <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Photo 1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Why Choose Gloport Photonix */}
      <section className="py-16 bg-indigo-100 flex flex-col md:flex-row">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
    <div className="text-left">
      <h2 className="text-2xl font-bold text-indigo-500">
        What Sets Us Apart
      </h2>
      <p className="mt-4 text-lg text-gray-600 text-justify">
        At Gloport Photonix, we bring cutting-edge photonics technology to healthcare, focusing on early detection and non-invasive diagnostic solutions that are scalable and adaptable to diverse healthcare environments.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-indigo-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">Proven Expertise in Photonics</h3>
          </div>
          <p className="mt-2 text-gray-600">
            We are pioneers in applying photonics technology to solve critical healthcare challenges.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
          <div className="flex items-center mb-4">
            <Search className="h-8 w-8 text-indigo-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">Focus on Early Detection</h3>
          </div>
          <p className="mt-2 text-gray-600">
            Our solutions are designed to diagnose diseases early, when treatment is most effective.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
          <div className="flex items-center mb-4">
            <Heart className="h-8 w-8 text-indigo-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">Non-Invasive and Accurate</h3>
          </div>
          <p className="mt-2 text-gray-600">
            Our tools provide reliable, non-invasive diagnostics, improving patient comfort and outcomes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-indigo-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">Scalable and Adaptable</h3>
          </div>
          <p className="mt-2 text-gray-600">
            Whether for large hospitals or remote clinics, our devices are built to scale and adapt to different healthcare environments.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* New Section: Our Commitment to Better Healthcare */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 mb-6">
            Our Commitment to Better Healthcare
          </h2>
          <p className="text-lg text-gray-700 text-left">
            At Gloport Photonix, we believe that early detection saves lives. Our mission is to develop the next generation of healthcare technology that enables healthcare providers to detect diseases earlier, treat patients more effectively, and ultimately save lives. We are dedicated to pushing the boundaries of what’s possible in medical diagnostics and bringing the power of photonics to healthcare providers worldwide.
          </p>
        </div>
      </div>

      {/* New Section: Technology */}
      <div className="bg-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 mb-6">
            Technology
          </h2>
          <p className="text-lg text-gray-700 text-left">
            At Gloport Photonix Innovations Pvt Ltd, technology is at the heart of everything we do. We leverage the power of photonics, the science of light, to create cutting-edge diagnostic tools that are transforming the healthcare industry. Our innovative technologies are built to provide early, accurate, and non-invasive detection of diseases, enabling healthcare providers to offer better patient outcomes through timely intervention.
          </p>
        </div>
      </div>

      {/* New Section: Photonics: Harnessing the Power of Light */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 mb-6">
            Photonics: Harnessing the Power of Light
          </h2>
          <p className="text-lg text-gray-700 text-left">
            Photonics technology involves the generation, manipulation, and detection of light (photons) to achieve highly accurate measurements at the molecular level. In healthcare, this translates into powerful diagnostic tools that can detect subtle biological changes without the need for invasive procedures.
          </p>
          <p className="text-lg text-gray-700 text-left">
            At Gloport Photonix, we have developed proprietary systems that use photoacoustic spectroscopy—a breakthrough technique that converts light energy into sound waves to detect volatile organic compounds (VOCs) and other disease markers in biological samples like breath. This allows us to detect diseases at their earliest stages, often before symptoms even appear.
          </p>
        </div>
      </div>

      {/* New Section: Photoacoustic Technology: How It Works */}
      <section className="bg-indigo-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-indigo-500 mb-6">
      Photoacoustic Technology: How It Works
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Lightbulb className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Laser Light Absorption</h3>
        </div>
        <p className="mt-2 text-gray-600">
          Our devices use precisely tuned multi-wavelength lasers to emit light into a biological sample (such as a patient’s breath). When this light is absorbed by specific molecules (e.g., VOCs), it causes them to vibrate at a molecular level.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Waves className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Sound Wave Generation</h3>
        </div>
        <p className="mt-2 text-gray-600">
          As these molecules absorb the light, they generate tiny acoustic waves. This is the core of the photoacoustic effect, where light energy is converted into sound. These sound waves are directly proportional to the concentration of specific biomarkers present in the sample.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Mic className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Acoustic Detection</h3>
        </div>
        <p className="mt-2 text-gray-600">
          Our highly sensitive acoustic sensors detect these sound waves and convert them into electronic signals. By analyzing the amplitude and frequency of the sound waves, we can determine the presence and concentration of specific disease markers, offering real-time insights into the patient’s health.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <BarChart className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Multi-Wavelength Advantage</h3>
        </div>
        <p className="mt-2 text-gray-600">
          One of the key innovations in our technology is the use of multi-wavelength laser systems, which allow us to detect multiple biomarkers simultaneously. This provides a more comprehensive analysis, as we can target different molecules associated with various diseases, all within a single diagnostic session.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* New Section: Advanced Signal Processing and Data Analysis */}
      <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-indigo-500 mb-6">
      Advanced Signal Processing and Data Analysis
    </h2>
    <p className="text-lg text-gray-700 text-left mb-8">
      Collecting data from light and sound is just the first step. To deliver highly accurate and reliable diagnostic results, our technology integrates advanced signal processing and data analysis algorithms that transform raw data into meaningful health insights.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Filter className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Signal Processing</h3>
        </div>
        <p className="mt-2 text-gray-600">
          Once our sensors capture the acoustic signals generated by light absorption, we use sophisticated signal processing techniques to filter out noise and isolate the relevant data. This ensures that we achieve high sensitivity in detecting even the smallest traces of disease biomarkers.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Database className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Data Analytics</h3>
        </div>
        <p className="mt-2 text-gray-600">
          The processed data is then analyzed using our custom algorithms that compare the detected biomarkers against a comprehensive library of known disease markers. This allows for quick identification of patterns and provides healthcare professionals with actionable insights in real-time.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Brain className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Machine Learning Integration</h3>
        </div>
        <p className="mt-2 text-gray-600">
          As we continue to gather more data from our devices in the field, we are integrating machine learning algorithms to continuously improve our diagnostic capabilities. By learning from past diagnostic data, our system becomes smarter and more accurate over time, reducing the risk of false positives and negatives.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-indigo-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-indigo-500 mb-6">
    IoT-Enabled Diagnostics for Real-Time Monitoring    </h2>
    <p className="text-lg text-gray-700 text-left mb-8">
    At Gloport Photonix, we don’t stop at just diagnostics. Our solutions are designed to provide continuous, real-time monitoring through IoT (Internet of Things) integration. This enables healthcare providers to track a patient’s health over time and make data-driven decisions.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Filter className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Seamless Connectivity:</h3>
        </div>
        <p className="mt-2 text-gray-600">
        Our devices are equipped with IoT modules that allow them to securely transmit diagnostic data to cloud-based platforms in real-time. Healthcare providers can access this data from anywhere, enabling remote monitoring and ensuring that patients receive the care they need, even outside of traditional healthcare settings.
          </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        <div className="flex items-center mb-4">
          <Database className="h-8 w-8 text-indigo-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Predictive Health Insights:</h3>
        </div>
        <p className="mt-2 text-gray-600">
        By continuously monitoring biomarker data over time, our technology provides predictive insights that can help detect disease progression or early warning signs of health deterioration. This not only supports early intervention but also enables personalized healthcare strategies tailored to each patient.
          </p>
      </div>
      </div>
  </div>
</section>

{/* New Section: Scalable and Portable Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-500">
            Scalable and Portable Technology
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-justify">
            Our approach to technology development focuses on creating solutions that are scalable, portable, and adaptable to a wide range of healthcare environments. We understand that healthcare providers need diagnostic tools that can perform in both large hospitals and smaller, rural clinics.</p>  
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-indigo-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Compact, User-Friendly Devices</h3>
                </div>
                <p className="mt-2 text-gray-600">Our devices are designed to be compact and easy to use, ensuring that they can be deployed in any healthcare setting. With intuitive interfaces and minimal training required, our breath analyzers are built for point-of-care diagnostics.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <div className="flex items-center mb-4">
                  <Globe2 className="h-8 w-8 text-indigo-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Cost-Effective Innovation: </h3>
                </div>
                <p className="mt-2 text-gray-600">While our technology is advanced, we are committed to ensuring that it remains cost-effective. This allows healthcare providers in both well-funded institutions and under-resourced clinics to benefit from early diagnostic capabilities without compromising quality or performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Expanding the Possibilities of Photonics in Healthcare */}
      <section className="py-16 bg-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-500">
            Expanding the Possibilities of Photonics in Healthcare
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-justify">
            While our current focus is on developing innovative breath analyzers for early cancer detection, the potential applications of our photonics technology extend far beyond. We are actively researching and developing new diagnostic tools that can detect a wide variety of diseases, including respiratory, cardiovascular, and metabolic conditions.
</p><div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-indigo-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Future of Diagnostics:</h3>
                </div>
                <p className="mt-2 text-gray-600">Our research is constantly pushing the boundaries of what photonics can achieve in healthcare. From detecting infections to monitoring chronic diseases, the versatility of our technology opens up new possibilities for improving healthcare outcomes on a global scale.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <div className="flex items-center mb-4">
                  <Globe2 className="h-8 w-8 text-indigo-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Collaborative Development: </h3>
                </div>
                <p className="mt-2 text-gray-600">We are committed to working with healthcare providers, researchers, and innovators to continually refine and expand our technology. By collaborating with experts across the industry, we ensure that our solutions remain at the cutting edge of healthcare innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Why Our Technology Matters */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 mb-6">
            Why Our Technology Matters
          </h2>
          <p className="text-lg text-gray-700 text-left">
            At Gloport Photonix, we believe that early detection saves lives. By leveraging photonics to detect diseases at their molecular level, we are creating tools that empower healthcare providers to act quickly, accurately, and with confidence. Our technology is built to make healthcare diagnostics faster, less invasive, and more accessible to everyone, ensuring better outcomes for patients worldwide.
          </p>
        </div>
      </div>

      {/* New Section: Industries & Applications */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 mb-6">
            Industries & Applications
          </h2>
          <p className="text-lg text-gray-700 text-left">
            At Gloport Photonix Innovations Pvt Ltd, our advanced photonics technology is designed to serve a wide range of industries by providing innovative diagnostic solutions that are fast, non-invasive, and highly accurate. From healthcare to environmental monitoring, our solutions are transforming the way critical challenges are addressed across various fields.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-8">1. Healthcare & Medical Diagnostics</h3>
          <p className="text-lg text-gray-700 text-left">
            Revolutionizing Early Disease Detection: Our core focus is in healthcare, where our breath analyzers and other diagnostic devices are changing the way diseases like lung cancer and respiratory disorders are detected and managed. The use of photoacoustic technology allows for highly sensitive detection of disease biomarkers, enabling doctors to diagnose conditions early, when treatment is most effective.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Lung Cancer Detection:</strong> Early-stage detection of lung cancer through breath analysis, allowing for non-invasive, real-time diagnostics.</li>
            <li><strong>Respiratory Disease Monitoring:</strong> Identification of biomarkers related to conditions like asthma, chronic obstructive pulmonary disease (COPD), and pneumonia.</li>
            <li><strong>Personalized Healthcare:</strong> Integration with IoT systems for continuous monitoring of patients' health data, providing personalized care and real-time adjustments to treatment plans.</li>
          </ul>
          <p className="text-lg text-gray-700 text-left">
            Impact: Our technology enables healthcare providers to offer faster, more reliable diagnostics, reducing patient wait times, and improving overall care outcomes. By making early detection tools accessible, we contribute to saving lives and reducing healthcare costs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">2. Environmental Monitoring</h3>
          <p className="text-lg text-gray-700 text-left">
            Detecting Air Quality & Pollutants: Beyond healthcare, our photonics technology is also applied to the field of environmental monitoring. Accurate and early detection of toxic gases and pollutants in the air is critical for maintaining public health and safety. Our devices, which can detect trace levels of volatile organic compounds (VOCs), carbon monoxide, methane, and other harmful gases, are ideal for monitoring industrial emissions and ensuring environmental compliance.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Air Quality Monitoring:</strong> Detecting harmful pollutants in urban environments and industrial areas to ensure air quality standards are met.</li>
            <li><strong>Industrial Safety:</strong> Monitoring gas emissions in industries like manufacturing and mining to prevent hazardous exposure to workers and surrounding communities.</li>
            <li><strong>Indoor Air Quality:</strong> Providing solutions for monitoring VOC levels in indoor environments, such as hospitals, schools, and offices, to ensure safe and healthy working conditions.</li>
          </ul>
          <p className="text-lg text-gray-700 text-left">
            Impact: Our technology helps governments and industries maintain compliance with environmental regulations and improve public health by ensuring cleaner air. With real-time monitoring capabilities, we enable proactive management of environmental risks.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">3. Industrial Safety & Hazard Detection</h3>
          <p className="text-lg text-gray-700 text-left">
            Ensuring Worker Safety with Real-Time Monitoring: In industries like mining, manufacturing, and chemical processing, the detection of hazardous gases is critical for preventing accidents and ensuring worker safety. Our solutions provide continuous monitoring of air quality in confined spaces or hazardous environments, where the presence of toxic gases or explosive substances poses significant risks.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Gas Detection in Mines:</strong> Monitoring methane, carbon monoxide, and other explosive or toxic gases to prevent accidents in underground mining operations.</li>
            <li><strong>Manufacturing & Chemical Plants:</strong> Ensuring the safe handling of hazardous chemicals by detecting gas leaks or toxic emissions before they reach dangerous levels.</li>
            <li><strong>Oil & Gas Industry:</strong> Monitoring air quality and detecting leaks in oil refineries, pipelines, and offshore rigs to prevent environmental disasters and ensure worker safety.</li>
          </ul>
          <p className="text-lg text-gray-700 text-left">
            Impact: By providing reliable and continuous monitoring, our technology enhances industrial safety protocols and reduces the likelihood of catastrophic accidents. Our devices help industries create safer work environments and ensure regulatory compliance, protecting both workers and the environment.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">4. Research & Academic Institutions</h3>
          <p className="text-lg text-gray-700 text-left">
            Empowering Innovation through Research: Our technology is also a powerful tool for research institutions and academic laboratories focused on developing new diagnostic methods, studying disease biomarkers, and advancing the field of medical diagnostics. Researchers can use our highly sensitive photonics systems to analyze biological samples at a molecular level, opening new avenues for scientific discoveries.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Biomedical Research:</strong> Studying disease biomarkers in clinical research to develop new diagnostic techniques and treatments.</li>
            <li><strong>Environmental Research:</strong> Monitoring pollutants and analyzing their impact on public health and ecosystems.</li>
            <li><strong>Technology Development:</strong> Partnering with academic institutions to further improve photonics technology for broader applications across industries.</li>
          </ul>
          <p className="text-lg text-gray-700 text-left">
            Impact: Our collaboration with researchers helps drive innovation in healthcare and environmental sciences. By providing access to advanced diagnostic tools, we empower institutions to make breakthrough discoveries that can shape the future of these industries.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">5. Public Health & Government Initiatives</h3>
          <p className="text-lg text-gray-700 text-left">
            Supporting Global Health Programs: In partnership with governments and public health organizations, our solutions support large-scale health programs aimed at reducing the burden of diseases through early detection and prevention strategies. With a focus on affordable and scalable diagnostics, we contribute to improving public health outcomes worldwide.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Population Screening Programs:</strong> Deploying our breath analyzers in public health initiatives to detect early-stage diseases, particularly in underserved or remote populations.</li>
            <li><strong>Epidemiological Studies:</strong> Assisting in large-scale health studies by providing real-time data on environmental pollutants or disease prevalence.</li>
            <li><strong>Regulatory Compliance:</strong> Helping governments monitor air quality and enforce regulations to protect public health.</li>
          </ul>
          <p className="text-lg text-gray-700 text-left">
            Impact: By making our technology accessible to public health authorities, we contribute to reducing the global burden of disease. Our tools enable faster response times in health crises and improve the overall efficiency of public health programs.
          </p>

          <h2 className="text-2xl font-bold text-indigo-500 mb-6 mt-8">
            Why Our Technology Matters Across Industries
          </h2>
          <p className="text-lg text-gray-700 text-left">
            At Gloport Photonix, our goal is to create versatile, impactful solutions that address the needs of multiple industries. Whether it’s detecting diseases early, ensuring environmental safety, or protecting workers in hazardous environments, our photonics technology provides a level of precision and reliability that is essential for modern-day challenges.
          </p>
          <p className="text-lg text-gray-700 text-left">
            By applying innovative, scalable solutions, we help industries operate more safely, efficiently, and sustainably. Our commitment to early detection and real-time monitoring extends beyond healthcare into industries that affect millions of lives every day.
          </p>
        </div>
      </div>

      {/* Features List */}
      <div className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              The Advantages You Get
            </h2>
            <dl className="space-y-6">
              {[
                'Customized solutions tailored to your needs',
                'Transparent communication and reporting',
                'Dedicated support team',
                'Competitive pricing',
                'Fast turnaround times',
                'Industry-leading expertise',
              ].map((feature) => (
                <div key={feature} className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">{feature}</dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}