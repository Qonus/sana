import Link from "next/link";

export default function Navbar () {
    return (
        <nav className="top-0 w-full bg-background shadow-md p-4">
            <h1>SANA Navbar</h1>
            <Link href="/posts">Posts</Link>
            <Link href="/contacts">Contacts</Link>
        </nav>
    )
}