import { Tech } from "./components/Tech"
import { Project } from "./components/Project"

export const Work = () => {
  return (
    <section id="work" className="flex flex-col items-center gap-4">
      <Tech/>
      <Project/>
    </section>
  )
}