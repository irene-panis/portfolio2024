import './index.css'
import { Navbar } from './sections/Navbar'
import { Landing } from './sections/landing/Landing';
import { Work } from './sections/work/Work';
import { Resume } from './sections/resume/Resume';

function App() {

  return (
    <div className="app-wrapper min-h-screen flex flex-col">
      <Navbar/>
      <main>
        <Landing/>
        <Work/>
        <Resume/>
      </main>
    </div>
  )
}

export default App
