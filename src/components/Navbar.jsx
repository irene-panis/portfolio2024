import { Link } from "react-router-dom"
import { toggleMode } from "../utils/lightMode"
import { useState } from "react"

export const Navbar = () => {

  const [mode, setMode] = useState('dark');

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
          <li><Link to="/">irene panis</Link></li>
        </ul>
        <ul>
          <li><Link to="/projects">work</Link></li>
          <li><Link to="/resume">resume</Link></li>
        </ul>
        <ul>
          <li><Link to="/contact">contact</Link></li>
          <li>
            <button type="button" onClick={() => handleToggle()}>
              { (mode === 'dark') ?
                'light mode' :
                'dark mode'
              }
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}