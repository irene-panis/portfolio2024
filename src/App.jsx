import './index.css'
import { Navbar } from './sections/Navbar'
import { Landing } from './sections/landing/Landing';
import { Work } from './sections/work/Work';

function App() {

  return (
    <div className="app-wrapper min-h-screen flex flex-col">
      <Navbar/>
      <main>
        <Landing/>
        <Work/>
      </main>
    </div>
  )
}

export default App
