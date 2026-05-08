import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function PostDetail() {
    // 1. Grab the postId from the URL (e.g., /posts/5)
    const { postId } = useParams();
    
    // 2. Use your custom hook to get the specific post data
    const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (loading) return <div className="p-10 text-center text-blue-500">Loading details...</div>;
    if (error) return <div className="p-10 text-center text-red-500">Error: {error}</div>;

    return (
        <article className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-6">
            <Link to="/posts" className="text-blue-600 hover:underline mb-6 inline-block">
                &larr; Back to All Posts
            </Link>
            
            <h1 className="text-3xl font-bold text-gray-900 capitalize mb-4">
                {post?.title}
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Post #{postId}
                </span>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg first-letter:capitalize">
                {post?.body}
            </p>
        </article>
    );
}