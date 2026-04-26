'use client'

import Typing from "./typing"

const Home = ()=>{
    return (
       <div className="w-full min-h-screen bg-grid-pattern flex flex-col xl:flex-row items-center justify-between">
            <div className="order-2 xl:order-1 pt-10 xl:pt-[280px] p-6 xl:p-16 text-left">
                <Typing />
              </div>
            <div className=" order-1 xl:order-2  mt-30 xl:mt-0 xl:pt-[150px] xl:pr-[90px]">
                <img src="./Aman.jpg" className="w-[200px] sm:w-[250px] md:w-[300px] xl:w-[400px] h-auto rounded-xl"/>
              </div>
       </div>
    )
}

export default Home