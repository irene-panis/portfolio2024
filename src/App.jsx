import './index.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="app-wrapper px-10 py-5">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
