interface CardInterface {
    title?: string;
    duration?: string;
    description?: string;
    children?: React.ReactNode;
}

const Card = ({ title, duration, description, children }: CardInterface) => {
    return (
        <div className="w-full bg-white rounded-xl shadow-lg h-full p-4">
            <h1>{title}</h1>
            <p>{duration}</p>
            <p>{description}</p>
            <div>{children}</div>
        </div>
    )
}

export default Card;