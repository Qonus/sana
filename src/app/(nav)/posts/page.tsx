import { getSortedPostsData } from "@/lib/posts";

export default function PostsPage() {
    const posts = getSortedPostsData();
   return (
        <div className="container">
            <h1>Posts Page</h1>
            <ul>
                {posts.map((post) => (
                <li key={post.slug}>
                    <h2>{post.slug}</h2>
                    <p>{post.date}</p>
                </li>
                ))}
            </ul>
        </div>
   )
}