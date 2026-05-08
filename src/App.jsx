import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail'; // We'll create this next!

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* The Navbar stays at the top on every page */}
      <Navbar />
      
      <main className="max-w-4xl mx-auto py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
