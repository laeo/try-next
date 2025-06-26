import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";
import { newsOptions } from "./options";
import NewsContent from "./content";

export default async function NewsPage() {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(newsOptions);

    return (
        <main className="container mx-auto p-4">
            <h1>News</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NewsContent />
            </HydrationBoundary>
        </main>
    );
}