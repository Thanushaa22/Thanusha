import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-full bg-black py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <form
          action="https://getform.io/f/axoygjpb"
          method="POST"
          className="space-y-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="_replyto"
              id="email"
              required
              className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="1"
              required
              className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </div>

          <input type="hidden" name="_redirect" value="https://yourportfolio.com/thankyou" />
        </form>

        <p className="mt-8 text-sm text-gray-400">
          Or email me directly at{' '}
          <a
            href="mailto:thanushamanjunath2233@gmail.com"
            className="text-cyan-400 underline"
          >
            thanushamanjunath2233@gmail.com
          </a>
        </p>

        {/* 🔗 Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/thanushaa22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/thanusha2233"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
