import { Line } from "./home/Line"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="h-[210px]">
      <Line/>
      <div className="flex gap-[25%]">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/projects">projects</Link></li>
        </ul>
        <ul>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/resume">resume</Link></li>
        </ul>
        <ul>
          <li><Link to="/">light mode</Link></li>
        </ul>
      </div>
    </nav>
  )
}