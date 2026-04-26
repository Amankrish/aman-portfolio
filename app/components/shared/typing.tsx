import { TypeAnimation } from "react-type-animation";

const Typing = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className="text-2xl">HELLO</div>
                <div className="text-6xl font-bold">i'm Aman Sachan</div>
            </div>
            <div>
                <span className="text-6xl font-bold">A</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    <TypeAnimation
                        sequence={[
                            "Hello World", 1000,
                            "I am Developer", 1000,
                            "I love React ❤️", 1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </span>
            </div>
            <div>
                <p className="text-lg">A personal portfolio is a collection of your work, achievements, and skills that </p>
                <p className="text-lg">highlights your abilities and professional growth. It serves as </p>
            </div>
        </div>
    )
}

export default Typing