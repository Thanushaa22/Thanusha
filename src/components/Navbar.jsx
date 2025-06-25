function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-50 border-b border-gray-800">
      <h1 className="text-xl font-bold text-white-400">My Portfolio</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <a href="#about" className="hover:text-cyan-400 transition duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 transition duration-200">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-400 transition duration-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
