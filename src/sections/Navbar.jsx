import { updateMode } from "../utils/lightMode"
import { useState, useEffect } from "react"
import { ModeButton } from "./ModeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

  const initialMode = localStorage.getItem("portfolio-mode") || "light";
  const [mode, setMode] = useState(initialMode);

  const handleToggle = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem("portfolio-mode", newMode);
    setMode(newMode);
  }

  useEffect(() => {
    updateMode(mode);
  }, [mode]);

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="sticky p-5 h-[4rem]">
      <div className="navbar h-full lowercase font-light">
        <ul className={`nav-links uppercase lg:flex lg:gap-4 ${showNav ? `showNav` : ``}`}>
          <li><a href="#work" onClick={() => setShowNav(false)}>Work</a></li>
          <li><a href="#resume" onClick={() => setShowNav(false)}>Resume</a></li>
          <ModeButton
            mode={mode}
            onToggle={handleToggle}
            screen="mobile-mode"
          />
          <FontAwesomeIcon 
            icon={faXmark} 
            className="closeButton"
            onClick={() => setShowNav(false)} 
          />
        </ul>
        <h1><a href="#landing">Irene Panis</a></h1>
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger-menu"
          onClick={() => setShowNav(true)}
        />
        <ModeButton
          mode={mode}
          onToggle={handleToggle}
          screen="desktop-mode"
        />
      </div>
    </nav>
  )
}