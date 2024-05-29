import { Link } from "react-router-dom"
import { updateMode } from "../utils/lightMode"
import { useState, useEffect } from "react"

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