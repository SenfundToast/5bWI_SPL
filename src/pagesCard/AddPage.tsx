import React, { useState } from "react";

export default function EditCardPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [altText, setAltText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Card Data:", { title, description, imageUrl, altText });
// Add logic to save or update card data
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <form
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">AddPage</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-gray-700">
                        Image URL
                    </label>
                    <input
                        id="imageUrl"
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="altText" className="block text-gray-700">
                        Alt Text
                    </label>
                    <input
                        id="altText"
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={altText}
                        onChange={(e) => setAltText(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Save Card
                </button>
            </form>
        </div>
    );
}