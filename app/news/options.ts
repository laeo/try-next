import { queryOptions } from "@tanstack/react-query";

type NewsItem = {
    id: number;
    title: string;
    body: string;
};

export const newsOptions = queryOptions({
    queryKey: ['news'],
    queryFn: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
            return response.json() as Promise<NewsItem[]>;
        }

        throw new Error('Network response was not ok');
    }
});