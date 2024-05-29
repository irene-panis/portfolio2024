import './index.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home';

function App() {

  return (
    <div className="app-wrapper bg-cover px-[2%] py-5 flex flex-col justify-center min-h-screen">
      <Navbar/>
      <main>
        <Home/>
      </main>
    </div>
  )
}

export default App
