import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ServicesPage from "./pages/Services";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import ProjectBlog from "./components/Project/ProjectBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/project/:id" element={<ProjectBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
