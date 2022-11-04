import React from 'react'

const Contact = () => {
  return (
    <div className="w-full bg-[#0a192f] flex flex-col justify-center items-center">
      <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form
          method="POST"
          name="myemailform"
          action="https://formsubmit.co/606136a39c1e1b6cdd475e8902f59af3"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pt-10 pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">Contact</p>
            <p className="text-gray-300 py-4">
              // If you are interested in working together, please feel free to reach out to me by filling in the
              following form. You also can email me on my Gmail directly.
            </p>
          </div>
          <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" required="true" />
          <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" required="true" />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            required="true"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
      <div>
        <p className="text-gray-300 pb-8">
          &copy; 2022 <strong className="text-gray-200">lichih</strong> <strong className="text-cyan-600">Yen</strong> |
          Built with <strong className="text-pink-600">Passion</strong> and ☕
        </p>
      </div>
    </div>
  )
}

export default Contact
