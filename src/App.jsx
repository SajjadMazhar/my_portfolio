import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Resume from "./components/Resume";
import { DialogSizes } from "./components/Modal";


const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/my_portfolio" element={
          <div className="relative z-0 bg-primary">
            <Navbar />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Feedbacks />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        } />
        <Route path="/my_portfolio/resume" element={<Resume />}/>
      </Routes>
      <DialogSizes />
    </BrowserRouter>

  );
};

export default App;
