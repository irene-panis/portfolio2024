import './index.css'
import { Line } from './components/home/Line'
import { Navbar } from './components/Navbar'


function App() {

  return (
    <div className="app-wrapper px-10">
      <span className="bg-black text-2xl">Hi there, I&apos;m Irene.</span>
      <Line/>
      <Navbar/>
    </div>
  )
}

export default App
