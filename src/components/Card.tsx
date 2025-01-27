interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
}

export default function Card({ title, description, imageUrl, altText }: CardProps) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src={imageUrl} alt={altText} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
