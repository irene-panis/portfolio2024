/* eslint-disable react/prop-types */
export const Project = ( {project, index} ) => {
  return (
    <div className={`project h-screen w-full flex flex-col ${ index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="project-info p-10 flex flex-col gap-2 justify-center h-1/2 lg:h-full lg:w-1/2">
        <p className="text-[2em] font-bold">0{index}.</p>
        <p>{project.title}</p>
        <p className="text-[0.8em]">{project.description}</p>
        <div className="project-links flex gap-2 underline text-[0.8em]">
          <a href={project.repo}>GitHub</a>
          <a href={project.live}>Live</a>
        </div>
      </div>
      <div className="project-photo h-1/2 lg:h-full lg:w-1/2">
        <img src={project.img} className="w-full h-full object-cover object-left" alt={`${project.title} preview screenshot`}/>
      </div>
    </div>
  )
}