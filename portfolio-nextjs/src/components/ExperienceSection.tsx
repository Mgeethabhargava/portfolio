import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import { candidate, experiences } from '@/data/portfolio';

export default function ExperienceSection() {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={candidate.experience_image}
                alt="Experience"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 dark:text-gray-400 font-semibold mb-2">
                      {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.role}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {experience.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => window.open(candidate.linkedin_url, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}