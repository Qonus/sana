import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const {slug} = await params;
    try {
        const { default: Post } = await import(`@/content/${slug}.mdx`)
        return (
            <div className="container max-w-3xl">
                <h1>Post {slug} Page</h1>
                <Post />
            </div>
        )
    } catch (error) {
        notFound();
    }
}