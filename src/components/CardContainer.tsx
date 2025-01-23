import Card from './Card';
import { Link } from 'react-router-dom';

export default function CardContainer() {
    const cardData = [
        {
            title: "Beautiful Landscape",
            description: "A stunning view of mountains and lakes in the wilderness.",
            imageUrl: "https://picsum.photos/800/600?random=1",
            altText: "Mountain landscape"
        },
        {
            title: "City Life",
            description: "Modern architecture and urban living at its finest.",
            imageUrl: "https://picsum.photos/800/600?random=2",
            altText: "City skyline"
        },
        {
            title: "Nature's Beauty",
            description: "Exploring the wonders of natural flora and fauna.",
            imageUrl: "https://picsum.photos/800/600?random=3",
            altText: "Natural scenery"
        }
    ];

    return (
        <div>
            <div className="text-right mb-4">
                <Link
                    to="/add"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Add New Card
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        altText={card.altText}
                    />
                ))}
            </div>
        </div>
    );
}
