export const Project = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-8">
      <div className="project-title flex flex-col justify-center items-center h-1/2">
        <p>project title!</p>
      </div>
      <div className="project-photo h-1/2">
        <img src="/thinkthieves.png" className="w-full h-full object-cover object-left"/>
      </div>
    </div>
  )
}