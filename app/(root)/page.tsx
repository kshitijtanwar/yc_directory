import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { StartupCardType } from "@/types/definitions";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;

    const posts = [
        {
            _id: 1,
            _createdAt: new Date(),
            views: 55,
            author: {
                _id: 1,
                name: "John Doe",
            },
            description:
                "This is a description of the startup. It is a very long description that goes",
            image: "https://images.unsplash.com/photo-1741762764258-8f9348bdf186?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Robots",
            title: "We Robots",
        },
    ];
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch your startup, <br /> Connect with Entreprenuers
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions.
                </p>
                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search Results for "${query}"` : "All Startups"}
                </p>
                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupCardType) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="text-20-semibold">
                            No results found for your search.
                        </p>
                    )}
                </ul>
            </section>
        </>
    );
}
