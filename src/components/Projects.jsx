import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Live Detection of People’s Safety',
    description:
      'A machine learning project that uses NLP and computer vision to detect unsafe or suspicious human behavior in real-time for enhanced surveillance.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'NLP'],
  },
  {
    title: 'Library Management System',
    description:
      'Java application with MySQL backend to manage books, students, and issue/return history. Built with JDBC and a user-friendly interface.',
    tech: ['Java', 'MySQL', 'JDBC', 'JSP', 'Servlet'],
  },
  {
    title: 'PDF Translator with Text-to-Speech',
    description:
      'A Python-based tool that extracts text from PDF files, translates it to different languages, and reads it aloud using TTS engines.',
    tech: ['Python', 'Tkinter', 'pyttsx3', 'googletrans'],
  },
  {
    title: 'Chatbot using Python',
    description:
      'A conversational chatbot built using Python that interacts with users through text. Utilizes Natural Language Processing techniques to understand and respond to queries effectively.',
    tech: ['Python', 'NLTK', 'Tkinter', 'Regex'],
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="w-full bg-black py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-800 text-cyan-100 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
