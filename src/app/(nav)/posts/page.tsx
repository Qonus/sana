import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function PostsPage() {
    const posts = getSortedPostsData();
   return (
        <div className="container">
            <h1>Posts Page</h1>
            <ul>
                {posts.map((post) => (
                <li key={post.slug}>
                    <Link href={`/posts/${post.slug}`}
                        className="w-full">
                    <h2>{post.slug}</h2>
                    <p>{post.date}</p>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
   )
}