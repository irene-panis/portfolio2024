import { Link } from "react-router-dom"
import { toggleMode } from "../utils/lightMode"
import { useState } from "react"

export const Navbar = () => {

  const initialMode = localStorage.getItem("portfolio-mode") || "light";
  const [mode, setMode] = useState(initialMode);

  const handleToggle = () => {
    if (mode === 'dark') { // if dark change to light
      localStorage.setItem("portfolio-mode", "light");
      setMode('light');
    } else {
      localStorage.setItem("portfolio-mode", "dark");
      setMode('dark');
    }
    toggleMode();
  }

  return (
    <nav className="home-cont">
      <div className="flex gap-[25%] lowercase">
        <ul>
          <li><Link to="/">Irene</Link></li>
        </ul>
        <ul>
          <li><Link to="/projects">Work</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
        <ul>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button type="button" onClick={() => handleToggle()}>
              { (mode === 'dark') ?
                '☀' :
                '☁'
              }
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}