interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
}

export default function Card({ title, description, imageUrl, altText }: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm 
            transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
                src={imageUrl} 
                alt={altText}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}
