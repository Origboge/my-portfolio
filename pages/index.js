'use client';
import Hero from '../components/Hero';
import Projects from '../components/projects';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Home() {
  return (
    <>
      <Hero />
     
    <section id="about" className="py-16 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        I&rsquo;m <span className="font-semibold">Bamise Akinfiresoye</span>, a curious mind with a background in Microbiology, and a growing passion for web development.
        Over time, I&rsquo;ve transitioned from microscopes to code editors, now building responsive, user focused websites using HTML, CSS, and JavaScript.
      </p>

      <p className="text-lg text-gray-300 mt-4 leading-relaxed">
        My journey into tech is fueled by a strong desire to create meaningful digital experiences and explore emerging technologies like Web3 and blockchain.
        Outside the screen, I&rsquo;ve dabbled in shoemaking, enjoy writing, and stay engaged with tech communities and continuous learning.
      </p>

      <p className="text-lg text-gray-300 mt-4 leading-relaxed">
        I&rsquo;m currently open to opportunities where I can grow, contribute, and collaborate whether that&rsquo;s in tech, research, or cross-functional roles that blend creativity with problem-solving.
      </p>
    </section>



      <section id="projects">
        <Projects />
      </section>

     

<section
  id="contact"
  className="bg-gray-900 px-8 py-12 mt-12 text-center rounded-lg shadow-lg max-w-4xl mx-auto border border-neutral-800"
>
  <h2 className="text-3xl font-semibold text-white mb-4">Let&rsquo;s Build Something Together</h2>
  <p className="text-lg text-gray-300 mb-6">
    I&rsquo;m passionate about crafting fast, responsive, and modern web experiences. If you&rsquo;re looking for a developer to collaborate on your next project or just want to connect reach out!
  </p>

  <div className="flex justify-center gap-6 text-2xl text-blue-400 mb-4">
    <a href="mailto:origboge@outlook.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
      <HiOutlineMail className="hover:text-blue-500 transition" />
    </a>
    <a href="https://twitter.com/origboge" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaTwitter className="hover:text-blue-500 transition" />
    </a>
    <a href="https://linkedin.com/in/bamise-akinfiresoye-3b645a174" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin className="hover:text-blue-500 transition" />
    </a>
  </div>

  <a
    href="mailto:origboge@outlook.com"
    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Send Email
  </a>
</section>


    </>
  );
}