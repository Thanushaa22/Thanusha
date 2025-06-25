import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="bg-black text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center py-4 text-sm text-gray-500">© 2025 Thanusha M. All rights reserved.</footer>
    </div>
  );
}

export default App;

