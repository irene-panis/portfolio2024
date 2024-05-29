import './index.css'
import { Navbar } from './sections/Navbar'
import { Landing } from './sections/landing/Landing';

function App() {

  return (
    <div className="app-wrapper bg-cover px-[2%] py-5 flex flex-col justify-center min-h-screen">
      <Navbar/>
      <main>
        <Landing/>
      </main>
    </div>
  )
}

export default App
