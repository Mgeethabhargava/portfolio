import Image from 'next/image';
import { skills } from '@/data/portfolio';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          What I Can Do?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
          I may not be perfect but surely I'm of some use :)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={skill.image}
                  alt={skill.skill}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
                  {skill.skill}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}