'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 1. Add state for menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ background: scrolled ? 'rgba(10,10,10,0.98)' : 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, transparent 100%)' }}>
      <a href="#" className="nav-logo">
        <div className="nav-logo-emblem">KGP</div>
        <div className="nav-logo-text">
          <span className="nav-logo-title">IIT KHARAGPUR</span>
          <span className="nav-logo-sub">Sports Gymkhana</span>
        </div>
      </a>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#sports" onClick={() => setIsOpen(false)}>Sports</a></li>
        <li><a href="#events" onClick={() => setIsOpen(false)}>Events</a></li>
        <li><a href="#facilities" onClick={() => setIsOpen(false)}>Facilities</a></li>
        <li><a href="#championship" onClick={() => setIsOpen(false)}>Championship</a></li>
        <li><a href="#inter-iit" onClick={() => setIsOpen(false)}>Inter-IIT</a></li>
        <li><a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}