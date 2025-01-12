import React, { useTransition, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const PageTransition = ({ children }) => {
  const [isPending, startTransition] = useTransition();
  const location = useLocation();

  React.useEffect(() => {
    startTransition(() => {});
  }, [location, startTransition]);

  return (
    <div className={`page-transition ${isPending ? 'page-transition-active' : ''}`}>
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

