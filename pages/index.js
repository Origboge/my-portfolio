'use client';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Hero />

      <section id="projects">
        <Projects />
      </section>

      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p>This is the homepage of my very first Next.js website.</p>
      </main>
    </>
  );
}