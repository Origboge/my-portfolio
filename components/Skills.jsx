import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-10 text-green-500">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-lg font-medium text-gray-300">

        <div data-aos="zoom-in" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <FaHtml5 className="text-orange-500 text-4xl mb-2" />
          HTML5
        </div>

        <div data-aos="zoom-out" data-aos-delay="100" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <FaCss3Alt className="text-blue-500 text-4xl mb-2" />
          CSS3
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <FaJs className="text-yellow-400 text-4xl mb-2" />
          JavaScript
        </div>

        <div data-aos="zoom-out" data-aos-delay="300" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <FaReact className="text-cyan-400 text-4xl mb-2" />
          React
        </div>

        <div data-aos="zoom-in" data-aos-delay="400" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <SiNextdotjs className="text-white text-4xl mb-2" />
          Next.js
        </div>

        <div data-aos="zoom-out" data-aos-delay="500" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <SiTailwindcss className="text-teal-400 text-4xl mb-2" />
          Tailwind CSS
        </div>

        <div data-aos="zoom-in" data-aos-delay="600" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <FaGithub className="text-gray-400 text-4xl mb-2" />
          Git & GitHub
        </div>

        <div data-aos="zoom-out" data-aos-delay="700" className="bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <SiFirebase className="text-yellow-500 text-4xl mb-2" />
          Firebase
        </div>

      </div>
    </section>
  );
}
