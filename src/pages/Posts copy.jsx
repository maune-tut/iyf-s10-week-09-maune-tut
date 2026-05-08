import { useFetch } from '../hooks/useFetch';

export default function Posts() {
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    if (loading) return <p className="p-6">Loading feed...</p>;
    if (error) return <p className="p-6 text-red-500">Error: {error}</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Community Feed</h2>
            <div className="grid gap-4">
                {posts.map(post => (
                    <div key={post.id} className="p-4 border rounded shadow-sm bg-white">
                        <h3 className="font-bold capitalize">{post.title}</h3>
                        <p className="text-gray-600">{post.body.substring(0, 70)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}