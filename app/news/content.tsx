'use client';

import { useSuspenseQuery } from "@tanstack/react-query";
import { newsOptions } from "./options";

export default function NewsContent() {
    const { data } = useSuspenseQuery(newsOptions);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
                <article key={item.id} className="p-4 border rounded shadow">
                    <h3 className="font-bold text-base text-black">{item.title}</h3>
                    <p className="text-sm">{item.body}</p>
                </article>
            ))}
        </div>
    );
}