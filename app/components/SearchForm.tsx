import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchForm = () => {
    const query = "test";

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
                <button type="submit" className="search-btn text-white">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
            </div>
        </Form>
    );
};
export default SearchForm;
