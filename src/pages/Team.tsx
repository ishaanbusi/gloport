import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Alok Verma',
    role: 'CEO',
    image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    bio: 'Over 15 years of experience in technology and business leadership.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Abhijeet Thakur',
    role: 'CTO',
    image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    bio: 'Expert in cloud architecture and digital transformation.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Sanjay Singh',
    role: 'COO',
    image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    bio: 'Passionate about creating beautiful and intuitive user experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Jayesh',
    role: 'Hardware Engineer',
    image: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    bio: 'Full-stack developer with expertise in modern web technologies.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet Our Team
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Get to know the talented individuals who make our company great. We're proud
            of our diverse team and their expertise.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"
              >
                <div className="h-0 aspect-w-3 aspect-h-4 sm:aspect-w-3 sm:aspect-h-4">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-indigo-600">{member.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{member.bio}</p>
                    </div>
                    <div className="flex space-x-5">
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join the Team Section */}
      <div className="bg-indigo-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Want to join our team?</span>
            <span className="block text-indigo-600">Check out our open positions.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/career"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}