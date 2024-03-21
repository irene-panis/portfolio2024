import { Link } from "react-router-dom"
import { toggleMode } from "../utils/lightMode"
import { useState } from "react"

export const Navbar = () => {

  const [mode, setMode] = useState('light');

  const handleToggle = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
    toggleMode();
  }

  return (
    <nav className="home-cont">
      <div className="flex gap-[25%]">
        <ul>
          <li><Link to="/">Irene Panis</Link></li>
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