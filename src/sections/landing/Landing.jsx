
export const Landing = () => {
  return (
    <section id="landing" className="flex flex-col justify-center items-center gap-4 landing">
      <h2 className="lg:max-w-[50%]">Full-Stack Software Engineer</h2>
      <img src="/avatar.png" height="200" width="200" alt="Pixelated Irene Panis avatar"/>
      <div className="subheaders uppercase lg:flex lg:justify-between text-center px-8 lg:min-w-[50%]">
        <p className="lg:max-w-[400px] lg:text-left">UCSD grad turned bootcamp student turned full-stack developer trying to build cool stuff.</p>
        <p>EST. SOCAL 2024</p>
      </div>
    </section>
  )
}