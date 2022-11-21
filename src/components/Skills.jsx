import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Express from '../assets/express.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-100vh bg-gray-800 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-10 sm:pt-24">
          <p className="text-4xl font-bold inline text-gray-200 border-b-4 border-cyan-500 ">Skills & Tools</p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        {/* Tech Stacks icons  */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML5</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS3</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React.js</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node.js</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="FireBase icon" />
            <p className="my-4">FireBase</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">MongoDB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="Express icon" />
            <p className="my-4">Express.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
