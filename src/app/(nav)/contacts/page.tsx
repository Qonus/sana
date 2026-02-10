"use client"
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Contacts() {
    return (
        <div className="container max-w-3xl">
            <h1>Contacts Page</h1>
            <ul className="text-xl">
                <li className="flex items-center">
                    Instagram: <Button className="text-xl cursor-pointer text-chart-2" variant="link" onClick={() => redirect("https://www.instagram.com/sana_health_kz/")}>@sana_health_kz</Button>
                </li>
            </ul>
        </div>
    )
}