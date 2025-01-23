import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import EditCardPage from './pages/AddPage';

export function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow-sm py-6">
                    <h1 className="text-3xl font-bold text-center text-gray-800">
                        Photo Gallery
                    </h1>
                </header>
                <main className="container mx-auto py-8">
                    <Routes>
                        <Route path="/" element={<CardContainer />} />
                        <Route path="/add" element={<EditCardPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
export default App;
