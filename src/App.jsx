import './index.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="app-wrapper bg-cover px-[2%] py-5 flex flex-col justify-center min-h-screen">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
