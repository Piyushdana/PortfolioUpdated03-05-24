import Home from "./pages/Home.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects.js'; 

function App() {
  return (

    // <div>
    //   <Home/>
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more routes for other pages if needed */}
      </Routes>

      
    </Router>
  );
  
}

export default App;


