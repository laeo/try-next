import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";
import { newsOptions } from "./news-options";
import NewsListCard from "./news-list-card";

export default function NewsPage() {
    const queryClient = getQueryClient();
    queryClient.prefetchQuery(newsOptions);

    return (
        <main className="container mx-auto p-4">
            <h1>News</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NewsListCard />
            </HydrationBoundary>
        </main>
    );
}