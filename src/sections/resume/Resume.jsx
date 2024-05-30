/* eslint-disable react/no-unescaped-entities */
export const Resume = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center gap-8 work-intro">
      <p className="uppercase font-bold text-[2em]">Want to know more?</p>
      <div className="resume-desc flex flex-col gap-2 underline">
        <a href="Irene Panis Developer Resume.pdf" target="_blank">Download my resume</a>
        <a href="https://www.linkedin.com/in/irene-panis/">Let's connect on LinkedIn</a>
        <a href="https://github.com/irene-panis">Check out my GitHub</a>
      </div>
    </div>
  )
}