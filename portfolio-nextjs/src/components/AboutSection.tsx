import Image from 'next/image';
import { candidate } from '@/data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={candidate.about_me_image}
                alt="About Me"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
              Who am I?
            </p>
            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-4">
              {candidate.about_me.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}