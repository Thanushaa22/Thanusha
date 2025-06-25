import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: `url('/assets/bg1.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-400">Thanusha M</span>
        </h1>

        <h2 className="text-lg sm:text-xl font-medium text-white-200">
          💻 Aspiring Software Developer 🚀
        </h2>

        <p className="mt-6 text-sm sm:text-base max-w-xl text-gray-300">
          Passionate about building intelligent digital experiences through software development.
        </p>

        {/* Resume Button */}
        <a
          href="/Resume.pdf"
          download
          className="mt-8 inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
