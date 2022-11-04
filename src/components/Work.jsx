import React from 'react'
import { data } from '../data/data.js'

const Work = () => {
  // projects file
  const project = data

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1024px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-16">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">Work</p>
          <p className="py-4">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto z-auto content-div "
            >
              {/* Hover Effect for images */}
              <div className="opacity-0 group-hover:opacity-75 duration-500">
                <span className="text-2xl font-bold text-gray-300 tracking-wider ">{item.name}</span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-cyan-500 text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-cyan-500 text-gray-700 font-bold text-lg"
                    >
                      Demo
                    </button>
                  </a>
                </div>
                <span className="text-base text-gray-300 tracking-wider ">{item.stack}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
