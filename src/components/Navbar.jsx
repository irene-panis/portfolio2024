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
          <li><a href="#landing">Irene</a></li>
        </ul>
        <ul>
          <li><a href="#projects">Work</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
        <ul>
          <li><a href="#contact">Contact</a></li>
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