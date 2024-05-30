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

  return (
    <nav className="home-cont">
      <div className="flex justify-between p-5 lowercase">
        <ul className={`nav-links flex flex-col ${showNav ? `showNav` : ``}`}>
          <li><a href="#projects">Work</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
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