import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function Posts() {
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    if (loading) return <p className="p-6 text-blue-500 animate-pulse">Loading community feed...</p>;
    if (error) return <p className="p-6 text-red-500 font-bold">Error: {error}</p>;

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Community Feed</h2>
            
            <div className="grid gap-6">
                {posts && posts.map(post => (
                    <div key={post.id} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-xl font-bold text-slate-800 capitalize mb-3 group-hover:text-blue-600">
                            {post.title}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed mb-4">
                            {post.body.substring(0, 100)}...
                        </p>
                        
                        <Link 
                            to={`/posts/${post.id}`} 
                            className="inline-flex items-center text-sm font-bold text-blue-600 hover:gap-2 transition-all"
                        >
                            Read Discussion <span className="ml-1">→</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}