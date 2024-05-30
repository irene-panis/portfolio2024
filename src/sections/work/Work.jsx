import { Tech } from "./components/Tech"
import { Project } from "./components/Project"
import { projects } from "../../utils/projectData";

export const Work = () => {
  return (
    <section id="work" className="flex flex-col items-center gap-4">
      <Tech/>
      {
      projects.map((project, index) => (
        <Project key={index} project={project} index={index + 1}/>
      ))}
    </section>
  )
}