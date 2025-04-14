import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups..."
            />
            <div className="flex gap-2">
                {query && <SearchFormReset />}
                <Button type="submit" className="search-btn text-white">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </Button>
            </div>
        </Form>
    );
};
export default SearchForm;
