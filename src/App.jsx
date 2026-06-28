import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#131313] text-white overflow-x-hidden">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <Navbar />

          <main className="pt-16 sm:pt-20 lg:pt-26">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/portfolio"element={<ProjectDetails />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;