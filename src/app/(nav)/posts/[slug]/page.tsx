"use client"
import { useParams } from "next/navigation";

export default function PostPage() {
    const {slug} = useParams();
    return (
        <div>
            <h1>Post {slug} Page</h1>
        </div>
    )
}