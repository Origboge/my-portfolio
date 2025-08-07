'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-16 bg-neutral-900 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center text-green-400">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-300">
          <Image
            src="/screenshots/fmyd.png"
            alt="FMYD Circular Economy Project"
            width={800}
            height={400}
            className="rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-green-300 mb-2">
            FMYD Circular Economy Youth Empowerment
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Waste to wealth initiative to empower Nigerian youths by transforming waste into valuable resources & eco-friendly items.
          </p>
          <Link
            href="https://origboge.github.io/FMYD-CIRCULAR-ECO/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-400 hover:text-blue-500 underline"
          >
            View Live Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
