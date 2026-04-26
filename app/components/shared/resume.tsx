import Card from "./card"

const Resume = () => {
    return (
        <div className="pt-[150px]">
            <div className="flex flex-col gap-4">
                <div className="flex justify-center text-blue-400">EDUCATION & EXPERIENCE</div>
                <div>
                    <div className="flex justify-center text-4xl font-bold">Empowering Creativity</div>
                    <div className="flex justify-center text-4xl font-bold">through</div>
                </div>
                <div>
                    <p className="text-center">
                        Business consulting consultants provide expert advice and guida
                        <br className="block md:hidden" />

                        businesses to
                        <span className="hidden md:inline">
                            <br />
                        </span>

                        help them improve their
                        <br className="block md:hidden" />

                        performance, efficiency, and organizational
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  p-4 md:p-20 pt-12 gap-6">
                <Card 
                 title="sgsg"
                 duration="srsr"
                 description="sgsts"
                />
                <Card 
                 title="fsr"
                 duration=""
                 description=""
                />
                <Card 
                 title=""
                 duration=""
                 description=""
                />
                <Card 
                 title=""
                 duration=""
                 description=""
                />
            </div>
           <div className="flex flex-col xl:flex-row gap-10 px-4 sm:px-6 md:px-10 xl:px-20 py-10">
    
    <div className="flex flex-col gap-5 w-full xl:w-1/2">
        <div className="text-2xl text-white">Experiences</div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-blue-400">experience</h1>
                <h1 className="text-2xl font-bold">Soft Tech (2 Years)</h1>
                <h1 className="text-2xl">UI/UX Designer</h1>
            </div>
            <p className="text-base sm:text-xl">
                Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
                cillum desi dolore eu fugiat nulla pariatu Duis aute irure.
            </p>
        </div>

        <div className="pt-10 sm:pt-[80px]">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-blue-400">experience</h1>
                    <h1 className="text-2xl font-bold">Soft Tech (2 Years)</h1>
                    <h1 className="text-2xl">UI/UX Designer</h1>
                </div>
                <p className="text-base sm:text-xl">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
                    cillum desi dolore eu fugiat nulla pariatu Duis aute irure.
                </p>
            </div>
        </div>
    </div>

    <div className="w-full xl:w-1/2">
        <div className="w-full h-[350px] sm:h-[350px] xl:h-[500px]">
            <Card />
        </div>
    </div>

</div>
        </div>
    )
}

export default Resume