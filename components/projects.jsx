import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300">
          <Image
            src="/screenshots/fmyd.png"
            alt="FMYD Circular Economy Project"
            width={800}
            height={400}
            className="rounded-md"
          />
          <h2 className="text-2xl font-semibold mt-4">FMYD CIRCULAR ECONOMY YOUTH EMPOWERMENT</h2>
          <p className="text-gray-600 mt-2">
            Waste to wealth initiative to empower Nigerian youths by transforming waste into valuable resources & eco-friendly items.
          </p>
          <Link
            href="https://origboge.github.io/FMYD-CIRCULAR-ECO/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            View Live Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
