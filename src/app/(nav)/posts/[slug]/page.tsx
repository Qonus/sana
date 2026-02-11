import { notFound } from "next/navigation";
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { postsDirectory } from "@/lib/posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const {slug} = await params;
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);
    return (
        <div className="container max-w-3xl">
            <p>Publication Date: {data.date}</p>
            <MDXRemote source={content} />
        </div>
    )
}