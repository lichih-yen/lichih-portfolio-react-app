import React from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import bgCoding_3 from '../assets/bgCoding_3.mp4'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-black bg-opacity-50" />
      <video autoPlay loop muted playsInline className="w-[100%] h-[100%] object-cover">
        <source
          src={bgCoding_3}
          alt="Video by Pavel Danilyuk: https://www.pexels.com/video/a-person-working-hard-on-a-computer-laptop-5495781/"
        />
      </video>

      {/* Container */}
      <div className="absolute top-0 sm:left-36 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-cyan-400 font-medium italic">Hey there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Li-Chih Yen</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A Full-Stack Web Developer who is a logical thinker with a love of resolving issues. Feel excited about making
          products that change people's lives - hopefully in a good way 😊. Be able to collaborate with a team yet work
          independently with diligent attention to detail.
        </p>
        <div>
          <Link to="work" smooth={true} duration={700}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600">
              View Works
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowCircleRight size={30} className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
