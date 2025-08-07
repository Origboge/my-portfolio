export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900 transition duration-300">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm <span className="text-red-500 dark:text-red-400">Bamise Akinfiresoye</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
        I&rsquo;m a frontend developer focused on building engaging, responsive web experiences using modern tools.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
          View My Projects
        </a>
        <a
          href="mailto:your-email@example.com"
          className="border border-green-500 text-green-500 px-6 py-3 rounded-md hover:bg-green-500 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
