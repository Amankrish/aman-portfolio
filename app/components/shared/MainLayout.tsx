'use client'
import { ReactNode, useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { LuAlignJustify } from "react-icons/lu"

type props = {
  children: ReactNode
}


const MainLayout = ({ children }: props) => {

  const [length, setLength] = useState(0)

  const data = [
    {
      title: "HOME",
      value: "#home"
    },
    {
      title: "SERVICES",
      value: "#services"
    },
    {
      title: "RESUME",
      value: "#resume"
    },
    {
      title: "PORTFOLIO",
      value: "#portfolio"
    },
    {
      title: "CONTACT",
      value: "#contactUs"
    }
  ]
  

  const handleOpen = () => {
    setLength(280)
  }

  const handleClose = () => {
    setLength(0)
  }

  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      {length > 0 && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999999]"
          onClick={handleClose}
        ></div>
      )}

      <div className="bg-slate-400  xl:hidden h-screen fixed top-0 left-0 z-[100000000]" style={{ width: `${length}px` }}>
        <div className="absolute top-4 right-4 cursor-pointer" onClick={handleClose}>
          <IoMdCloseCircle className="text-4xl bg-white text-slate-900" />
        </div>
        {length > 0 && (
  <div className="absolute p-16 cursor-pointer w-full space-y-4">
   {
    data.map((item,index)=>(
      <div key={index} className="w-full">
        <div className="border-t-2 border-slate-500 -mx-16">
          <a href={item.value} onClick={handleClose}>
            <div className="pt-4 ml-6">
            {item.title}
          </div>
          </a>
        </div>
      </div>
    ))
  }
  </div>
)}
      </div>
      <div className="hidden xl:flex justify-center items-center p-8 fixed top-0 left-0 bg-gray-800 w-full fixed z-[5000000]">
        <a href="#home">
          <h1 className="text-white text-xl font-bold px-4 py-1 hover:bg-blue-500/10 hover:text-blue-500" title="home">Home</h1>
        </a>

        <a href="#services">
          <h1 className="text-white text-xl font-bold px-4 py-1 hover:bg-blue-500/10 hover:text-blue-500" title="service">Services</h1>
        </a>

        <a href="#resume">
          <h1 className="text-white text-xl font-bold px-4 py-1 hover:bg-blue-500/10 hover:text-blue-500" title="resume">Resume</h1>
        </a>

        <a href="#portfolio">
          <h1 className="text-white text-xl font-bold px-4 py-1 hover:bg-blue-500/10 hover:text-blue-500" title="portfolio">Portfolio</h1>
        </a>

        <a href="#contactUs">
          <h1 className="text-white text-xl font-bold px-4 py-1 hover:bg-blue-500/10 hover:text-blue-500" title="contact">Contact</h1>
        </a>

      </div>

      <div className="flex xl:hidden justify-end p-4 bg-gray-800 fixed w-full z-[5000000]">
        <button className="text-blue-400 text-4xl" onClick={handleOpen}>
          <LuAlignJustify />
        </button>
      </div>
      <div className="pt-8">
        {children}
      </div>
    </div>
  )
}

export default MainLayout

