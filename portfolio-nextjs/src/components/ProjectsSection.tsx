import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-semibold text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h5>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => window.open('https://www.github.com/Mgeethabhargava', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
}