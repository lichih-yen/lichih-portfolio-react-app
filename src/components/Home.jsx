import React from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-cyan-400 font-medium">Hey there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Li-Chih Yen</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Full-Stack Web Developer who is a logical thinker with a love of resolving issues. Feel excited about making
          products that change people's lives - hopefully in a good way 😊. Be able to collaborate with a team yet work
          independently with diligent attention to detail.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowCircleRight size={30} className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
