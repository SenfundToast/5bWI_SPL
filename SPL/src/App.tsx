import Card from './components/Card';
import CardContainer from './components/CardContainer';

export function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm py-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Photo Gallery
                </h1>
            </header>
            <main className="container mx-auto py-8">
                <CardContainer />
            </main>
        </div>
    );
}
export default App
