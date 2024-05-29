import './index.css'
import { Navbar } from './sections/Navbar'
import { Landing } from './sections/landing/Landing';

function App() {

  return (
    <div className="app-wrapper min-h-screen">
      <Navbar/>
      <main>
        <Landing/>
      </main>
    </div>
  )
}

export default App
