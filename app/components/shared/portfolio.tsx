import Card from "./card"

const Portfolio = () => {
  return (
    <div className="!pt-[150px]">
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
      <div className="grid grid-cols-1  md:grid-cols-2 pt-[30px] p-4 md:p-20 gap-6">
        <Card>
          <div className="mt-4 bg-gray-100 p-3 rounded-lg">
            <img
              src="/your-image.jpg"
              alt="image"
              className="w-full h-[220px] object-cover rounded-md"
            />
          </div>
        </Card>
        <Card>
          <div className="mt-4 bg-gray-100 p-3 rounded-lg">
            <img
              src="/your-image.jpg"
              alt="image"
              className="w-full h-[220px] object-cover rounded-md"
            />
          </div>
        </Card>
        <Card>
          <div className="mt-4 bg-gray-100 p-3 rounded-lg">
            <img
              src="/your-image.jpg"
              alt="image"
              className="w-full h-[220px] object-cover rounded-md"
            />
          </div>
        </Card>
        <Card>
          <div className="mt-4 bg-gray-100 p-3 rounded-lg">
            <img
              src="/your-image.jpg"
              alt="image"
              className="w-full h-[220px] object-cover rounded-md"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Portfolio