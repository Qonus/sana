"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import Logo from "./icons/logo";

const navbarItems = [
    {
        name: "Posts",
        href: "/posts"
    },
    {
        name: "Contacts",
        href: "/contacts"
    }
]

export default function Navbar () {
    return (
        <div className="top-0 max-w-300 m-auto">
            <nav className="backdrop-blur-2xl size-full m-4 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Logo className="size-12 fill-primary"/>
                    <h1>SANA</h1>
                </div>
                <div className="flex gap-4 text-2xl">
                    {navbarItems.map((item) => (
                        <Button key={item.name} onClick={()=>redirect(item.href)}
                            variant="outline"
                            className="text-xl">
                            {item.name}
                        </Button>
                    ))}
                </div>
            </nav>
        </div>
    )
}