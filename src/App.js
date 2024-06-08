import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
// import Home from "./pages/Home.js"
// import Projects from './pages/Projects.js'; 
// import AboutPage from "./pages/AboutPage.js";


const Home  = lazy(()=> import("./pages/Home.js"));
const Projects  = lazy(()=> import("./pages/Projects.js"));
const AboutPage  = lazy(()=> import("./pages/AboutPage.js"));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </Suspense>
      {/* transform: perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px); */}

    </Router>
  );
  
}

export default App;


