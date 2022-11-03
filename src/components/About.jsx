import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Li-Chih, nice to meet you.</p>
          </div>
          <div>
            <p>
              I'm specialized in quickly learning new skills, problem-solving, and working independently and
              collaboratively in a team. I've started learning Node.js, MongoDB, Express.js, and the Model View
              Controller (MVC) methods of organizing code. I now have JavaScript, React.js, HTML/CSS, Git/GitHub,
              RESTful APIs, SQL, and Tailwindcss on my belt. I'm still enthusiastically looking into any other
              frameworks or tech stacks I can polish up the coding skills in my head.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
