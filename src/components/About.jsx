import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full bg-black py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/profile3.jpg"
            alt="Thanusha M"
            className="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-cyan-400 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m currently pursuing my MCA at <span className="text-white font-semibold">Presidency University, Bangalore</span>, where I’m honing my skills in building intelligent, high-impact software. My passion lies in <span className="text-cyan-400 font-medium">software development</span>, <span className="text-cyan-400 font-medium">system analysis</span>, and the creative world of <span className="text-cyan-400 font-medium">game design</span>.
        </p>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          I’ve worked hands-on with <span className="text-white font-semibold">Machine Learning</span> using Python and TensorFlow, and earned certifications from <span className="text-white font-semibold">Cisco Networking Academy</span> and <span className="text-white font-semibold">Infosys Springboard</span>, which have solidified my foundation in modern tech.
        </p>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          I enjoy turning complex ideas into real, user-friendly applications — always exploring new technologies and pushing boundaries to create smarter, scalable solutions that make a difference.
        </p>
      </div>
    </motion.section>
  );
}

