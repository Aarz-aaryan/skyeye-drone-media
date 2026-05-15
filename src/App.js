import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import NotFound from './pages/NotFound';
import { GlobalStyles } from './components/GlobalStyles';

const AppShell = () => {
  const cursorRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const activateCursor = () => cursor.classList.add('cursor--active');
    const deactivateCursor = () => cursor.classList.remove('cursor--active');

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', activateCursor);
    window.addEventListener('mouseup', deactivateCursor);

    const attachHoverListeners = () => {
      const interactive = document.querySelectorAll('a, button, input, textarea, select, summary, [role="button"]');
      interactive.forEach((el) => {
        el.addEventListener('mouseenter', activateCursor);
        el.addEventListener('mouseleave', deactivateCursor);
      });
    };

    attachHoverListeners();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', activateCursor);
      window.removeEventListener('mouseup', deactivateCursor);
    };
  }, [location.pathname]);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <GlobalStyles />
      <div className="noise-overlay" />
      <div className="custom-cursor" ref={cursorRef} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
export default App;