import './index.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="app-wrapper px-10">
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
