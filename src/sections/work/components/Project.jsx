/* eslint-disable react/prop-types */
export const Project = ( {project, index} ) => {
  return (
    <div className="h-screen w-full flex flex-col gap-8">
      <div className="project-info p-10 flex flex-col gap-2 justify-center h-1/2">
        <p>0{index}.</p>
        <p>{project.title}</p>
        <p>{project.description}</p>
        <div className="project-links flex gap-2 underline">
          <a href={project.repo}>GitHub</a>
          <a href={project.live}>Live</a>
        </div>
      </div>
      <div className="project-photo h-1/2">
        <img src={project.img} className="w-full h-full object-cover object-left"/>
      </div>
    </div>
  )
}