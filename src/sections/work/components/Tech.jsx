/* eslint-disable react/no-unescaped-entities */
export const Tech = () => {
  return (
    <div className="h-screen flex flex-col justify-center gap-8 work-intro">
      <p className="uppercase font-bold text-[2em]">Hi, I'm Irene.</p>
      <p>I'm a full-stack software engineer based in Southern California. I love to solve complex problems and I'd love to make a career out of building cool things I and other people can enjoy.</p>
      <p>Outside of coding, I love to game, work out, and try new foods. Ask me about VALORANT esports sometime #100WIN :)</p>
      <p>Some of my past works can be viewed below and on my <a href="https://github.com/irene-panis" className="underline">GitHub profile.</a></p>
      <div className="techs flex flex-col gap-2">
        <p>Technologies</p>
        <ul className="tech-list flex flex-wrap gap-2 list-none lowercase">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
      </div>
    </div>
  )
}