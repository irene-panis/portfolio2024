import './index.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="app-wrapper px-10">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
