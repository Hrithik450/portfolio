import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import ServicesPage from "./pages/Service/ServicePage";
import Projects from "./pages/Project/ProjectPage";
import ProjectBlog from "./pages/Project/components/ProjectBlog";
import About from "./pages/About/AboutPage";
import Insights from "./pages/Blog/BlogPage";
import BlogPage from "./pages/Blog/components/BlogPage";
import Contact from "./pages/Contact/ContactPage";
import AuthPage from "./pages/Login/AuthPage";
import Welcome from "./components/templates/Welcome";
import VerifyEmail from "./components/templates/VerifyEmail";

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
        <Route path="/blog/:id" element={<BlogPage />} />

        <Route path="/login" element={<AuthPage />} />
        <Route path="/welcome" element={<Welcome userName={"Hruthik M"} />} />
        <Route
          path="/verify"
          element={<VerifyEmail verificationToken={"765843"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
